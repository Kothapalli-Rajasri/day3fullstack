import { useContext } from "react";
import { Link } from "react-router-dom";
import { globalContext } from "./app";


function Nav(){
    const{globalCount} = useContext(globalContext);
    return(
        <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',background:'#e5e5e5'}}>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <Link to="/">Home</Link>
            <Link to="/products">products</Link>

        </div>

        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <Link to="/cart">Cart ({globalCount})</Link>
            <Link to="/profile">profile</Link>

        </div>

        </div>
    )

}
export default Nav;