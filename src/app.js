import { BrowserRouter,  Route, Routes } from "react-router-dom";

import Datafetching3 from "./api";
import Activatelink from "./activatelink";
import Home from "./home";
import { createContext, useState } from "react";
import Profile from "./profile";
import Cart from "./cart";
import Cardlist from "./cardlist";
export const globalContext = createContext();

function App(){
    const [globalCount,setGlobalCount] = useState(0);
    const [globaluserobj, setglobaluserobj] = useState({});
    const [globalisLogin,setglobalisLogin]=useState(false);
    
    return(
        <globalContext.Provider value={{ globalCount, setGlobalCount , globaluserobj, setglobaluserobj,globalisLogin,setglobalisLogin}} >
       
            <BrowserRouter>
               <Routes>
                  
                  <Route path="/" element={<Home/>}/>
                  <Route path="/products" element={<Datafetching3/>}/>
                  <Route path="/profile" element={<Profile/>}/>
                  <Route path="/cart" element={<Cart/>}/>
               </Routes>
            </BrowserRouter>
     </globalContext.Provider>
    )

}
export default App;