import React from "react";
import {
  IoLogoGoogle,
  IoLogoGithub,
  IoMailOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";

export default function Signup() {
  
  return (
    <>
    <Link to="/"><IoCloseOutline className="absolute right-4 top-4" size="30px" /></Link>
    <div className="h-screen flex flex-col items-center gap-y-20 py-20">
      
       
      <span className="relative">
        <h1 className="text-4xl font-bold">Join soft.dev</h1>{" "}
        <div className="bg-[#f7ea33f1] -z-[10] absolute -top-0 -right-4 w-full h-10" />{" "}
      </span>

      <div className="flex flex-col items-center justify-between gap-y-4">
        <div className="google flex flex-row items-center gap-x-4 border-solid border-black border-2 rounded-full px-8 py-4">
          <div className="logo">
            <IoLogoGoogle size="28px" />
          </div>
          <p className="login_text">Sign up with Google</p>
        </div>
        <div className="github flex flex-row items-center gap-x-4 border-solid border-black border-2 rounded-full px-8 py-4">
          <div className="logo">
            <IoLogoGithub size="28px" />
          </div>
          <p className="login_text">Sign up with Github</p>
        </div>
        <Link to="/signup/email">
          <div className="email flex flex-row items-center gap-x-4 border-solid border-black border-2 rounded-full px-8 py-4">
            <div className="logo">
              <IoMailOutline size="28px" />
            </div>
            <p className="login_text">Sign up with Email</p>
          </div>
        </Link>
      </div>
      <div className="call_to_action flex flex-row items-center">
        <p>have an account? </p>{" "}
        <p className="sign_up_link ml-3">
          {" "}
          <span className="relative">
            <Link to="/signin">sign in</Link>{" "}
            <div className="absolute h-1 w-full bg-[#13ff83]" />{" "}
          </span>
        </p>
      </div>
      
    </div>
    </>
    
  );
}
