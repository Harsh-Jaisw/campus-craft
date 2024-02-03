import React from "react";
import "./ToggleThemeBtn.css"
function ToggleThemeBtn(props) {
    const {onChange}=props
  return (
    <label class="ui-switch">
      <input type="checkbox" onChange={onChange} />
      <div class="slider">
        <div class="circle"></div>
      </div>
    </label>
  );
}

export default ToggleThemeBtn;
