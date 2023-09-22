import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./components/core/LoginForm";
import SignupForm from "./components/core/SignupForm";
import ForgotPassword from "./pages/ForgotPassword";
// import UpdatePassword from "./pages/UpdatePassword";
import VerifyEmail from "./pages/VerifyEmail";
import AboutUs from "./pages/AboutUs";
import ContactUsForm from "./components/common/ContactUsForm";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import PrivateRoute from "./components/core/PrivateRoute";
import Dashboard from "./pages/Dashboard";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
function App() {
  const { isSignup } = useContext(AppContext);
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="login" element={<LoginForm />} />

        <Route path="forgot-password" element={<ForgotPassword />} />

        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />

        <Route
          path="verify-email"
          element={isSignup ? <VerifyEmail /> : <Navigate to="/signup" />}
        />

        {/* <Route
          path="update-password/:id"
          element={
            <PrivateRoute>
              <UpdatePassword />
            </PrivateRoute>
          }
        /> */}

        <Route path="about" element={<AboutUs />} />

        <Route
          path="contact"
          element={
            <PrivateRoute>
              <ContactUsForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
