//import { Home } from "./components/Home";
//import { Login } from "./components/Login";
//import { EmployeeList } from "./components/EmployeeList";
//import { EmployeeDetails } from "./components/EmployeeDetails";
//import { Admin } from "./components/Admin";
//import { ProtectedRoute } from "./components/PrivateRoute";
//import { Logout } from "./components/Logout";
import { Routes, Route } from "react-router-dom";
import { Admin } from "./Components/Admin";
import { EmployeeDetails } from "./Components/EmployeeDetails";
import { EmployeeList } from "./Components/EmployeeList";
import { Home } from "./Components/Home";
import { Login } from "./Components/Login";

import { Navbar } from "./Components/Navbar";
import { PrivateRoute } from "./Components/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />

        <Route path="/" element={<Home />} />
        <Route path="/employees" element={<EmployeeList />} />
        <Route path="/employees/:id" element={<EmployeeDetails />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
