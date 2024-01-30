import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {add, remove} from "../redux/Slices/cardslice"


export default function Product({item}) {
    const {cart}=useSelector((state)=>state);
    const desc=`${item.description.substring(0,50)}...`;

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
    <div className='flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in-out hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] gap 3 p-4 mt-10 ml-5 rounded-xl '>
        <div>
            <p className='text-gray-700 font-semibold lext-lg text-left truncate w-40 mt-1'>{item.title}</p>
        </div>
        <div>
            <p className='w-40 text-gray-400 font-normal text-[10px] text-left'>{desc}</p>
        </div>
        <div className='h-[180px]'>
            <img src={item.image} className='h-full w-full'/>
        </div>
        <div className='flex justify-between items-center w-full'>
            <div>
                <p className='text-green-600 font-semibold items-center w-full mt-5'>`${item.price}</p>
            </div>
            <div >
                {
                    cart.find((p)=> p.id==item.id)?
                    (<button
                     className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold uppercase text-[12px] p-1 px-3
                      hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out'
                    onClick={removeItem}>Remove Item</button>):
                    (<button 
                      className='text-gray-700 border-2 border-gray-700 rounded-full font-semibold uppercase text-[12px] p-1 px-3
                      hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out'
                    onClick={addItem}>Add To Cart</button>)
                }
            </div>
        </div>
     

    </div>
  )
}
