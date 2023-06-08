import React from "react";
import NavBar from "./NavBar";
import News from "./News";
import Footer from "./Footer";
import {BrowserRouter as Router,Routes,Route,} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import { useState } from "react";

const App = () =>  {
  const apiKey = '96a3d0a7dc5b46ba9959f3f161623adc'
  const [progress, setProgres] = useState(0)

  const setProgress =(progress)=> {
    setProgres(progress)
  }
    return (
      <div>
        <Router> 
          <NavBar />
          <LoadingBar color='#f11946' progress={progress} />
          <Routes>
          <Route exact path="/" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="general" pageSize={5} country="in" category='general'/>}/>
            <Route exact path="/Business" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="business" pageSize={5} country="in" category='business'/>}/>
            <Route exact path="/General" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="general" pageSize={5} country="in" category='general'/>}/>
            <Route exact path="/Entertariment" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="entertainment" pageSize={5} country="in" category='entertainment'/>}/>
            <Route exact path="/Health" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="health" pageSize={5} country="in" category='health'/>}/>
            <Route exact path="/Science" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="science" pageSize={5} country="in" category='science'/>}/>
            <Route exact path="/Sports" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="sports" pageSize={5} country="in" category='sports'/>}/>
            <Route exact path="/Technology" element={<News setProgress = {setProgress}  apiKey = {apiKey} key="technology" pageSize={5} country="in" category='technology'/>}/>
          </Routes>
          <Footer/>
        </Router>
      </div>
    );
  }

  export default App

