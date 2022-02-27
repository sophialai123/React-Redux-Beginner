
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { changeColor } from './theme';

function ChangeColors(props) {

  const [color, setColor] = useState('');
  const dispatch = useDispatch();

  return (
    <div>

      {/*The color will change based on input color*/}
      <input type="text" placeholder='color name...' onChange={(event) => { setColor(event.target.value) }} />
      <button
        onClick={() => {
          dispatch(changeColor(color));

        }}

      >
        Change Color

      </button>

    </div>
  );
}

export default ChangeColors;