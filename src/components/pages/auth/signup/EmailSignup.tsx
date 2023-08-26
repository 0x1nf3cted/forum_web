import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import RoundedBtn from "../../../resuable/RoundedBtn";
import {
  IoChevronBackOutline,
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import axios from "axios";

export default function EmailSignup() {
  const info = { email: "", username: "", password: "" };
  const [formValues, setFormValues] = useState(info);
  const [formErrors, setFormErrors] = useState({
    email: "",
    username: "",
    password: "",
  });
  const userRef: any = useRef();
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setFormErrors({ email: "", username: "", password: "" });
  }, [formValues.email, formValues.password, formValues.username]); //empty the error messages if the user start type

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateForm = (value: any) => {
    const errors = { email: "", username: "", password: "" };
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;
    const pass =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,50}$/;
    if (!value.username) {
      errors.username = "Username is required!";
    }
    if (!value.password) {
      errors.password = "Password is required!";
    } else if (!pass.test(value.password)) {
      errors.password =
        "password must include one uppercase letter, one lowercase letter, and must be at least 8 characters long";
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
    registerUser();
  };

  const registerUser = async () => {
    await axios
      .post("http://localhost:5000/auth/local/signup", {
        username: formValues.username,
        email: formValues.email,
        hashedPassword: formValues.password,
      })
      .then(function (response) {
        console.log(response.data);
        
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="h-screen flex flex-col items-center gap-y-20 py-20">
      <span className="relative">
        <h1 className="text-4xl font-bold">Sign up with email</h1>{" "}
        <div className="bg-[#f7ea33f1] -z-[10] absolute -top-0 -right-4 w-full h-10" />{" "}
      </span>

      <form className="mx-8" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="username"
          >
            username
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            name="username"
            placeholder="Ex: JDoe"
            value={formValues.username}
          />
          <p className="text-red-600 text-sm">{formErrors.username}</p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            email
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
          />
          <p className="text-red-600 text-sm">{formErrors.email}</p>
        </div>
        <div className="mb-4 p-2 relative">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            password
          </label>
          <input
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type={hidden ? "password" : "text"}
            name="password"
            placeholder="Password"
            value={formValues.password}
          />
          {hidden ? (
            <IoEyeOffOutline
              onClick={() => {
                setHidden(false);
              }}
              className="absolute top-12 right-4"
            />
          ) : (
            <IoEyeOutline
              className="absolute top-12 right-4"
              onClick={() => {
                setHidden(true);
              }}
            />
          )}
          <p className="w-2/5 m-auto text-center text-red-600 text-xs">
            {formErrors.password}
          </p>
        </div>

        <div className="mt-10 text-center">
          <button
            className="border-solid rounded-full text-black px-5 py-2.5 bg-green hover:bg-${props.hover} focus:outline-none focus:ring-4 font-medium text-center mr-1 mb-2"
            type="submit"
          >
            Sign up
          </button>
        </div>

        <Link to="/signup">
          {" "}
          <div className="text-neutral-400 flex flex-row items-center gap-x-1">
            <IoChevronBackOutline size="16px" />
            <p className="back">Back</p>{" "}
          </div>
        </Link>
      </form>
      <p className="terms_and_policy text-center w-3/5 text-xs text-grey">
        By clicking “Sign Up” you agree to Soft.dev Terms of Service and
        acknowledge that Soft.dev Privacy Policy applies to you.
      </p>
    </div>
  );
}
