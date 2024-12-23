import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import DashBoard from "./dashboard/dashboard";
import NewOrder from "./dashboard/dash/neworder";
import Responsive from "./dashboard/dash/Responsive";
import { CountProvider } from "./dashboard/context/contextprovider";
import Profile from "./dashboard/dash/profile";
import Category from "./dashboard/dash/category";
import MainPage from "./dashboard/dash/mainpage";
function App() {
  return (
    <CountProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sales" element={<Responsive />} />
          <Route path="/new-order" element={<NewOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </Router>
    </CountProvider>
  );
}

export default App;
