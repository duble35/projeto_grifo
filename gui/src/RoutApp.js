import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Floor from "./pages/Floor";
export default function RoutApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/andar" element={<Floor/>} />
      </Routes>
    </Router>
  );
}