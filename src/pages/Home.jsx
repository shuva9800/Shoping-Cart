import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Loading from "../components/Loading";
import { MdHelpOutline } from "react-icons/md";

export default function Home() {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState([]);

  async function fetchData() {
    setLoading(true);
    try {
      const data = await fetch(API_URL);
      const value = await data.json();
      setPost(value);
      console.log(post);

      console.log(post);
    } catch (err) {
      console.log("error aya haaa");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);


 const[formdata, setFormdata]=useState({
  slider: 7,
  cloth:false,
  jewelery:false,
  electronics:false
})

  function changeHandler(event){
    let { name, type, value, checked } = event.target;
  setFormdata((prevdata)=>(
    {
      ...prevdata,
      [name]: type === "checkbox" ? checked : value
    }
      ))
  // code to be added
  // const pricerageitem= post.filter((item)=> item.price>= formdata.slider);
  // setPost(pricerageitem);
  // console.log(pricerageitem);
  //if man's cloth is false then remove this type of object from pricerageitem
  }
function filterHandler(event){
  event.preventDefault();
  console.log("hello")
  const pricerageitem= post.filter((item)=> item.price>= formdata.slider);
  setPost(pricerageitem);
  if(formdata.electronics==false)
  {
    const withoutelectromics=pricerageitem.filter((item)=>item.category!=="electronics");
    setPost(withoutelectromics);
  }
  
}
  return (
    <div>
      <div>
       <form onSubmit={filterHandler}>
       <input type="range" min="7" max="1000" 
          name="slider"
          onChange={changeHandler}
          value={formdata.slider}
        />
           <label>
        <input 
          type="checkbox"
          name="cloth"
          onChange={changeHandler}
          chaked={formdata.cloth}
        />
          Clothes
        </label>
        <label>
        <input 
          type="checkbox"
          name="jewelery"
          onChange={changeHandler}
          chaked={formdata.jewelery}
        />
        Jewelery
        </label>

        <label>
        <input 
          type="checkbox"
          name="electronics"
          onChange={changeHandler}
          chaked={formdata.slider}
        />
        Electronics
        </label>
        <button>Check Now</button>
       </form>
      </div>
      <div>
      {loading ? (
        <Loading />
      ) : 
      post.length > 0 ? (
        <div className="grid xm:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
          {post.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>NO DATA FOUND</p>
        </div>
      )}
      </div>
    </div>
  );
}
