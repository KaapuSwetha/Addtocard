import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashBoard from "./dashboard/dashboard";
import NewOrder from "./dashboard/dash/neworder";
import Responsive from "./dashboard/dash/Responsive";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Responsive />} />
        <Route path="/new-order" element={<NewOrder />} />
      </Routes>
    </Router>
  );
}

export default App;
