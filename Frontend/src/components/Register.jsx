import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import "./register.css";
import Axios from "axios";
import { Link } from 'react-router-dom'; 


export default function Register() {
  const schema = yup.object().shape({
    userName: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
    email: yup.string().required("Email is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    Axios.post("http://localhost:3000/Auth/Register", data)
      .then((response) => {
        console.log(response);
        response.data.message && alert(response.data.message);
      })
      .catch(({ error }) => {
        console.log(error);
      });
  };

  return (
    <div className="register-body">
      <div className="register">
        <form onSubmit={handleSubmit(onSubmit)} className="Form">
          <p className="loginBanner">Register Page</p>
          <input type="text" placeholder="Username" {...register("userName")} />
          <p>{errors.userName?.message}</p>
          <input type="password" placeholder="Password..." {...register("password")} />
          <p>{errors.password?.message}</p>
          <input type="email" placeholder="Email..." {...register("email")} />
          <p>{errors.email?.message}</p>
          <input className="submitBtn" type="submit" value="Register" />
          <p>
          Already have an account? <Link to="/">Sign in here</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
