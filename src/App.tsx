import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from './components/pages/auth/login/Login';
import Signup from './components/pages/auth/signup/Signup';
import WithNav from "./components/RouterConfig/WithNav";
import Email from "./components/pages/auth/Email";
import WithoutNav from "./components/RouterConfig/WithoutNav";
import AboutUs from "./components/pages/about/AboutUs";
import PageNotFound from "./components/pages/notfound/PageNotFound";
import Footer from "./components/footer/Footer";
import Profile from "./components/pages/user/Profile";
// import Settings from "./components/pages/settings/Settings";
import RequireAuth from "./components/pages/auth/RequireAuth";
import Articles from "./components/pages/user/Articles";
import Socials from "./components/pages/user/Socials";



function App() {
  return (
    <div className="App min-h-screen relative font-[Poppins]">
      <Routes>
        <Route element={<WithNav />}>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} /> 
          <Route element={<RequireAuth/>}>
          <Route path="/user"  element={<Profile />} />
          <Route path="/articles"  element={<Articles />} />
          <Route path="/my-socials"  element={<Socials />} />
          {/* <Route path="/settings"  element={<Settings />} /> */}
          </Route>
        </Route>
        <Route element={<WithoutNav />}>
          <Route path="/signin"  element={<Login />} />
          <Route path="/signup"  element={<Signup />} />
          <Route path="/signin/email" element={<Email login={"login"}/>} />
          <Route path="/signup/email" element={<Email login={"signup"}/>} />
          <Route path="/signin"  element={<Login />} />
          
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
