import React from 'react';

//Access the information from the user state
import { useSelector } from "react-redux";

function Profile(props) {
  const user = useSelector((state) => state.user.value);
  const themeColor = useSelector((state) => state.theme.value);

  return (
    // the color will update as themecolor which is input color;
    <div style={{ color: themeColor }}>
      <h1>Profile Page</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email:{user.email} </p>

    </div>
  );
}

export default Profile;