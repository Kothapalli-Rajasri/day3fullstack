import { useContext, useEffect, useRef, useState } from "react";
import { UserContext } from "./home";  // Import UserContext from home.js

function Log() {
    const collegRef = useRef(null);
    const passRef = useRef(null);
    const [mess, setMess] = useState("");
    const {  setglobalisLogin } = useContext(UserContext);

    useEffect(() => {
        collegRef.current.focus();
    }, []);

    const formsubmitted = (event) => {
        event.preventDefault();
        if (collegRef.current.value === passRef.current.value) {
            setMess("Correct");
            setglobalisLogin(true);
            localStorage.setItem("name","Reactjs")
        } else {
            setMess("Incorrect");
        }
        collegRef.current.value = '';
        passRef.current.value = '';
    };

    return (
        <div>
            <div className="card" style={{
                width: '30%',
                borderRadius: '15px',
                boxShadow: '0 4px 8px rgba(240, 0, 238, 0.5), 0 8px 16px rgba(0, 238, 255, 0.5)',
                padding: '20px',
                margin: '100px',
                background: 'linear-gradient(135deg, rgba(240, 0, 238, 0.3), rgba(0, 238, 255, 0.3))'
            }}>
                <div className="card-body">
                    <h3 style={{ color: '#333', marginBottom: '20px' }}>Login</h3>
                    <p style={{ color: '#777', marginBottom: '20px' }}>Provide your details to login</p>
                    <form onSubmit={formsubmitted}>
                        <div className="mb-3">
                            <label className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>College ID</label>
                            <input type="text" placeholder="College ID" className="form-control"
                                style={{ borderRadius: '8px', padding: '10px', width: '100%', boxSizing: 'border-box', marginBottom: '10px' }} ref={collegRef} />
                        </div>
                        <div className="mb-3">
                            <label className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>Password</label>
                            <input type="password" placeholder="Password" className="form-control"
                                style={{ borderRadius: '8px', padding: '10px', width: '100%', boxSizing: 'border-box', marginBottom: '10px' }} ref={passRef} />
                        </div>
                        <button type="submit" className="btn btn-primary" style={{
                            background: 'linear-gradient(135deg, #f0e, #0ef)',
                            padding: '10px 20px',
                            borderRadius: '20px',
                            cursor: 'pointer',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            display: 'block'
                        }}>Login</button>
                    </form>
                    <p>{mess}</p>
                </div>
            </div>
        </div>
    );
}

export default Log;
