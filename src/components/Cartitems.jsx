import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { useDispatch } from "react-redux";
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { remove} from "../redux/Slices/cardslice"

export default function Cartitems({ product }) {
  const desc=`${product.description.substring(0,100)}...`;
  const dispatch=useDispatch();
  function deleteItem(){
    dispatch(remove(product.id));
    toast.error("Item remove successfully");
  }
  return (
    <div className="saveitem">
      <div>
        <img src={product.image} />
        <div>
          <p>{product.title}</p>
          <h1>{desc}</h1>
          <div>
            <p>{product.price}</p>
          </div>
          <div onClick={deleteItem}>
          <MdOutlineDeleteForever />
          </div>
        </div>
      </div>
    </div>
  );
}
