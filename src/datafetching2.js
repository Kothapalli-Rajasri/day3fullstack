import { useEffect, useState } from "react";

function Datafetching2(){
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
     
     

     <table class="table">
  <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Descrption</th>
      <th scope="col">Category</th>
      <th scope="col">Image</th>
      
      <th scope="col">Rate</th>
      <th scope="col">Count</th>
      
    </tr>
  </thead>
  <tbody>
  {data.map((dataitem,index)=>
             <tr key={index}>
              <td> {dataitem.id}</td>
              <td> {dataitem.title}</td>
              <td> {dataitem.price}</td>
              <td> {dataitem.description}</td>
              <td> {dataitem.category}</td>
              <td> <img src={dataitem.image}/></td>
              <td>{  dataitem.rating.rate}</td> 
             <td>{ dataitem.rating.count}</td> 

            </tr>)}
  </tbody>
</table>

     
    </div>
  );
}
export default Datafetching2;