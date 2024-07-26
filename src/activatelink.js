import { useState } from "react";
import Log from "./login";
import Reg from "./regform";



function Activatelink(){

    const[isLogin,setLogin]=useState('true');

    const showLogin =()=>{ setLogin(true) }
    const showRegister=()=>{setLogin(false)}

    return(
        <div>
            
            <div style={{display:'flex',flexDirection:'row',gap:'20px',marginLeft:'200px',marginTop:'50px'}}> 
           <button type="button" className="btn btn-outline-info" style={{boxShadow: '0 4px 8px rgba(240, 0, 238, 0.5), 0 8px 16px rgba(0, 238, 255, 0.5)',}}
           onClick={showLogin}>Login</button>
           <button type="button" className="btn btn-outline-info" style={{boxShadow: '0 4px 8px rgba(240, 0, 238, 0.5), 0 8px 16px rgba(0, 238, 255, 0.5)',}}
           onClick={showRegister}>Register</button>
           </div>

           {isLogin ?

             <Log/>
             :
             <Reg/>
           }
       
        </div>
    )

}
export default Activatelink;