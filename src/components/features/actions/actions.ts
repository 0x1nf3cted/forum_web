import axios from "axios";
import {
  LOGIN,
  REGISTER,
  LOGINPROCESSING,
  REGISTERING
} from "./actionTypes";

// export const startLogin = content => {
//   return dispatch => {
//     dispatch(loginProcessing());
//     axios
//       .post("https://6q7yl104k.sse.codesandbox.io/login", content)
//       .then(res => {
//         debugger;
//         dispatch(login(content));
//       })
//       .catch(error => {
//         debugger;
//         console.log(error);
//       });
//   };
// };

// export const startRegister = content => {
//   return dispatch => {
//     dispatch(registerProcessing());
//     setTimeout(() => {
//       dispatch(register(content));
//     }, 2000);
//   };
// };

// const loginProcessing = () => {
//   return {
//     type: LOGINPROCESSING,
//     payload: ""
//   };
// };

// const login = content => {
//   return {
//     type: LOGIN,
//     payload: content
//   };
// };

// const registerProcessing = () => {
//   return {
//     type: REGISTERING,
//     payload: ""
//   };
// };

// export const register = content => {
//   return {
//     type: REGISTER,
//     payload: content
//   };
// };
