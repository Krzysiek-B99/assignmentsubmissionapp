import './App.css';
import React from 'react'

function App() {

  const reqBody = {
    "username":"test",
    "password":"test"
  }
  fetch("api/auth/login",{
    headers:{
      "Content-Type":"application/json",

    },
    method:"post",
    body:JSON.stringify(reqBody)
  })
  .then((response) => Promise.all([response.json(),response.headers]))
  .then(([body,headers]) => {
    const authValue = headers.get("authorization");
    console.log(authValue);
    console.log(body);
  });

  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
