import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./routes/Layout";
import Home from "./routes/Home";
import NoMatch from "./routes/NoMatch";
import Portafolio from "./routes/Portafolio";
import DetalleCripto from "./routes/DetalleCripto";
import Depositar from "./routes/Depositar";
import Retirar from "./routes/Retirar";
import Login from "./routes/Login";
import Registro from "./routes/Registro";
import Perfil from "./routes/Perfil";
import { UserProvider } from "./contexts/UserContext";
import Movimientos from "./routes/Movimientos";
import Comprar from "./routes/Comprar";
import { SkeletonTheme } from "react-loading-skeleton";

export default function App() {
  return (
    <SkeletonTheme baseColor="#485769" highlightColor="#374151">
      <UserProvider>
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
            <Route
              path="perfil"
              element={
                <ProtectedRoute>
                  <Perfil />
                </ProtectedRoute>
              }
            />
            <Route
              path="movimientos"
              element={
                <ProtectedRoute>
                  <Movimientos />
                </ProtectedRoute>
              }
            />
            <Route
              path="comprar/:id"
              element={
                <ProtectedRoute>
                  <Comprar />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registro />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </UserProvider>
    </SkeletonTheme>
  );
}

function ProtectedRoute({ children }) {
  const user = localStorage.getItem("user");
  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
