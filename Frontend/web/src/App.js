import './App.css';
import React, { useEffect, useState } from 'react'

function App() {
  const [jwt, setJwt] = useState("");

  useEffect(() => {
    const reqBody = {
      username:"test",
      password:"test",
    };

    fetch("api/auth/login",{
      headers:{
        "Content-Type":"application/json", 
      },
      method:"post",
      body:JSON.stringify(reqBody)
    })
    .then((response) => Promise.all([response.json(),response.headers]))
    .then(([body,headers]) => {
      setJwt(headers.get("authorization"));
    });
  },[]);
  
  useEffect(() => {
    console.log(`JWT is ${jwt}`);
  },[jwt])

  return (
    <div className="App">
      <h1>Hello world</h1>
      <div>
        JWT Value is {jwt}
      </div>
    </div>
  );
}

export default App;
