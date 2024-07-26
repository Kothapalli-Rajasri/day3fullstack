import { useEffect, useState } from "react";

function Datafetching(){
    const [data,setData]=useState([]);

    useEffect(()=>{
        const fetchMyData = async()=>{
            const res = await fetch ('https://jsonplaceholder.typicode.com/posts')
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
      <th scope="col">Userid</th>
      <th scope="col">Title</th>
      <th scope="col">Datafetching</th>
    </tr>
  </thead>
  <tbody>
  {data.map((dataitem,index)=>
             <tr key={index}>
              <td> {dataitem.id}</td>
              <td> {dataitem.userId}</td>
              <td> {dataitem.title}</td>
              <td> {dataitem.body}</td>
            </tr>)}
  </tbody>
</table>

     
    </div>
  );
}
export default Datafetching;