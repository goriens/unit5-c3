import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8080/employee").then(({ data }) => {
      setEmployee(data);
    });
  }, []);

  return (
    <div className="list_container">
      {employee.map((e) => (
        <div key={e.id} className="employees">
          <Link to={`/employees/${e.id}`} className="employee employee_card">
            <div className="employee_card">
              <img src={e.image} alt="" className="employee_image" />
              <span className="link employee_name">{e.employee_name}</span>
              <span className="link employee_title">{e.title}</span>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
