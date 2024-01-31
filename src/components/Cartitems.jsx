import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { remove} from "../redux/Slices/cardslice"

export default function Cartitems({ product }) {
  const title=`${product.title.substring(0,30)}..`
  const desc=`${product.description.substring(0,50)}...`;
  const dispatch=useDispatch();
  function deleteItem(){
    dispatch(remove(product.id));
    toast.error("Item remove successfully");
  }
  return (
    <div className="each-item">
      <div className="cart-image">
        <img src={product.image} />
        <div className="image-desc">
          <p>{title}</p>
          <h3>{desc}</h3>
          <div className="pricedelete-button">
             <p>${product.price}</p>
              <div onClick={deleteItem}>
            <MdOutlineDeleteForever />
          </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
