// import logo from "./logo.svg";
// import "./App.css";
import HomePage from "./Component/HomePage";
import NavbarApp from "./Component/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./Component/About";
function App() {
  return (
    <div className="App">
      <NavbarApp />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/About" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
