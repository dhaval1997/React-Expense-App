import "./ExpenseItem.css";
import "./ExpenseDate.css";

const ExpenseItem = ({ date, title, price, location }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear(); // Extract the year from the date

  const handleDeleteExpense = () => {
    const expenseItem = document.querySelector(".expense-item__description");
    if (expenseItem) {
      expenseItem.closest(".expense-item").remove();
    }
  };

  return (
    <>
      <div className="expense-item">
        <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
          <div className="expense-date__year">{year}</div> {/* Add year */}
        </div>
        <div className="expense-item__description">
          <h2>
            {title} {location}
          </h2>
          <div className="expense-item__price">{price}</div>
          <button value={title} onClick={handleDeleteExpense}>
            Delete Expense
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpenseItem;
