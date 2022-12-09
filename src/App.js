
import React from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
class App extends React.Component {

  constructor(){
    super();
    // state is plane simple java Script object 
    this.state={
       products:[
        {
          price :999,
          title:'Phone',
          qty :100,
          img:'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGhvbmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:1
        },
        {
          price :99,
          title:'Watch',
          qty :10,
          img:'https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:2
        },
        {
          price :9999,
          title:'Laptop',
          qty :15,
          img:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
          id:3
        },
        {
          price :10000,
          title:'TV',
          qty :20,
          img:'https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
          id:4
        },
        {
          price :100,
          title:'Desktop',
          qty :18,
          img:'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
          id:5
        }
       ]
    }
    // this.increaseQuantity=this.increaseQuantity.bind(this);
}

handleIncreaseQuantity=(product)=>{
    console.log('update the quantity ',product)
    const {products}=this.state;
    const index=products.indexOf(product);
    products[index].qty+=1

    this.setState({
        products:products
    })
}
handleDecreaseQuantity=(product)=>{
  console.log('update the quantity ',product)
  const {products}=this.state;
  const index=products.indexOf(product);
  if(products[index].qty===0){
    return;
  }
  products[index].qty-=1

  this.setState({
      products:products
  })
}

handleDeleteProduct=(id)=>{
const {products}=this.state;

const items=products.filter((item)=>item.id!==id);//return another array
this.setState({
  products:items
})
}

getCartCount=()=>{
  const {products}=this.state
  let count=0;

  products.forEach((product)=>{
    count+=product.qty;
  })

  return count;
}

getCartTotal=()=>{
  const {products}=this.state;

  let cartTotal=0;
  products.map((product)=>{
    cartTotal+=product.qty*product.price
  })
  return cartTotal;
}

  render(){
  const {products}=this.state;
  return (
    <div className="cart">
      <Navbar count={this.getCartCount()}/>
      <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{padding:10,fontSize:20}}>TOTAL: {this.getCartTotal()}</div>

    </div>
  );
}
}


export default App;
