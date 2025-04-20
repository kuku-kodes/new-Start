import { useState } from "react";

const User = ({ name }) => {

    const [count, setCount] = useState(0)

    return (
        <div className="usercard">
            <h2>Name:{name} </h2>
            <div>Count ={count}</div>
            <button onClick={()=>{setCount(count+1)}}>+</button>&nbsp; &nbsp;
            <button onClick={() =>{setCount(count-1)}}>-</button>
            <h3>Location: Jhansi</h3>
            <h3>Contact No: 9532144873 </h3>
        </div>
    )
}

export default User;