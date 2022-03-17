import { createSlice } from "@reduxjs/toolkit";

{/*
We use the createSlice function to create a slice of the state. We pass in the name of the slice and the initial state. 
The initial state is an empty array. The createSlice function returns an object with a reducer and an actions object. 
The reducer is a function that takes the current state and an action and returns the new state. The actions object contains the action creators. 
The action creators are functions that return an action. The action creators are used to dispatch actions to the store.

*/}

const initialState = {
  name: "",
  email: "",
  photo: "",
  wishList: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState: (state) => {
      state.name = null;
      state.email = null;
      state.photo = null;
      state.wishList = [];
    },
    addToWishList: (state, action) => {
      if (state.wishList.find((wish) => wish.id === action.payload.id)) {
        return;
      } else {
        state.wishList.push(action.payload);
      }
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList?.filter((wish) => wish.id !== action.payload.id);
    },
  },
});

export const { setUserLoginDetails, setSignOutState, addToWishList, removeFromWishList } =
  userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;
export const selectUserWishList = (state) => state.user.wishList;

export default userSlice.reducer;
