import React, { useState } from 'react'
import "./Log.css"

const Log = () => {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [emailMsg, setemailMsg] = useState("")
const [passwordMsg, setpasswordMsg] = useState("")

const login = ()=>{
    const userData = localStorage.getItem("users")
    const newData = JSON.parse(userData)
    console.log(newData[0].email);
    console.log(newData[0].password);

    if(email === "" && password === ""){
        setemailMsg("Enter a mail")
        setpasswordMsg("Enter a password")
    }else if(email === "" &&  password == ""){
        setemailMsg("")
        setpasswordMsg("Enter a password")
    }else if(email == "" && password !== ""){
        setemailMsg("Enter a mail")
        setpasswordMsg("")
    }else if(newData[0].email !== email){
        setemailMsg("wrong email")
        setpasswordMsg("")
    }else if(newData[0].password !== password){
        setemailMsg("")
        setpasswordMsg("wrong password")
        window.location.assign("Crud")
    }

    else if(newData[0].email === email && newData[0].password === password){
        setemailMsg("")
        setpasswordMsg("")
        window.location.assign("Crud")
    }
}


  return (
    <>
    <div className='parent-div'>
        <div className='lod-body'>
            <h1>Login</h1>
            <br/>
            <label>Email:</label>
            <input type='text' value={email} onChange={e => setEmail(e.target.value) }/>
            <span>{emailMsg}</span><br/><br/>
            <label  type='text' value={password} onChange={e => setPassword(e.target.value) }>Password:</label>
            <input/>
            <span>{passwordMsg}</span><br/><br/>
            <button onClick={login}>Login</button>
        </div>
    </div>
    </>
  )
}

export default Log