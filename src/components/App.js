import "../styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Eshop from "../pages/Eshop";
import Moncompte from "../pages/Moncompte";
import Signup from "../pages/Signup";
import Login from "../pages/Login";
import Notfundpage from "../pages/Notfundpage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="eshop" element={<Eshop />} />
            <Route path="moncompte" element={<Moncompte />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="*" element={<Notfundpage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
