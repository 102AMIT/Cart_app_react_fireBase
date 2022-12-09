import React, { Component } from 'react'

const CartItem=(props)=> {

    const { price, title, qty, img } = props.product;
    const { product, onIncreaseQuantity, onDecreaseQuantity, onDeleteProduct } = props;
    
    return (
      <div className='cart-item'>
        <div className='left-block'>
          <img style={styles.image} src={product.img} />
        </div>
        <div className='right-block'>
          <div style={{ fontSize: 25 }}>{title}</div>
          <div style={{ color: 'gray' }}>Rs {price}</div>
          <div style={{ color: 'gray' }}>Qty: {qty}</div>
          <div className='cart-item-actions'>
            {/* Buttons */}
            <img alt="increase" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/3303/3303893.png' onClick={() => onIncreaseQuantity(product)} />
            <img alt="decrease" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/992/992683.png' onClick={() => onDecreaseQuantity(product)} />
            <img alt="delete" className='action-icons' src='https://cdn-icons-png.flaticon.com/128/6861/6861362.png' onClick={() => onDeleteProduct(product.id)} />

          </div>

        </div>
      </div>
    )
  }



// we are using styles like this
const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: 'gray'

  }
}
export default CartItem;