import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import SubmissionPage from "./Pages/SubmissionPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element = {<Home/>} />
        <Route path="/submission" element = {<SubmissionPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
