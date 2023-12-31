import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/Footer";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Login from "./pages/Login/Login";
import Signup from "./pages/Login/Signup";
import Admin from "./pages/Admin/Admin";
import AdminDash from "./pages/AdminDash/AdminDash";
import SideNav from "./pages/AdminDash/AdminHome";
import Database from "./pages/AdminDash/Database";
import AdminHome from "./pages/AdminDash/AdminHome";

function App() {
  const location = useLocation();
  const pathsWithoutNavbar = ["/AdminHome", "/AdminHome/Database", "/AdminHome/AdminDash"];
  const shouldHideNavbar = pathsWithoutNavbar.includes(location.pathname);

  return (
    <>
      <div className="min-h-screen">
        <div className="flex flex-col">
          <section className="">{shouldHideNavbar ? null : <Navbar />}</section>
          <main className="">
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/AdminHome" element={<AdminHome />}>
                <Route path="AdminDash" element={<AdminDash />} />
                <Route path="Database" element={<Database />} />
              </Route>
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
