import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses</h2>;
  }
  if (props.items.length === 1) {
    return (
      <>
        <ul className="expenses-list">
          {props.items.map((data) => (
            <ExpenseItem key={data.id} {...data} />
          ))}
        </ul>
        <h2 className="expenses-list__fallback">
          Only single Expense here. Please add more...
        </h2>
      </>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((data) => (
        <ExpenseItem key={data.id} {...data} />
      ))}
    </ul>
  );
};

export default ExpenseList;
