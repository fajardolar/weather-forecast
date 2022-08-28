import { Link } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Home from "./routes/home/index";
import Default from "./routes/default/index";
import Weather from "./routes/weather/index";
import { useAuth0 } from '@auth0/auth0-react';

export default function App() {

  const {
    isAuthenticated,
    loginWithRedirect, logout, user
  } = useAuth0();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="login" element={<Default />} />
        <Route path="weather" element={isAuthenticated != null ? <Weather /> : <Navigate to="/login" />} />
        <Route path="home" element={isAuthenticated != null ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}


