import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Config from "./pages/Config";
export default function RoutApp() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/config" element={<Config/>} />
      </Routes>
    </Router>
  );
}