import { useEffect, useState } from "react";
import Switch from "../Switch";
import { isValidDicimal } from "../../utils";

interface Iprops {
  title: string;
  formReseted: boolean;
  setformReseted: (arg0: boolean) => void;
}
const InputRow = (props: Iprops) => {
  const { title, formReseted, setformReseted } = props;
  const checkedColor = "white";
  let [keepChecked, setKeepChecked] = useState(false);
  let [excludeChecked, setExcludeChecked] = useState(false);
  let [valid, setValid] = useState(true);

  useEffect(() => {
    if (formReseted) {
      setKeepChecked(false);
      setExcludeChecked(false);
    }
  }, [formReseted]);

  const checkValue = (e: { target: { value: string } }) => {
    let value = e.target.value;
    if (!isValidDicimal(value) && value) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const keepHandel = () => {
    if (!excludeChecked) {
      setformReseted(false);
      setKeepChecked(!keepChecked);
    }
  };
  const excludeHandel = () => {
    if (!keepChecked) {
      setformReseted(false);
      setExcludeChecked(!excludeChecked);
    }
  };
  return (
    <div className="input-row grid-4-col">
      <h5>{title}</h5>
      <div className="decimal-input">
        <input
          className={valid ? "" : "not-valid"}
          type="text"
          placeholder="$0.00"
          name={"budget" + title}
          onChange={checkValue}
        />
        <p className={valid ? "no-message" : "message"}>
          please type a 2 place dicimal
        </p>
      </div>

      <div className="checkbox-container">
        <Switch
          id={title + "-keep"}
          isOn={keepChecked}
          handleToggle={keepHandel}
          onColor={checkedColor}
        />
      </div>
      <div className="checkbox-container">
        <Switch
          id={title + "-exclude"}
          isOn={excludeChecked}
          handleToggle={excludeHandel}
          onColor={checkedColor}
        />
      </div>
    </div>
  );
};

export default InputRow;
