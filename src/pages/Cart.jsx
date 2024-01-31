import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Cartitems from '../components/Cartitems';

export default function Cart() {
    const {cart}=useSelector((state)=>state);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( () => {
      setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
    }, [cart])
    
  return (
    <div className='main-cart'>
    {
        cart.length >0 ?
        <div className='cart-page'>
        {<div className='cart-item'>
            {
                cart.map((product)=>(<Cartitems key={product.id} product={product}/>))
            }
        </div>}
        <div className='checkout-section'>
            <div className='summary-sec'>
                <h3>Your Cart</h3>
                <h2>SUMMARY</h2>
                <p>
                    <span>Total Items :{cart.length}</span>
                </p>
            </div>
            <div>
                <p className='total-amount'>Total Amount:${totalAmount}</p>
                <button className='btn'>Check Out</button>
            </div>
        </div>
        </div>
       :
        (<div className='empty-item'>
            <h2>Cart Is Empty </h2>
            <NavLink to="/">
             <button >Add Item</button>
            </NavLink>
        </div>)
    }
    </div>
  )
}
