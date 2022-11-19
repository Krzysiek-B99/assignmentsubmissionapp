import './App.css';
import React, { useEffect } from 'react'
import { useLocalState } from './util/useLocalStorage';

function App() {
  const [jwt, setJwt] = useLocalState("","jwt");

  
  useEffect(() => {
    if (!jwt){
    const reqBody = {
      username:"tesssst",
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
  }
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
