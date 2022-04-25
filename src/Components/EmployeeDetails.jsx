import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const { id } = useParams();
  const [detail, setDetail] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
      setDetail(data);
    });
  }, []);
  return (
    <div className="user_details">
      <img src={detail.image} alt="" className="user_image" />
      <h4 className="user_name">{detail.employee_name}</h4>
      <span className="user_salary">$ {detail.salary}</span>
      <span className="tasks">
        <li className="task">{detail.tasks}</li>
      </span>
      Status: <b className="status">{detail.status}</b>
      Title: <b className="title">{detail.title}</b>
      <button className="fire">Fire Employee</button>
      <button className="promote">promote</button>
    </div>
  );
};
