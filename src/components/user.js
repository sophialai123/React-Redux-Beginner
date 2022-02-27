
import { createSlice } from "@reduxjs/toolkit";

//create a inititalStateValue variable
const initialStateValue = { name: "", age: 0, email: " " }

// takes reducer actions and name of the state
export const userSlice = createSlice({

  name: "user",
  initialState: { value: initialStateValue }, //pass initial value
  reducers: {
    //create login function(state is keeping tracking the state(inititalState value) , action is an object,can change the value )
    login: (state, action) => {

      state.value = action.payload  // update new value from user
    },

    //clear out
    logout: (state) => {
      state.value = initialStateValue; //set into initial value

    },


  }, //reducers function



});

//export reducers action
export const { login, logout } = userSlice.actions;
export default userSlice.reducer;