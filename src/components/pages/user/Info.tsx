import React from "react";
import {
  IoSettingsSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Tag from "../../resuable/Tag";
import { useDispatch, useSelector } from "react-redux";
import { UserInterface } from '../../../Interfaces/Interface';
import Socials from "./Socials";


export default function Info() {

  const user = useSelector((state: any) => state.user);
  console.log(user);
  
  const userInfo: UserInterface = {
    id: user.id,
    email: user.email,
    profileImage: user.profileImage,
    socials: user.socials,
    role: user.role,
    skills: user.skills,
    name: user.name,
    username: user.username,
    bio: user.bio,
    posts: user.posts,
    authorId: user.authorId,
    favoritePosts: user.favoritePosts,
    followers: user.followers,
    following: user.following
}

const roles = userInfo?.role?.map(role => (
  <p key={role} className="text-sm">{role}</p>
))

const skills = userInfo?.skills?.map(skill => (
  <Tag tech={skill} />
))

  return (
    <div className="p-3">
      <div className=" general flex flex-row items-center gap-4 w-full">
        <div className="image-container">
          <img
            className="w-20 h-20 rounded-full"
            src={userInfo.profileImage}
            alt=""
          />
        </div>
        <div className="credentials">
          <h1 className="text-xl font-bold">{userInfo.name}</h1>
          
          {roles}
        </div>
        <div className="settings ml-28">
          <Link to="/settings">
            <IoSettingsSharp size="24px" />
          </Link>
        </div>
      </div>
      <div className="introduction">
        <div className="stat flex flex-row justify-center gap-4 my-4">
          <p className="follower text-sm text-gray-500">{userInfo?.posts?.length} artciles</p>
          <p className="follower text-sm text-gray-500">{userInfo?.followers?.length} follower</p>
          <p className="following text-sm text-gray-500">{userInfo?.following?.length} following</p>
        </div>
        <div className="skills text-center">
          {skills}
        </div>

        <p className="bio mx-1 text-center my-4">{userInfo.bio}</p>
        <Socials socials={userInfo.socials}/>
        
      </div>
    </div>
  );
}
