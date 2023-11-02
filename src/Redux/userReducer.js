import { createSlice } from "@reduxjs/toolkit";
import { userList } from "../utils/Data";
const userSlice= createSlice({
    name:'users',
    initialState: userList,
    reducers:{
        addUser: (state, action)=>{
           state.push(action.payload)
        },
        updateUser:(state,action)=>{
                const {id, name, task, status}=action.payload;
                const updateUser=state.find(user=>user.id == id);
                if(updateUser){
                    updateUser.name= name;
                    updateUser.task=task;
                    updateUser.status=status
                }
        },
        deleteUser: (state,action)=>{
            const {id}=action.payload;
                const updateUser=state.find(user=>user.id == id);
                if(updateUser)
                {
                    return state.filter(f => f.id !== id)
                }
        }
    }
})
export const {addUser, updateUser, deleteUser}=userSlice.actions
export default userSlice.reducer;
