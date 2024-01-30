import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import Loading from "../components/Loading";

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
    } catch (err) {
      console.log("error aya haaa");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);
  const[filtering,setFiltering]=useState(true);
 const[formdata, setFormdata]=useState({
  slider: 100,
})

  function changeHandler(event){

    setFiltering(false)
  setFormdata((prevdata)=>(
    {
      ...prevdata,
      [event.target.name]:event.target.value
    }
      ))
  // code to be added
  // const pricefilterdata=[];
  // pricefilterdata.push(post.filter((item)=>item.price>= formdata.slider));
  // console.log(pricefilterdata);
  // setPost(pricefilterdata)
  }
  return (
    <div>
      {/* <div>
        <input type="range" min="10" max="1000" 
          name="slider"
          onChange={changeHandler}
          value={formdata.slider}
        />
        <input 
          type="checkbox"
          name="fashion"
          onChange={changeHandler}
          value={formdata.slider}
        />
      </div> */}
      <div>
      {loading ? (
        <Loading />
      ) : 
      post.length > 0 ? (
        <div>
          {post.map((item) => (
            <Product key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div>NO POST FOUND</div>
      )}
      </div>
    </div>
  );
}
