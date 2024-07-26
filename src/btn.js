import {useContext, useEffect, useState} from 'react';
import { globalContext } from './app';

function Func(){
    // const count=0;
    const [count,setCount]=useState(0);
    const {globalCount, setGlobalCount} = useContext(globalContext);
    
    useEffect(()=>{
      // setCount(5);
        console.log("use effect  is called")
    });

    const btncount=()=>{
        setCount(count+1)
        setGlobalCount(globalCount + 1);
        console.log(count);
    }
    function decreaseCount(){
        setCount(count-1);
        setGlobalCount(globalCount - 1);

    }
    function addcrt(){
        setCount(1)
        setGlobalCount(globalCount + 1);


    }
    
    return(
        <div>
            {(count===0)?
             <button type="button" className="btn btn-dark " style={{margin:'50px'}}onClick={addcrt}>Add to cart</button>
             :

            <div className='button' style={{display:'flex',padding:'60px'}}>
            <button type="button" className="btn btn-dark "onClick={btncount}>+</button>
            <h1> {count}</h1>
            <button type="button" className="btn btn-dark "onClick={decreaseCount}>-</button>
            </div>
         }

        </div>
    )

}
export default Func;