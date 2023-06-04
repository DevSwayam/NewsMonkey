import React, { Component } from "react";
import NavBar from "./NavBar";
import News from "./News";
import Footer from "./Footer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";

export default class App extends Component {
  c = "Swayam ";
  render() {
    return (
      <div>
        <Router> 
          <NavBar />
          <News pageSize={5} country="in" category="general" />
          <Footer />
          <Routes>
            <Route exact path="/Business" element={<News key="business" pageSize={5} country="in" category='business'/>}/>
            <Route exact path="/General" element={<News key="general" pageSize={5} country="in" category='general'/>}/>
            <Route exact path="/Entertariment" element={<News key="entertainment" pageSize={5} country="in" category='entertainment'/>}/>
            <Route exact path="/Health" element={<News key="health" pageSize={5} country="in" category='health'/>}/>
            <Route exact path="/Science" element={<News key="science" pageSize={5} country="in" category='science'/>}/>
            <Route exact path="/Sports" element={<News key="sports" pageSize={5} country="in" category='sports'/>}/>
            <Route exact path="/Technology" element={<News key="technology" pageSize={5} country="in" category='technology'/>}/>
          </Routes>
        </Router>
      </div>
    );
  }
}

/*
function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
*/