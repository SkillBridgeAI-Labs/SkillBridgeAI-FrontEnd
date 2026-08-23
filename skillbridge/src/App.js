import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import RoleSelect from './pages/Roleselect';
import MentorSignup from "./pages/MentorSignup";
import MentorLogin from "./pages/MentorLogin";
import Payment from "./pages/Payment";
import PaymentSuccess from "./pages/PaymentSuccess";

// جوا <Routes>

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* شاشة اختيار الدور - نفس الصورة 1 تُستخدم للحالتين */}
        <Route path="/signup" element={<RoleSelect intent="signup" />} />
        <Route path="/login" element={<RoleSelect intent="login" />} />

        {/* مسارات الطالب */}
        <Route path="/signup/student" element={<AuthPage mode="signup" />} />
        <Route path="/login/student" element={<AuthPage mode="login" />} />

        {/* مسارات المنتور */}
        <Route path="/signup/mentor" element={<MentorSignup />} />
        <Route path="/login/mentor" element={<MentorLogin />} />

        <Route path="/payment" element={<Payment />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;