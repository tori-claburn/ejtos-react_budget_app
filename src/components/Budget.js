import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { dispatch, expenses, currency, budget } = useContext(AppContext);
  const totalExpenses = expenses.reduce((sum, item) => {
    return (sum = sum + item.cost);
  }, 0);

  const setBudget = (event) => {
    if (event.target.value > 20000) {
      alert("The value cannot exceed remaing funds");
      return;
    } 

    else if (event.target.value < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
      return;
    }

    dispatch({
      type: "SET_BUDGET",
      payload: event.target.value,
    });
  };
  return (
    <div class='alert alert-secondary p-3 d-flex align-items-center justify-content-between' style={{ height: "17%" }}>
      <span>
        Budget: <b>{currency}</b>
        <input
          type="number"
          max={20000}
          step={10}
          defaultValue={budget}
          onBlur={(event) => setBudget(event)}
          required
        ></input>
      </span>
    </div>
  );
};

export default Budget;







