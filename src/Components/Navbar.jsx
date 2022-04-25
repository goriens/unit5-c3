import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";
export const Navbar = () => {
  const [show, setShow] = useState(true);
  //  const nav = [
  //    { title: "Home", to: "/" },
  //    { title: "Employees", to: "/employees" },
  //    { title: "Admin", to: "/admin" },
  //    { title: "Login", to: "/login" },
  //  ];
  return (
    <div className="navbar nav">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
      {/* Show Either logout or login based on auth context. DO NOT show both */}

      {show ? (
        <Link
          className="nav-logout"
          to="/logout"
          onClick={() => {
            setShow(!show);
          }}
        >
          Logout
        </Link>
      ) : (
        <Link
          className="nav-login"
          to="/login"
          onClick={() => {
            setShow(!show);
          }}
        >
          Login
        </Link>
      )}
    </div>
    //<nav className="nav">
    //  <div>
    //    {nav.map((e, i) => (
    //      <Link key={i} to={e.to} style={{ margin: "10px" }}>
    //        {e.title}
    //      </Link>
    //    ))}
    //  </div>
    //</nav>
  );
};
