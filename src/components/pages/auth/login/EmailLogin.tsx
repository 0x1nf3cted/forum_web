// import React, { useEffect, useRef, useState } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import RoundedBtn from "../../../resuable/RoundedBtn";
// import { IoChevronBackOutline } from "react-icons/io5";
// import GreenBtn from "../../../resuable/GreenBtn";
// import axios from "axios";
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
// import { login } from "../../../../api/Auth";
// import { useLoginMutation } from "../../../features/auth/authApiSlice";
// import { setCredentials } from "../../../features/auth/authSlice";

// export default function EmailLogin() {
//   // const info = { email: "", password: "" };
//   // const [formValues, setFormValues] = useState(info);
//   // const [formErrors, setFormErrors] = useState({ email: "", password: "" });
//   // let allow = true;
//   // const props = {
//   //   text: 'sign in'
//   // }
//   // const navigate = useNavigate()
//   // const location:any = useLocation()
//   // console.log(location);
//   // const from = location.state?.from?.pathname || "/"

//   // let dispatch = useDispatch()
//   // let k = useSelector((state:any)=>state)
//   // const handleChange = (e: any) => {
//   //   const { name, value } = e.target;
//   //   setFormValues({ ...formValues, [name]: value });
//   //   // console.log(formValues);
//   // };

//   // const validateForm = (value: any) => {
//   //   const errors = { email: "", password: "" };
//   //   const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

//   //   if (!value.password) {
//   //     errors.password = "Password is required!";
//   //   }

//   //   if (!value.email) {
//   //     errors.email = "Email is required!";
//   //   } else if (!regex.test(value.email)) {
//   //     errors.email = "Email is not a valid email format!";
//   //   }
//   //   return errors;
//   // };

//   // const handleSubmit = (e: any) => {
//   //   e.preventDefault();
//   //   setFormErrors(validateForm(formValues));
//   //   loginUser()
//   // };

//   // const loginUser = async () => {
//   //   await axios
//   //     .post(login, {
//   //       "email": formValues.email,
//   //       "password": formValues.password
//   //     })
//   //     .then(function (response) {
//   //       localStorage.setItem("user",JSON.stringify(response.data));
//   //       // dispatch(updateUser(response.data.user))
//   //       // console.log(k);
//   //       localStorage.setItem("con","true")
//   //       navigate(from, {replace: true})
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     });
//   // };

//   return (
//     <div className="h-screen flex flex-col items-center gap-y-20 py-20">
//       <span className="relative">
//         <h1 className="text-4xl font-bold">Sign in with email</h1>{" "}
//         <div className="bg-[#f7ea33f1] -z-[10] absolute -top-0 -right-4 w-full h-10" />{" "}
//       </span>
//       <form action="" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-center text-gray-700 text-sm font-bold mb-2"
//             htmlFor="username"
//           >
//             Email
//           </label>
//           <input
//             onChange={(e: Event) => {
//               setUser(e.target?.value);
//             }}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="username"
//             name="email"
//             type="text"
//             required
//             placeholder="Email"
//             value={user}
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-center text-gray-700 text-sm font-bold mb-2"
//             htmlFor="username"
//           >
//             Password
//           </label>
//           <input
//             onChange={handlePwdInput}
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="password"
//             name="password"
//             type="text"
//             required
//             placeholder="Password"
//             value={pwd}
//           />
//         </div>

//         <div className="mt-10 text-center">
//           <GreenBtn {...props} />
//         </div>

//         <Link to="/signin">
//           {" "}
//           <div className="text-neutral-400 flex flex-row items-center gap-x-1">
//             <IoChevronBackOutline size="16px" />
//             <p className="back">Back</p>{" "}
//           </div>
//         </Link>
//       </form>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import RoundedBtn from "../../../resuable/RoundedBtn";
import { IoChevronBackOutline } from "react-icons/io5";
import GreenBtn from "../../../resuable/GreenBtn";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../../../api/Auth";
import { useLoginMutation } from "../../../features/auth/authApiSlice";
import { setCredentials } from "../../../features/auth/authSlice";

export default function EmailLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [serverError, setServerError] = useState(true);
  const [formErrors, setFormErrors] = useState({ email: "", password: "" });

  const props = {
    text: "sign in",
  };
  const location: any = useLocation();
  const from = location.state?.from?.pathname || "/";

  let k = useSelector((state: any) => state);
  const handleEmailChange = (e: any) => {
    setEmail(e.target.value); // console.log(formValues);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value); // console.log(formValues);
  };

  const validateForm = (email: string, password: string) => {
    const errors = { email: "", password: "" };
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

    if (!password) {
      errors.password = "Password is required!";
    }

    if (!email) {
      errors.email = "Email is required!";
    } else if (!regex.test(email)) {
      errors.email = "Email is not a valid email format!";
    }
    return errors;
  };

  // const loginUser = async () => {
  //   await axios
  //     .post(login, {
  //       "email": formValues.email,
  //       "password": formValues.password
  //     })
  //     .then(function (response) {
  //       localStorage.setItem("user",JSON.stringify(response.data));
  //       // dispatch(updateUser(response.data.user))
  //       // console.log(k);
  //       localStorage.setItem("con","true")
  //       navigate(from, {replace: true})
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // };

  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setFormErrors(validateForm(email, password));
    console.log(email, password);

    try { 
      const userData = (await login({ email, password }).unwrap()) as {
        access_token: string;
        refresh_token: string;
      };
      dispatch(
        setCredentials({
          access_token: userData.access_token,
          refresh_token: userData.refresh_token,
         })
      );
      setEmail("");
      setPassword("");
      navigate("/user");
    } catch (err: any) {
      setServerError(true);
      if (!err?.status) {
        // isLoading: true until timeout occurs
        setErrMsg("No Server Response");
      } else if (err.originalStatus === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.originalStatus === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg("Login Failed");
      }
    }
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
            onChange={handleEmailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            name="email"
            type="text"
            required
            placeholder="Email"
            value={email}
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
            onChange={handlePasswordChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            name="password"
            type="text"
            required
            placeholder="Password"
            value={password}
          />
          <p className="text-red-600 text-sm">{formErrors.password}</p>
        </div>
        <div className="mt-10 text-center">
          <GreenBtn {...props} />
        </div>
        {serverError ? <p>{errMsg}</p> : <></>}

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
