import { useContext } from "react";
import Nav from "./nav";
import { globalContext } from "./app";

function Cart(){
    const {globalcart}=useContext(globalContext);
   return(
    <div>
        <Nav/>
        <h1>Cart</h1>
        {globalcart.length > 0 ? (
            globalcart.map((item,index)=>(
        <div key={item.id||index}>
            <img src={item.image} alt="{item.image}"/>
            <h5>{item.title}</h5>
            <p>{item.price}</p>
            <p>{item.category}</p>
        </div>
        ))):
        (
            <p>No items in the cart</p>
        )}
        
    </div>
   );
}
export default Cart;