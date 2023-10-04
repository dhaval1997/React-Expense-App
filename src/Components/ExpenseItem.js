import React, { useState } from "react";
import "./ExpenseItem.css";
import "./ExpenseDate.css";

const ExpenseItem = ({ date, title, price, location }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  const [currentPrice, setCurrentPrice] = useState(price);

  const changePrice = () => {
    // Set the price to $100 when the button is clicked
    setCurrentPrice(100);
  };

  return (
    <>
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
          <div className="expense-date__year">{year}</div>
        </div>
        <div className="expense-item__description">
          <h2>
            {title} {location}
          </h2>
          <div className="expense-item__price">${currentPrice}</div>
          <button onClick={changePrice}>Change Price</button>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
