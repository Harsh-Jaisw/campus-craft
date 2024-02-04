import React from "react";
import "./ToggleThemeBtn.css"
function ToggleThemeBtn(props) {
    const {onChange,className}=props
  return (
    <div className={className}> <label className="ui-switch">
      <input type="checkbox" onChange={onChange} />
      <div className="slider">
        <div className="circle"></div>
      </div>
    </label>
    </div>
  );
}

export default ToggleThemeBtn;
