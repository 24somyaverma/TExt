import './App.css';
import Navbar from './Components/Navbar.js';
import TExtForm from './Components/TExtForm';
import About from './Components/About';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  BrowserRouter,
  Link,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
      <div className="container">
      <Navbar title="TextUtils"/>
	<Routes>
		<Route path="/about" element={<About />}></Route>	
		<Route path="/" element={<TExtForm />}></Route>	
   
	 </Routes>

      </div>

</BrowserRouter>
    </>
  );
}

export default App;

