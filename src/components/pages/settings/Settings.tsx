import React, { useEffect, useState } from "react";
import Tag from "../../resuable/Tag";
import { useDispatch, useSelector } from "react-redux";
import { UserInterface } from "../../../Interfaces/Interface";
import {
  changeBio,
  changeName,
  changeRole,
  changeSkills,
} from "../../features/user/UserSlice";

export default function Settings() {
  const user = useSelector((state: any) => state.user);
  const dispatch = useDispatch();

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
    following: user.following,
  };

  const [name, setName] = useState(userInfo.name);
  const [role, setRole] = useState([""]);
  const [singleRole, setSingleRole] = useState("");
  const [singleSkill, setSingleSkill] = useState("");
  const [skills, setSkills] = useState([""]);
  const [bio, setBio] = useState(userInfo.bio);

  useEffect(() => {});

  // const onSaveSettingsClicked = (e: any) => {
  //   e.preventDefault();
  //   let newUser: UserInterface = {
  //     ...userInfo,
  //     role: role,
  //     skills: skills,
  //     name: name,
  //     bio: bio,
  //   };
  //   if (Boolean(name)) {
  //     dispatch(userChanged(newUser));
  //   }
  // };

  //-----------Modify Name-------------//

  const onNameChanged = (e: any) => {
    const name = e.target.value;
    setName(name);
  };

  const onNameSave = (e: any) => {
    dispatch(changeName(name));
  };

  //-----------Modify Skill-------------//

  const addSkill = (e: any) => {
    let val = e.target.value;
    setSingleSkill(val);
  };

  const submitSkill = (event: any) => {
    event.preventDefault();
    skills.push(singleSkill);
    const newSkill = [...skills];
    setSkills(newSkill);
    setSingleSkill('')
    dispatch(changeSkills(skills));
  };

  //-----------Modify Role-------------//

  const addRole = (e: any) => {
    let val = e.target.value;
    setSingleRole(val);
  };

  const submitRole = (event: any) => {
    event.preventDefault();
    role.push(singleRole);
    const newRole = [...role];
    setRole(newRole);
    setSingleRole('')
    dispatch(changeRole(role));
  };

  //-----------Modify bio-------------//

  const onBioChange = (e: any) => {
    
    const bio = e.target.value;
    setBio(bio);
  };

  const onBioSave = (event: any) => {
    event.preventDefault();
    dispatch(changeBio(bio));
  };

  return (
    <div className="settings flex flex-col items-center">
      <h1 className="text-2xl mx-4 my-4 text-center ">Settings</h1>
      <div className="credentials flex flex-col items-center w-full">
        <div className="name w-full">
          <form
            action=""
            onSubmit={onNameSave}
            className="flex flex-col px-5  "
          >
            <label
              className="block text-gray-700 text-2xl my-5"
              htmlFor="username"
            >
              Name
            </label>
            <input
              onChange={onNameChanged}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="text"
              required
              placeholder="Password"
              value={name}
            />
            <p className="notice text-sm text-gray-400 my-3 w-3/4">
              Your name appears on your Profile page, It is a required field.
            </p>
            <div>
              <button
                className="my-4 bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        </div>
        <div className="role w-full">
          <form
            action=""
            onSubmit={submitRole}
            className="flex flex-col px-5  "
          >
            <label
              className="block text-gray-700 text-2xl my-5"
              htmlFor="username"
            >
              Role
            </label>
            <div className="input flex flex-row gap-x-2">
              <input
                onChange={addRole}
                className="shadow border w-3/4 rounded text-gray-700 focus:outline-none focus:shadow-outline px-1"
                id="password"
                name="password"
                type="text"
                required
                value={singleRole}
              />
              <button
                // onClick={submitRole}
                className="bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                add
              </button>
            </div>

            <p className="notice text-sm text-gray-400 my-3 w-3/4">
              Your Role appears on your Profile page.
            </p>
            <div>
              {role.map((skill) => {
                return <Tag key={skill} tech={skill} />;
              })}
            </div>
            <div>
              <button
                className="my-4 bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        </div>
        <div className="skills w-full">
          <form
            action=""
            onSubmit={submitSkill}
            className="flex flex-col px-5  "
          >
            <label
              className="block text-gray-700 text-2xl my-5"
              htmlFor="username"
            >
              Skills
            </label>
            <div className="input flex flex-row gap-x-2">
              <input
                onChange={addSkill}
                className="shadow border w-3/4 rounded text-gray-700 focus:outline-none focus:shadow-outline px-1"
                id="password"
                name="password"
                type="text"
                required
                value={singleSkill}
              />
              <button
                className="bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                add
              </button>
            </div>

            <p className="notice text-sm text-gray-400 my-3 w-3/4">
              Your skills appears on your Profile page. Max 25 characters.
            </p>
            <div className="skills">
              {skills.map((skill) => {
                return <Tag key={skill} tech={skill} />;
              })}
            </div>
            <div>
              <button
                className="my-4 bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        </div>
        <div className="bio my-5 w-full">
          <form action="" onSubmit={onBioSave} className="flex flex-col px-5">
            <label
              className="block text-gray-700 text-2xl my-5"
              htmlFor="username"
            >
              Biography
            </label>
            <textarea
              onChange={onBioChange}
              className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              required
              placeholder="Password"
              value={bio}
            />
            <p className="notice text-sm text-gray-400 my-3 w-3/4">
              Your bio appears on your Profile.. Max 200 characters.
            </p>
            <div>
              <button
                className="my-4 bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        </div>
        <div className="image my-5 w-full">
          <form
            action=""
            // onSubmit={onSaveSettingsClicked}
            className="flex flex-col px-5"
          >
            <label
              htmlFor="dropzone-file"
              className="flex flex-col justify-center items-center w-full h-64 bg-black rounded-lg"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6">
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
            <p className="notice text-sm text-gray-400 my-3 w-3/4">
              Your bio appears on your Profile.. Max 200 characters.
            </p>
            <div>
              <button
                className="my-4 bg-black text-white rounded-full px-5 py-2 md:px-9 md:py-4"
                type="submit"
              >
                save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
