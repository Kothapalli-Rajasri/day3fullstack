import {useEffect,useState} from "react";
import axios from "axios";
function Fetchdata(){
    //create an state variable to aasign response JSON file
    const [data,setData] = useState([]);
    useEffect(()=>{
        const fetchmydata = async ()=>{
            const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
            console.log(res);
            console.log(res.data);
            const resData = await res.data;
            setData(resData);
            //console.log(resData);
        }
        fetchmydata();
    },[])
    return(
        <div>fetching data
        <table className="table">
        <thead>
            <tr>
            <th scope="col">ID</th>
            <th scope="col">UserId</th>
            <th scope="col">title</th>
            <th scope="col">body</th>
            </tr>
        </thead>
        <tbody>
            {data.map((dataItem,index) => 
            <tr key={index}>
                <td>{dataItem.id}</td>
                <td>{dataItem.userId}</td>
                <td>{dataItem.title}</td>
                <td>{dataItem.body}</td>
            </tr>)}
        </tbody>
        </table>
        </div>
    );
}
export default Fetchdata;