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
    } catch (err) {
      console.log("error aya haaa");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);




 // slider handeler  function 
const[slidervalue, setSlidervalue]=useState(7);
function changesliderHandler(event){
  setSlidervalue(event.target.value)
}

//check box handel function
const[checkeditem,setCheckeditem]=useState([]);

function changeHandler(catagory){
  if(checkeditem.includes(catagory)){
    setCheckeditem(checkeditem.filter((item)=> item !== catagory));
  }
  else{
    setCheckeditem([...checkeditem ,catagory])
  }

}


//form submit function
function filterHandler(event){
  event.preventDefault();
  const filterItem=post.filter((item)=>
  (checkeditem.length==0 || checkeditem.includes(item.catagory)) &&
  item.price>=slidervalue );
  setPost(filterItem);
}
  return (
    <div>
      {/* <div>
       <form onSubmit={filterHandler}>
       <input type="range" min="7" max="1000" 
          name="slider"
          onChange={changesliderHandler}
          value={slidervalue}
        />
           <label>
        <input 
          type="checkbox"
          name="cloth"
          onChange={()=> changeHandler("men's clothing")}
          chaked={checkeditem.includes("men's clothing")}
        />
          Clothes
        </label>
        <label>
        <input 
          type="checkbox"
          name="jewelery"
          onChange={()=> changeHandler("jewelery")}
          chaked={checkeditem.includes("jewelery")}
        />
        Jewelery
        </label>

        <label>
        <input 
          type="checkbox"
          name="electronics"
          onChange={()=> changeHandler('electronics')}
          chaked={checkeditem.includes('electronics')}
        />
        Electronics
        </label>
        <button>Check Now</button>
       </form>
      </div> */}
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
