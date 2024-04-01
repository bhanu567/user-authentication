import React, { Fragment, useRef } from "react";

const Form = (props) => {
  const moneyRef = useRef();
  const descRef = useRef();
  const categoryRef = useRef();
  const submitHandler = () => {
    const data = {
      money: moneyRef.current.value,
      desc: descRef.current.value,
      category: categoryRef.current.value,
    };
    props.displayData(data);
    moneyRef.current.value = "";
    descRef.current.value = "";
    categoryRef.current.value = "";
  };
  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom:'70px'
        }}
      >
        <div
          style={{
            width: "700px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {" "}
          <h3 style={{ textAlign: "center", margin: "30px 0px 40px 0px" }}>
            Expense Tracker
          </h3>
          <div className="mb-3 row">
            <label htmlFor="money" className="col-sm-2 col-form-label">
              Money Spend
            </label>
            <div className="col-sm-10">
              <div className="input-group">
                <span className="input-group-text"> ₹ </span>
                <input
                  type="number"
                  className="form-control"
                  id="money"
                  ref={moneyRef}
                ></input>
                <span className="input-group-text">.00</span>
              </div>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="desc" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <textarea
                className="form-control"
                id="desc"
                rows="4"
                ref={descRef}
              ></textarea>
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="desc" className="col-sm-2 col-form-label">
              Category
            </label>
            <div className="col-sm-10">
              <select
                className="form-select"
                aria-label="Default select example"
                ref={categoryRef}
              >
                <option selected>Select from the Dropdown</option>
                <option value="Education">Education</option>
                <option value="Petrol">Petrol</option>
                <option value="Salary">Salary</option>
                <option value="Food">Food</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>
          <button
            type="button"
            className="btn btn-dark mt-3 mx-auto"
            onClick={submitHandler}
          >
            Submit Expense
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default Form;
