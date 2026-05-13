
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Clients  from "./pages/Clients";
import Pets  from "./pages/Pets";
import Appointments  from "./pages/Appointments";
import Billing from "./pages/Billing";
import Settings from "./pages/Settings"
import Register from "./pages/Register"
import Home from "./pages/Home";
import Features from "./pages/Features"
import Prices from "./pages/Prices"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/features" element={<Features />} />
        <Route path="/prices" element={<Prices />} />

         <Route element={<MainLayout />}>
            <Route path="/dashboard" element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }/>
            <Route path="/clients" element={
              <ProtectedRoute>
                <Clients />
              </ProtectedRoute >
              } />
            <Route path="/pets" element={
              <ProtectedRoute>
                <Pets />
              </ProtectedRoute>
              } />
            <Route path="/appointments" element={
              <ProtectedRoute >
                <Appointments />
              </ProtectedRoute >
                } />
            <Route path="/billing" element={
                <ProtectedRoute >
                    <Billing />
                </ProtectedRoute >
                } />
            <Route path="/settings" element={
                <ProtectedRoute >
                  <Settings />
                </ProtectedRoute >
                } />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
