import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllData";
import CodeForInterview from "./components/About";
import NavBar from "./components/NavBar";
import EditUser from "./components/EditUser";


function App() {
  return (
    <>

      <BrowserRouter >
        <NavBar />
        <Routes>  
          <Route path="/" element={<CodeForInterview />} />
          <Route path="/all" element={<AllUser />} />
          <Route path="/AddUser" element={<AddUser />} />
          <Route path="/edit/:id" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App