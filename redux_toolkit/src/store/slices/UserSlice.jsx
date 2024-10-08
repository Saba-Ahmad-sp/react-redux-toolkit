import { createSlice } from "@reduxjs/toolkit";
import { deleteUsers } from "../actions";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
      console.log(action.payload)
    },
    removeUser(state, action) {
      // console.log("hii" + action.payload);
      //2nd way of deleting:-
      // let userIndexNum = state.indexOf(action.payload);
      state.splice(action.payload, 1);
    },
    // deleteUsers(state, action) {
    //   return [];
    //   //2nd way:-
    //   // state.splice(action.payload);
    // },
  },
  // extraReducers(builder) {
  //   builder.addCase(userSlice.actions.deleteUsers, () => {
  //     return [];
  //   })
  // }
  extraReducers(builder) {
    builder.addCase(deleteUsers, () => {
      return [];
    })
  }
});
console.log(userSlice);

export { userSlice };
export const { addUser, removeUser} = userSlice.actions;