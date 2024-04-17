import { Routes, Route, Link } from "react-router-dom";
import "./components/Blue"
import "./components/Red"
import "./index.css";
import "./App.css"

function App() {

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to={"/blue"} element={<h1>Blue</h1>}>Blue</Link>
          <Link to={"/red"} element={<h1>Red</h1>}>Red</Link>
          <Link to={"/"} element={<h1>Home</h1>}>Home</Link>
        </div>

        <div id="main-section"> 
        <Routes>
        <Route path={"/blue"} element={<h1>Blue</h1>} />
        <Route path={"/red"} element={<h1>Red</h1>} />  
        <Route path={"/"} element={<h1>Home</h1>} />
        </Routes>
        </div>

      </div>
    </>
  );
}

export default App;
