import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";
import Card from "./Card"

const ExpenseItem = ({ date, title, amount, location }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <>
      <Card className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
          <div className="expense-date__year">{year}</div>
        </div>
        <div className="expense-item__description">
          <h2>
            {title} {location}
          </h2>
          <div className="expense-item__amount">Rs.{amount}</div>
          {/* <button onClick={changeamount}>Change amount</button> */}
        </div>
      </Card>
    </>
  );
};

export default ExpenseItem;
