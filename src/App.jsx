import React from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Dashboard = React.lazy(() => import("./components/dashboard"));
const Landing = React.lazy(() => import("./components/Landing"));

// suspense api , asynchronous component fetching , asynchronous data fetching 

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AppBar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/landing" element={<Landing />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

function AppBar() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>App</h1>
      <div>
        {/* <button onClick={() => (window.location.href = "/dashboard")}> */}
        <button onClick={() => navigate("/dashboard")}>Dashboard</button>
        <button onClick={() => (window.location.href = "/landing")}>
          Landing Page
        </button>
      </div>
    </div>
  );
}
