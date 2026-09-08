import {createSlice} from '@reduxjs/toolkit';
const userSlice=createSlice({
    name:'user',
    initialState:null,
    reducers:{
        addUser:function(state,action){
            return action.payload;
        },
        removeUser:function(state,action){
            return null;
        },
        
    }
})

export const {addUser,removeUser}=userSlice.actions;
export default userSlice.reducer;


//Create a Store
//Created a Slice
//Added the Slice Reducer onto the store
//Providing the store to App.js