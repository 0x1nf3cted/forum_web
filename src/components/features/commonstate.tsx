import { createSlice } from "@reduxjs/toolkit";


const commonSlice = createSlice({
    name: 'commonslice',
    initialState:{
        isHamburger : false
    },
    reducers:{
        openHamburger: (state: any,action: any)=>{
            state.isHamburger = !state.isHamburger
        },
        closeHamburger : (state:any,action:any)=>{
            state.isHamburger = false
        }
    }
}) 

export const {openHamburger,closeHamburger} = commonSlice.actions

export default commonSlice.reducer