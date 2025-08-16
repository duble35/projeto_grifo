import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Floor from "./pages/Floor";
import PhoneBook from "./pages/PhoneBook";
import ConfigPhoneBook from "./pages/ConfigPhoneBook";
import Login from "./pages/Login";
export default function RoutApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneBook/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/andar" element={<Floor/>} />
        <Route path="/agenda" element={<ConfigPhoneBook/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </Router>
  );
}