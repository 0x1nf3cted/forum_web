import React, { useEffect, useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import RoundedBtn from "../../../resuable/RoundedBtn";
import { IoChevronBackOutline } from "react-icons/io5";
import GreenBtn from "../../../resuable/GreenBtn";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updateUser } from "../../../features/user/UserSlice";
import { login } from "../../../../api/Auth";

export default function EmailLogin() {
  const info = { email: "", password: "" };
  const [formValues, setFormValues] = useState(info);
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });
  let allow = true;
  const props = {
    text: 'sign in'
  }
  const navigate = useNavigate()
  const location:any = useLocation()
  console.log(location);
  const from = location.state?.from?.pathname || "/"
  


  let dispatch = useDispatch()
  let k = useSelector((state:any)=>state)
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
  };

  const validateForm = (value: any) => {
    const errors = { email: "", password: "" };
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (!value.password) {
      errors.password = "Password is required!";
    }

    if (!value.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(value.email)) {
      errors.email = "Email is not a valid email format!";
    }
    return errors;
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setFormErrors(validateForm(formValues));
    loginUser()
  };



  const loginUser = async () => {
    await axios
      .post(login, {
        "email": formValues.email,
        "password": formValues.password
      })
      .then(function (response) {
        localStorage.setItem("user",JSON.stringify(response.data));
        // dispatch(updateUser(response.data.user))
        // console.log(k);
        localStorage.setItem("con","true")
        navigate(from, {replace: true})
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="h-screen flex flex-col items-center gap-y-20 py-20">
      <span className="relative">
        <h1 className="text-4xl font-bold">Sign in with email</h1>{" "}
        <div className="bg-[#f7ea33f1] -z-[10] absolute -top-0 -right-4 w-full h-10" />{" "}
      </span>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Email
          </label>
          <input
          onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="email"
            type="text"
            required
            placeholder="Email"
            value={formValues.email}
          />
          <p className="text-red-600 text-sm">{formErrors.email}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-center text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            Password
          </label>
          <input
          onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="text"
            required
            placeholder="Password"
            value={formValues.password}
          />
          <p className="text-red-600 text-sm">{formErrors.password}</p>
        </div>
        {allow ? <p></p> : <p>Error</p>}
        <div className="mt-10 text-center">
         <GreenBtn {...props} />
        </div>

        <Link to="/signin">
          {" "}
          <div className="text-neutral-400 flex flex-row items-center gap-x-1">
            <IoChevronBackOutline size="16px" />
            <p className="back">Back</p>{" "}
          </div>
        </Link>
      </form>
    </div>
  );
}
