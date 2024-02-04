import React from "react";
import "./ToggleThemeBtn.css"
function ToggleThemeBtn(props) {
    const {onChange}=props
  return (
    <label className="ui-switch">
      <input type="checkbox" onChange={onChange} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
  );
}

export default ToggleThemeBtn;
