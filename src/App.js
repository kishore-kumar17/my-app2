import React from "react";
import "./App.css";
import RegisterForm from "./RegisterForm";
import CompA from "./components/CompA";
import Cycle from "./cycle";
import FunProps from "./FunProps";
import Form from "./form";
import Login from "./bs/Login";
import Loginsinglestate from "./bs/Loginsinglestate";
import Newform from "./Newform";
import LoginNewForm from "./components/LoginNewForm";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Twowaybind from "./Twowaybind";
import TwoWayBind from "./components/TwoWayBind";
import Exercise from "./Exercise";
import { Parent } from "./UseTwoWay/Parent";
import Keys from "./Usekeys/Keys";
import Example from "./UseTwoWay/Example";
function App() {
  // const details = ["iPHONE APPLE","13 PRO +",180000];

  return (
    <div className="App">
      {/* <LoginNewForm />
      <RegisterForm/>
      <CompA name ="Harish" age ="21" place ="ariyalour" />
      <Cycle />
      <FunProps />
      <Form />
      <Login />
      <Loginsinglestate />
      <Newform /> */}
      {/* <Exercise/> */}
      {/* <Twowaybind /> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Newform/>} />
          <Route path="login" element={<LoginNewForm />} />
          <Route path="home" element={<Home/>}/>
        </Routes>
      </BrowserRouter>
      <Home/> */}
      {/* <TwoWayBind />  */}
      {/* <Parent /> */}
      {/* <Keys/> */}
      {/* <Example /> */}
    </div>
  );
}

export default App;
