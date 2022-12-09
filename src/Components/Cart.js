import React, { Component } from 'react'
import CartItem from "./CartItem";

export default class Cart extends Component {
    constructor(){
        super();
        // state is plane simple java Script object 
        this.state={
           products:[
            {
              price :999,
              title:'Phone',
              qty :100,
              img:'',
              id:1
            },
            {
              price :99,
              title:'Watch',
              qty :10,
              img:'',
              id:2
            },
            {
              price :9999,
              title:'Laptop',
              qty :15,
              img:'',
              id:3
            },
            {
              price :10000,
              title:'TV',
              qty :20,
              img:'',
              id:4
            },
            {
              price :100,
              title:'Computer',
              qty :18,
              img:'',
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
      if(products[index].qty==0){
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
  
  render() {
    const {products}=this.state;
    return (
      <div className='cart'>

      
      {products.map((product)=>{
        return (
        <CartItem 
        product={product} 
        key={product.id}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
        />
        )
      })}
      </div>
    )
  }
}
