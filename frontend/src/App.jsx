import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CreatePlan from "./pages/CreatePlan";
import ViewPlans from "./pages/ViewPlans";
import ViewPlan from "./pages/ViewPlan";
import PrivateComponent from "./components/PrivateComponent";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<PrivateComponent />}>
          <Route path="" element={<Home />} />
          <Route path="create-plan" element={<CreatePlan />} />
          <Route path="view-plans" element={<ViewPlans />} />
          <Route path="plan/:id" element={<ViewPlan />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <ToastContainer />
      <Footer />
    </Router>
  );
};

export default App;
