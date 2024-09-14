import { useContext, useState } from "react";
import { globalContext } from "./app";

function Reg(){

    const[collegeid,setclzid]=useState('');
    const[password,setpassword]=useState('');
    const[email,setemail]=useState('');
    const[branch,setbranch]=useState('');
    const[year,setYear]=useState('');
    const[gender,setGender]=useState('');
    const[user,setUser]=useState('');
    const{setglobaluserobj} = useContext(globalContext);

    // const formSubmitted = (event) => {
    //   event.preventDefault();
    //   console.log(collegeid);
    //   console.log(password);
    //   console.log(email);
    //   console.log(branch);
    //   console.log(year);
    //   console.log(gender);

    // }

    const formSubmitted=(event)=>{
      event.preventDefault();
      const obj={
        collegeid,password,email,branch,year,gender
      }
     setUser(obj);
     setglobaluserobj(obj);

     localStorage.setItem("registeredCollegeID", collegeid);
     localStorage.setItem("registeredPassword", password);
      console.log(obj);
      console.log(user);
      
      
    };
    
    const getcollegeid=(event)=>{
        setclzid(event.target.value)
        
    }
    const getpassword=(event)=>{
      setpassword(event.target.value)
    }
    const getemail=(event)=>{
      setemail(event.target.value)
    }
    const getbranch=(event)=>{
      setbranch(event.target.value)
    }
    const getyear=(event)=>{
      setYear(event.target.value)
    }
    const getGender=(event)=>{
      setGender(event.target.value)
    }

    

    return(
        <div>
             <div className="card" style={{width:'30%',borderRadius: '15px',padding: '20px',marginLeft:'100px',marginTop:'20px',
                boxShadow: '0 4px 8px rgba(240, 0, 238, 0.5), 0 8px 16px rgba(0, 238, 255, 0.5)',
                background: 'linear-gradient(135deg, rgba(240, 0, 238, 0.3), rgba(0, 238, 255, 0.3))'}}>
  
                  <div className="card-body">
                     <h3 style={{ color: '#333', marginBottom: '20px' }}>Register</h3>
                     <p style={{ color: '#777', marginBottom: '20px' }}>Provide your details to login </p>
                  <form onSubmit={formSubmitted}>
                   <div >
    <label className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>College ID</label>
    <input type="text"  onChange={getcollegeid}placeholder=" College ID"className="form-control"
                           style={{borderRadius: '8px',padding: '10px',  width: '100%',  boxSizing: 'border-box',  marginBottom: '10px',  }}  />
 
              </div>
  <div >
    <label  className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>Password</label>
    <input type="password" onChange={getpassword}placeholder="Password"className="form-control" 
    style={{borderRadius: '8px',padding: '10px',  width: '100%',  boxSizing: 'border-box',  marginBottom: '10px',  }} />
  </div>

  <div >
    <label  className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>Email Address</label>
    <input type="email"onChange={getemail} placeholder="Enter your email"className="form-control" 
    style={{borderRadius: '8px',padding: '10px',  width: '100%',  boxSizing: 'border-box',  marginBottom: '10px',  }} />
  </div>

  <div >
    <label  className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>Branch</label>
    <select className="form-select" onChange={getbranch}  style={{borderRadius: '8px',padding: '10px',  width: '100%',  boxSizing: 'border-box',  marginBottom: '10px',  }} >
  <option value>select a Branch</option>
  <option value="IT">IT</option>
  <option value="ECE">ECE</option>
  <option value="CSE">CSE</option>
  <option value="MECH">MECH</option>
  <option value="EEE">EEE</option>
</select>
  
  </div>

  <div >
    <label  className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>Year</label>
    <select className="form-select" onChange={getyear}style={{borderRadius: '8px',padding: '10px',  width: '100%',  boxSizing: 'border-box',  marginBottom: '10px',  }} >
  <option value>select a year</option>
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  
</select>
  
  </div>

  <div>
  <label  className="form-label" style={{ fontWeight: 'bold', color: '#555' }}>Gender</label>
  <div style={{display:'flex',gap:'10px'}}>
  <div className="form-check">
  <input className="form-check-input" type="radio" name="a" id="1" value="Male"onChange={getGender} />
  <label  htmlFor="1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="a" id="2"value="Female"onChange={getGender} />
  <label  htmlFor="2">
    Female
  </label>
</div>
</div>
  </div>
  

  


  <button type="submit" className="btn btn-primary" style={{
                                background: 'linear-gradient(135deg, #f0e, #0ef)',
                                
                                padding: '5px 20px',
                                
                                borderRadius: '20px',
                                cursor: 'pointer',
                                
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                marginTop:'20px',
                                marginBottom:'10px',
                                display: 'block'
                            }}>Register</button>
               </form>
               
                 </div>
          </div>
        </div>
    )
}
export default Reg;