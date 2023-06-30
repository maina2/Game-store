import { useForm } from "react-hook-form";
import './login.css'
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import { Context } from "../context/userContext/Context";
import { useContext } from "react";
import { Link } from 'react-router-dom'; 

export default function Loginform() {
  const { user, dispatch } = useContext(Context);
  console.log(user);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post("http://localhost:3000/Auth/Login", data)
      .then(({ data }) => {
        if (data.token) {
          dispatch({ type: "LOGIN_SUCCESS", payload: data });
          navigate("/Store");
        }
      })
      .catch(({ response }) => {
        alert(response?.data.error);
      });
  };

  return (
    <div className="login-body">
      <div className="login">
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
          <p className="loginBanner"> Login to your account!</p>
          <input type="text" placeholder="Username" {...register("userName")} />
          <p>{errors.userName?.message}</p>
          <input type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>
          <input className="submitBtn" type="submit" value="Submit" />
          <p>
          Don't have an account? <Link to="/Signup">Sign up here</Link>
          </p>
        </form>
        
      </div>
    </div>
  );
}
