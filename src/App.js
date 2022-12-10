import React from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

// import firebase  from './index'
class App extends React.Component {

  constructor(){
    super();
    // state is plane simple java Script object 
    this.state={
       products:[],
       loading:true
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);

    this.db=firebase.firestore()
}

componentDidMount(){
      this.db
      .collection('products')
      // here we are query the data using where like sql
      // .where('price','==',999)
      // .where('title','==','Mobile Phone')
      // .orderBy('price','desc')
         .orderBy('price')




      // here we are using onSnapshot beacuse when we are changing in firebase the changes reflected on client side
      // using get we can't achive this

      // .get()
      // .then((snapshot)=>{
      //   console.log(snapshot);
      //   snapshot.docs.map((doc)=>{
      //     console.log(doc.data());
      //   })
      //   const products=snapshot.docs.map((doc)=>{
      //     const data=doc.data();
      //     data['id']=doc.id;
      //     return data;
      //   })
      //   this.setState({
      //     products,
      //     loading:false
      //   })
      // })
      .onSnapshot((snapshot)=>{
        console.log(snapshot);
        snapshot.docs.map((doc)=>{
          console.log(doc.data());
        })
        const products=snapshot.docs.map((doc)=>{
          const data=doc.data();
          data['id']=doc.id;
          return data;
        })
        this.setState({
          products,
          loading:false
        })
      })
   
}


handleIncreaseQuantity=(product)=>{
    console.log('update the quantity ',product)
    const {products}=this.state;
    const index=products.indexOf(product);
    // products[index].qty+=1

    // this.setState({
    //     products:products
    // });

    const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty+1
    }).then(()=>{
      console.log('Updated successfully');
    }).catch((error)=>{
      console.log('Error',error);
    });

}
handleDecreaseQuantity=(product)=>{
  console.log('update the quantity ',product)
  const {products}=this.state;
  const index=products.indexOf(product);
  if(products[index].qty===0){
    return;
  }
  // products[index].qty-=1

  // this.setState({
  //     products:products
  // })
  const docRef=this.db.collection('products').doc(products[index].id);
    docRef.update({
      qty:products[index].qty-1
    }).then(()=>{
      console.log('Updated successfully');
    }).catch((error)=>{
      console.log('Error',error);
    });
}

handleDeleteProduct=(id)=>{
   const {products}=this.state;

  // const items=products.filter((item)=>item.id!==id);//return another array
  // this.setState({
  //   products:items
  // })
  const docRef=this.db.collection('products').doc(id);
  docRef.delete()
  .then(()=>{
    console.log('Delete successfully');
  }).catch((error)=>{
    console.log('Error',error);
  });

}

getCartCount=()=>{
  const {products}=this.state
  let count=0;

  products.forEach((product)=>{
    count+=+product.qty;
  })

  return count;
}

getCartTotal=()=>{
  const {products}=this.state;

  let cartTotal=0;
  products.map((product)=>{
    if(product.qty>0){
    cartTotal+=product.qty*product.price
    }
    return '';
  });
  return cartTotal;
}

addProduct=()=>{
  this.db
  .collection('products')
  .add({
    img:'https://cdn1.smartprix.com/rx-i6gTE5YIQ-w1200-h1200/6gTE5YIQ.jpg',
    price:900,
    qty:3,
    title:"Washing Machine"
  })
  .then((docRef)=>{
    console.log("Product Is Added",docRef);
  })
  .catch((error)=>{
    console.log('Error',error)
  })
}

  render(){
  const {products,loading}=this.state;
  return (
    <div className="cart">
      <Navbar count={this.getCartCount()} />
      <button onClick={this.addProduct} style={{padding:20 , frontSize:20}}>Add Product</button>
      <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />
      {loading && <h1>Loading Products ....</h1>}
      <div style={{padding:10,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>

    </div>
  );
}
}


export default App;
