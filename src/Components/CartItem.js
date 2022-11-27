import React, { Component } from 'react'

export default class CartItem extends Component {
  render() {
    return (
      <div className='cart-item'>
        <div className='left-block'>
            <img style={styles.image}/>
        </div>
        <div className='right-block'>
            <div style={{fontSize:25}}>Phone</div>
            <div style={{color:'gray'}}>Rs 999</div>
            <div style={{color:'gray'}}>Qty: 1</div>
            <div className='cart-item-actions'>
                {/* Buttons */}

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
