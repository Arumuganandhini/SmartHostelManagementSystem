import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNavbar from "./components/Navbar";
import Login from "./pages/Login";
import Notices from "./pages/Notices";
import Complaints from "./pages/Complaints";
import Messages from "./pages/Messages";
import LateEntry from "./pages/LateEntry";
import Emergency from "./pages/Emergency";
import Home from "./pages/Home";
import StudentDashboard from "./pages/StudentDashboard";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <TopNavbar />
      <div style={{ marginTop: "80px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/late" element={<LateEntry />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/student" element={<StudentDashboard />} /> 
          <Route path="/admin" element={<AdminDashboard />} />
  
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
