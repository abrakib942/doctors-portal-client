import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Pages/about/About";
import Appointment from "./Pages/Appointment/Appointment";
import Home from "./Pages/Home/Home";
import Login from "./Pages/login/Login";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/login/SignUp";
import RequireAuth from "./Pages/login/RequireAuth";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route
          path="/appointment"
          element={
            <RequireAuth>
              <Appointment />
            </RequireAuth>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
