import React, { Fragment, useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

const ExpenseTracker = () => {
  const [data, setData] = useState([]);
  const displayDataHandler = (newData) => {
    setData((oldData) => [...oldData, newData]);
  };
  return (
    <Fragment>
      <Form displayData={displayDataHandler} />
      {data.map((data) => (
        <DisplayData data={data} />
      ))}
    </Fragment>
  );
};

export default ExpenseTracker;
