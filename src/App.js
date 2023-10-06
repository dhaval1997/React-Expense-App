import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./Components/ExpenseItem";
import dummyData from "./utils/dummy";
import Card from "./Components/Card";
import "./Components/Expenses.css";
import NewExpense from "./Components/NewExpense";
import ExpensesFilter from "./Components/ExpenseFilter";

const AppLayout = () => {
  const [expenses, setExpense] = useState(dummyData);
  const [filteredYear, setFilteredYear] = useState("2021");

  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => [newExpense, ...prevExpense]);
    console.log(newExpense);
  };

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <NewExpense onAddExpense={addExpenseHandler} />
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((data) => (
          <ExpenseItem key={data.id} {...data} />
        ))}
      </Card>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
