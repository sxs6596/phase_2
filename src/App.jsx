import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import { Toaster } from "react-hot-toast"; // Import the Toaster component
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import FeaturedTheses from "./components/FeaturedTheses";
import PeerReview from "./components/PeerReview";
import PrivacyPolicy from "./components/Privacy";
import Search from "./components/Search";
import Statistics from "./components/Statistics";
import SubmitThesis from "./components/SubmitThesis";
import Register from "./components/Register";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Toaster position="top-center" reverseOrder={false} />{" "}
      {/* Add Toaster here */}
      <Routes>
        {/* Wrap your routes with the Layout component */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/statistics" element={<Statistics />} /> */}

          {/* Open Routes */}
          <Route path="/search" element={<Search />} />

          {/* Protected Routes */}
          <Route
            path="/submit-thesis"
            element={
              <ProtectedRoute
                element={SubmitThesis}
                allowedRoles={["Author", "Admin"]}
              />
            }
          />
          <Route
            path="/peer-review"
            element={
              <ProtectedRoute
                element={PeerReview}
                allowedRoles={["Reviewer"]}
              />
            }
          />
          <Route
            path="/featuredtheses"
            element={
              <ProtectedRoute
                element={<FeaturedTheses />}
                allowedRoles={["ContentManager", "Admin"]}
              />
            }
          />
          <Route
            path="/statistics"
            element={
              <ProtectedRoute
                element={Statistics}
                allowedRoles={["Admin", "ContentManager"]}
              />
            }
          />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
