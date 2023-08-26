import { AnyAction, createSlice, current, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { UserInterface } from "../../../Interfaces/Interface";

const initialState:any = {
    email: "mossa.tnm31@gmail.com",
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
    socials: ["Twitter", "Github", "LinkedIn"],
    username: "moussa.tnm",
    posts: [],
    authorId: "cqefqsdqsd",
    favoritePosts: [],
    followers: [],
    following: []

    
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    changeRole: (state: any,  action: PayloadAction<String[]>) => {
        state.role.push(action.payload)
      },
      changeBio: (state: any,  action: PayloadAction<String>) => {
        state.bio = action.payload
      },
      changeName: (state: any,  action: PayloadAction<String>) => {
        state.name = action.payload
      },
      changeSkills: (state: any,  action: PayloadAction<String[]>) => {
        state.skills.push(action.payload)
      },
      updateUser : (state:any, action:any) =>{
        state.data = action.payload
      },
      
  },
});
export const { changeRole, changeBio, changeName, changeSkills,updateUser } = userSlice.actions
export default userSlice.reducer;

// prepare(name: any, bio: any, role: any, skills: any) {
//     return {
//         payload: {
//             id: "qsdfgvcxersQGsdf@54sfd",
// email: "mossa.tnm31@gmail.com",
// profileImage: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg/1280px-Jacques-Louis_David%2C_Le_Serment_des_Horaces.jpg",
// socials: ["Twitter", "Github", "LinkedIn"],
// role: role,
// skills: skills,
// name: name,
// username: "moussa.tnm",
// bio: bio,
// posts: [],
// authorId: "cqefqsdqsd",
// favoritePosts: [],
// followers: [],
// following: []
//         }
//     }
// }
