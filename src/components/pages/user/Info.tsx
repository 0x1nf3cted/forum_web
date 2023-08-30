import React, { useEffect, useState } from "react";
import {
  IoSettingsSharp,
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import Tag from "../../resuable/Tag";
import { useDispatch, useSelector } from "react-redux";
import Socials from "./Socials";
import { useGetUsersQuery } from "../../features/users/usersApiSlice";
import { User } from "../../../Interfaces/Interface";

export default function Info() {
  const [userInfo, setUserInfo] = useState<User>();
  const {
    data: users,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetUsersQuery({});
  useEffect(() => {
    setUserInfo(users);
    console.log(userInfo);
  }, [users]);
  //   const userInfo: UserInterface = {
  //     id: user.id,
  //     email: user.email,
  //     profileImage: user.profileImage,
  //     socials: user.socials,
  //     role: user.role,
  //     skills: user.skills,
  //     name: user.name,
  //     username: user.username,
  //     bio: user.bio,
  //     posts: user.posts,
  //     authorId: user.authorId,
  //     favoritePosts: user.favoritePosts,
  //     followers: user.followers,
  //     following: user.following
  // }

  return (
    <div className="p-3">
      <div className=" general flex flex-row items-center gap-4 w-full">
        <div className="image-container">
          <img className="w-20 h-20 rounded-full" src="*" alt="" />
        </div>
        <div className="credentials">
          <h1 className="text-xl font-bold">{userInfo?.username}</h1>

          <p> {userInfo?.role.name}</p>
        </div>
        <div className="settings ml-28">
          <Link to="/settings">
            <IoSettingsSharp size="24px" />
          </Link>
        </div>
      </div>
      <div className="introduction">
        <div className="stat flex flex-row justify-center gap-4 my-4">
          <p className="follower text-sm text-gray-500">
            {userInfo?.Thread?.length} artciles
          </p>
          <p className="follower text-sm text-gray-500">
            {userInfo?.followers?.length} follower
          </p>
          <p className="following text-sm text-gray-500">
            {userInfo?.following?.length} following
          </p>
        </div>

        <p className="bio mx-1 text-center my-4">{userInfo?.bio}</p>
        <Socials socials={userInfo?.socialLinks} />
      </div>
    </div>
  );
}
