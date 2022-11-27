import React, { Component } from 'react'

export default class CartItem extends Component {
    constructor(){
        super();
        // state is plane simple java Script object 
        this.state={
            price :999,
            title:'Phone',
            qty :1,
            img:''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
    }
    // when ever we are using arrow function this bind with the instance of the class
    increaseQuantity=()=>{
      console.log(this.state)
      // method 1
      // this.setState({
      //   qty:this.state.qty+1 //this known as shallow merging after set state react will re render the property
      // });
      // mathod 2
      // when we need previous state then we use this
      this.setState((prevState)=>{
        return {
          qty:prevState.qty+1
        }
      });
    }
    decreaseQuantity=()=>{
      if(this.state.qty==0){
        return;
      }

      // this.state.qty += 1
      console.log(this.state)
      // this.setState({
      //   qty:this.state.qty-1
      // });
      this.setState((prevState)=>{
        return {
          qty:prevState.qty+1
        }
      })
    }
  render() {
    const { price,title,qty,img}=this.state;
    return (
      <div className='cart-item'>
        <div className='left-block'>
            <img style={styles.image}/>
        </div>
        <div className='right-block'>
            <div style={{fontSize:25}}>{title}</div>
            <div style={{color:'gray'}}>Rs {price}</div>
            <div style={{color:'gray'}}>Qty: {qty}</div>
            <div className='cart-item-actions'>
                {/* Buttons */}
                <img alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3303/3303893.png' onClick={this.increaseQuantity}/>
                <img alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png'  onClick={this.decreaseQuantity}/>
                <img alt="delete" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' />

            </div>

        </div>
      </div>
    )
  }
}

// we are using styles like this
const styles={
    image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'gray'
      
    }
  }
