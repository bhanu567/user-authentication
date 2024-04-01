import React from "react";
import expenseIcon from "../../Images/expense-icon.png";

const DisplayData = (props) => {
  return (
    <h5 className="ms-5">
      <img src={expenseIcon} alt="Expense Icon" width="30" height="30" className="me-4"></img>
      <b>₹ {props.data.money}</b> has spent on <b>{props.data.category}</b>.{" "}
      <i>{props.data.desc}.</i>
    </h5>
  );
};

export default DisplayData;
