import { useContext, useEffect, useState } from 'react';
import { globalContext } from './app';

function Func({ product }) {
    const [count, setCount] = useState(0);
    const { globalCount, setGlobalCount, globalcart, setglobalcart } = useContext(globalContext);

    useEffect(() => {
        console.log("useEffect is called");
    }, []);

    const btncount = () => {
        setCount(count + 1);
        setGlobalCount(globalCount + 1);
    };

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
            setGlobalCount(globalCount - 1);
        }
    };

    const addcrt = () => {
        setCount(1);
        setGlobalCount(globalCount + 1);
    
        if (product && !globalcart.some(item => item.id === product.id)) {
            setglobalcart(prevCart => {
                const updatedCart = [...prevCart, product];
                console.log('Updated Cart in Func:', updatedCart);
                return updatedCart;
            });
        }
    };
    

    return (
        <div>
            {count === 0 ? (
                <button type="button" className="btn btn-dark" style={{ margin: '50px' }} onClick={addcrt}>
                    Add to cart
                </button>
            ) : (
                <div className='button' style={{ display: 'flex', padding: '60px' }}>
                    <button type="button" className="btn btn-dark" onClick={btncount}>+</button>
                    <h1>{count}</h1>
                    <button type="button" className="btn btn-dark" onClick={decreaseCount}>-</button>
                </div>
            )}
        </div>
    );
}

export default Func;
