import Card from "./card";
function Cardlist(){
    const name='Rajasri'
    const clz='SVECW'
    
    const userdetails={name:"Yamini",branch:"IT",year:"3rd"};
    const users=["yamini","rajasri","kavya","gaya"]
    const years=["1","2","3","4"]
    // const images = [
    //     "url_to_image_1.jpg",
    //     "url_to_image_2.jpg",
    //     "url_to_image_3.jpg",
    //     "url_to_image_4.jpg"
    // ];
    return(
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
            {
            users.map(
                (users,index)=>(<Card
                    key={index}
                program={name}
                college={clz}
                user={userdetails}
                userFromArray={users}
                year={years[index]}/>)
            )
            }
        </div>
    )
    // image={images[index]} if want images in differt cards
    // <img src={props.image} alt={props.userFromArray} width={250} style={{ border: '1px solid black', borderRadius: '20px' }} />

  
}
export default Cardlist;









// return(
//     <div>
//         {/* <Card program={name}
//         college={clz}
//         year={year}/> */}
//         <Card user={userdetails}/>
        
//     </div>
// )