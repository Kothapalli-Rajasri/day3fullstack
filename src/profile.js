import { useContext, useEffect } from "react";
import { globalContext } from "./app";
import Nav from "./nav";




function Profile() {
    const { globaluserobj } = useContext(globalContext);
    const { setglobalisLogin } = useContext(globalContext);
    const logoutAction = () => { setglobalisLogin(false); }
    useEffect(()=>{
        const name=localStorage.getItem("name");
        console.log(name)
    })

    return (

        <div>
            <Nav />
            <h1>profile page</h1>
            <h6>College id: {globaluserobj.collegeid}</h6>
            <h6>Password {globaluserobj.password}</h6>
            <h6>Email: {globaluserobj.email}</h6>
            <h6>Branch: {globaluserobj.branch}</h6>
            <h6>Year: {globaluserobj.year}</h6>
            <h6>Gebder:{globaluserobj.gender}</h6>
            <button type="submit" onClick={logoutAction} className="btn btn-primary" style={{
                background: 'linear-gradient(135deg, #f0e, #0ef)',
                padding: '5px 20px', borderRadius: '20px',
                cursor: 'pointer', marginLeft: 'auto', marginRight: 'auto',
                marginTop: '20px', marginBottom: '10px', display: 'block'
            }}>Logout</button>

        </div>
    )
}
export default Profile;