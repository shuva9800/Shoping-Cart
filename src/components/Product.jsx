import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {add, remove} from "../redux/Slices/cardslice"


export default function Product({item}) {
    const {cart}=useSelector((state)=>state);
    const dispatch= useDispatch();
    function addItem(){
        dispatch(add(item));
        toast.success("item added successfully");
    }

    function removeItem(){

        dispatch(remove(item.id));
        toast.error("Item remove successfully");
    }

  return (
    <div>
        <div>
            <p>{item.title}</p>
        </div>
        <div>
            <p>{item.description}</p>
        </div>
        <div>
            <img src={item.image}/>
        </div>
        <div>
            <p>{item.price}</p>
        </div>
       <div>
        {
            cart.find((p)=> p.id==item.id)?
            (<button onClick={removeItem}>Remove Item</button>):
            (<button onClick={addItem}>Add To Cart</button>)
        }
       </div>
     

    </div>
  )
}
