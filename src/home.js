import { createContext, useState } from "react";
import Activatelink from "./activatelink";
//import { Link } from "react-router-dom";
import Welcome from "./welcome";

export const UserContext = createContext();  // Create context

function Home() {
    const [globalisLogin,setglobalisLogin] = useState(false);
    // const[globalcount,setcount] = useState(5);
    return (
        <UserContext.Provider value={{ globalisLogin,setglobalisLogin}}>
            <div>
                {globalisLogin ? (
                    
                        <Welcome/>
                
                ) : (
                    <Activatelink />
                )}
            </div>
        </UserContext.Provider>
    );
}

export default Home;
