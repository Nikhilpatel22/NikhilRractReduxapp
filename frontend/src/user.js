function User(props){
    const data={name:'Nikhil Patel',email:"nikhil@123"}
    return(
        <>
        {/* <h2>User Name: {props.name}</h2> */}
        <button onClick={()=>props.alert(data)}>click</button>
        </>
    )   
}

export default User;