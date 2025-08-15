import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Floor from "./pages/Floor";
import PhoneBook from "./pages/PhoneBook";
export default function RoutApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PhoneBook/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/andar" element={<Floor/>} />
      </Routes>
    </Router>
  );
}