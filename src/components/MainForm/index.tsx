import { useRef, useState } from "react";
import InputRow from "./InputRow";

const MainForm = () => {
  const [formReseted, setformReseted] = useState(false);
  const [total, setTotal] = useState(0);

  const formRef: any = useRef();
  let formData = new FormData(formRef.current);

  const calcTotal = () => {
    let subtotal = 0;
    formData = new FormData(formRef.current);
    for (let [key, value] of formData as any) {
      if (key.includes("budget") && value) {
        subtotal += parseFloat(value);
      }
    }
    setTotal(parseFloat(subtotal.toFixed(2)) || 0);
  };

  const res = () => {
    formRef.current.reset();
    setformReseted(true);
  };

  return (
    <>
      <div className="wrapper">
        <form ref={formRef} onChange={calcTotal}>
          <div className="plan-name">
            <label htmlFor="plan-name">Media Plan</label>
            <input id="plan-name" type="text" name="plan-name" />
          </div>
          <div className="dates">
            <div className="startDtae">
              <label htmlFor="startDate">Start Date</label>
              <input type="date" name="startDtae" id="startDate" />
            </div>
            <div className="endDate">
              <label htmlFor="endDate">End Date</label>
              <input type="date" name="endDate" id="endDate" />
            </div>
          </div>
          <div className="rows-titles grid-4-col">
            <div>
              <h4>Channel</h4>
            </div>
            <div>
              <h4>Budget</h4>
            </div>
            <div>
              <h4>Keep Consistent</h4>
            </div>
            <div>
              <h4>Exclude</h4>
            </div>
          </div>
          <InputRow
            title={"SEA"}
            formReseted={formReseted}
            setformReseted={setformReseted}
          />
          <InputRow
            title={"Display"}
            formReseted={formReseted}
            setformReseted={setformReseted}
          />
          <InputRow
            title={"Social"}
            formReseted={formReseted}
            setformReseted={setformReseted}
          />
          <InputRow
            title={"Afilitate"}
            formReseted={formReseted}
            setformReseted={setformReseted}
          />
          <InputRow
            title={"Remarketing"}
            formReseted={formReseted}
            setformReseted={setformReseted}
          />
          <div className="grid-2-col">
            <h4>Total</h4>
            <h4>${total}</h4>
          </div>
          <div className="btn-group grid-2-col">
            <button>Copy Plan</button>
            <button>Save Plan</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default MainForm;
