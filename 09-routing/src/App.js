import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./Pages/Dashboard/Home";
import Users from "./Pages/Dashboard/Users";
import UserDetail from "./Pages/Dashboard/UserDetail";
import Contact from "./Pages/Dashboard/Contact";
import Login from "./Pages/Auth/Login";

import './App.css';
import DashboardLayouts from "./layouts/DashboardLayouts";
import AuthLayouts from "./layouts/AuthLayouts";
import Register from "./Pages/Auth/Register";

import Error404 from "./Pages/Errors/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayouts />}>
            <Route index element={<Home />} />
            <Route path="users" element={<Users />} />
            <Route path="users/:id" element={<UserDetail />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="auth" element={<AuthLayouts />}>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
            

    </>
  );
}

export default App;
