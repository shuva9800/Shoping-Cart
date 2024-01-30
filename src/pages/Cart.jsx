import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import Cartitems from '../components/Cartitems';

export default function Cart() {
    const {cart}=useSelector((state)=>state);
    
  return (
    <div>
    {
        cart.length >0 ?
        <div className='flex w-full'>
        {<div>
            {
                cart.map((product)=>(<Cartitems key={product.id} product={product}/>))
            }
        </div>}
        <div>
            <div>
                <h3>Your Cart</h3>
                <h3>Sumary</h3>
                <p>
                    <span>Total Items :{cart.length}</span>
                </p>
            </div>
            <div>
                <p>Total Amount:{}</p>
                <button>Check Out</button>
            </div>
        </div>
        </div>
       :
        (<div>
            <h2>Cart Is Empty </h2>
            <NavLink to="/">
             <button >Add Item</button>
            </NavLink>
        </div>)
    }
    </div>
  )
}
