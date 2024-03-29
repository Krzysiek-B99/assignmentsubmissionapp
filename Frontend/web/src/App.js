import './App.css';
import React, { useEffect } from 'react'
import { useLocalState } from './util/useLocalStorage';
import { Routes, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import Homepage from './Homepage';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import AssignmentView from './AssignmentView';

function App() {
  const [jwt, setJwt] = useLocalState("","jwt");

  return (

    <Routes>
      <Route path ="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      }
      />
      <Route path="/assignments/:id" element={
        <PrivateRoute>
          <AssignmentView/>
        </PrivateRoute>
      } 
      /> 
      <Route path="login" element={<Login/>} />
      <Route path="/" element={<Homepage/>} />

    </Routes>
  );

}

export default App;
