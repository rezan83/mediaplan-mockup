import React from "react";
import "./switch.scss";

interface Iprops {
  id: string;
  isOn: boolean;
  handleToggle: any;
  onColor: string;
}
const Switch = (props: Iprops) => {
  const { isOn, handleToggle, onColor } = props;
  return (
    <>
      <input
        className="switch-checkbox"
        id={props.id}
        type="checkbox"
        checked={isOn}
        onChange={handleToggle}
        name={props.id}
      />
      <label
        className="switch-label"
        style={{ background: isOn ? onColor : "" }}
        htmlFor={props.id}
      >
        <span className={`switch-button`} />
      </label>
    </>
  );
};

export default Switch;
