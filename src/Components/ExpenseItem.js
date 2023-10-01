import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price, location }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <>
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
        </div>
        <div className="expense-item__description">
          <h2>
            {title} {location}
          </h2>
          <div className="expense-item__price">{price}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
