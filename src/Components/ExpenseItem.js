import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, price, locationOfExpenditure }) => {
  return (
    <>
      <div className="expense-item">
        <div>{date}</div>
        <div className="expense-item__description">
          <h2>{title} {locationOfExpenditure}</h2>
          <div className="expense-item__price">{price}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
