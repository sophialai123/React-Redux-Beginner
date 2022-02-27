
import { createSlice } from "@reduxjs/toolkit";

//create a inititalStateValue variable
const initialStateValue = " ";

// takes reducer actions and name of the state
export const themeSlice = createSlice({

  name: "theme",
  initialState: { value: initialStateValue }, //pass initial value
  reducers: {
    //create login function(state is keeping tracking the state(inititalState value) , action is an object,can change the value )
    changeColor: (state, action) => {

      state.value = action.payload  // update new value from user
    },




  }, //reducers function



});

//export reducers action
export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;