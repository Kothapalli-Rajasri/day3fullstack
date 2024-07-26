import Func from "./btn";

function Card(props){
    return(
        <div>
           
            {/* <h3>{props.program}</h3>
            <h3>{props.college}</h3>
            <h3>{props.year}</h3> */}


           

     <div className="card" style={{ width: '18rem' }}>
            <img src="fiui.jpeg" alt="" width={250}
            style={{border:'1px solid black',borderRadius:'20px'}}/>
               <div className="card-body">
                        <h3>name: {props.userFromArray}</h3>
                        <h3> branch: {props.user.branch}</h3>
                          <h3>year: {props.year}</h3>
                           {/* <button type="button" className="btn btn-primary">click</button> */}
                         <Func/>
                </div>
    </div>

            
        </div>
    )

}
export default Card;