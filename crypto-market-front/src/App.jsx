import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import NoMatch from "./routes/NoMatch";
import Portafolio from "./routes/Portafolio";
import DetalleCripto from "./routes/DetalleCripto";
import Depositar from "./routes/Depositar";
import Retirar from "./routes/Retirar";
import Login from "./routes/Login";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="portafolio"
          element={
            <ProtectedRoute>
              <Portafolio />
            </ProtectedRoute>
          }
        />
        <Route
          path="cripto/:id"
          element={
            <ProtectedRoute>
              <DetalleCripto />
            </ProtectedRoute>
          }
        />
        <Route
          path="depositar"
          element={
            <ProtectedRoute>
              <Depositar />
            </ProtectedRoute>
          }
        />
        <Route
          path="retirar"
          element={
            <ProtectedRoute>
              <Retirar />
            </ProtectedRoute>
          }
        />
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Navigate to="/login" />;
  }

  return children;
}