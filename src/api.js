import { useEffect, useState } from "react";         //day3 assignment
import Nav from "./nav";
import Func from "./btn";

function Datafetching3(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        const fetchMyData = async()=>{
            const res = await fetch ('https://fakestoreapi.com/products')
            console.log(res.ok);
            // console.log(await res.json())
            const resData=await res.json();
            setData(resData);
            console.log(resData);

        }
        fetchMyData();
    })
  return(

    <div>
      <Nav/>
    <div className="card-container" style={{display:"flex",flexWrap:"wrap",gap:"20px",padding:'20px',justifyContent:'center'}}>

      
     
     {data.map((dataitem,index)=>(

     
     <div className="card" key={index}style={{border:'1px solid #ddd',borderRadius:' 10px',
       width: '350px',boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
  <img src={dataitem.image} alt="" style={{width:'100%',height:'250px'}}/>
  <div className="card-body" >
    <h5 >{dataitem.title}</h5>
    <h6>{dataitem.category}</h6>
    
    {/* <p >{dataitem.description}</p> */}
    <h5>${dataitem.price}</h5>
    <p>Rating : {dataitem.rating.rate}</p>
    <p>no.of orders placed :{dataitem.rating.count}</p>
    
   
    
  </div>
  <div style={{marginBottom:'10px'}}>
    <Func/>
    </div>
</div>
))}
     
    </div>
    </div>
  );
}
export default Datafetching3;