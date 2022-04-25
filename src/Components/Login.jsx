import { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setData({
      ...data,
      [e.target.name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: data.username,
      password: data.password,
    };
    axios.post("http://localhost:8080/employee", userData).then((response) => {
      console.log(response.data);
    });

    navigate(-2, { replace: true });
  };

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <input
        type="text"
        name="username"
        placeholder="username"
        value={data.username}
        onChange={handleChange}
        className="login_username"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={data.password}
        onChange={handleChange}
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
