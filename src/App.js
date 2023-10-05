import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./Components/ExpenseItem";
import dummyData from "./utils/dummy";
import Card from "./Components/Card";
import "./Components/Expenses.css";
import NewExpense from "./Components/NewExpense";

const AppLayout = () => {
  const [expenses, setExpense] = useState(dummyData);

  const addExpenseHandler = (newExpense) => {
    setExpense((prevExpense) => [newExpense, ...prevExpense]);
    console.log(newExpense);
  };

  return (
    <>
      <Card className="expenses">
      <NewExpense onAddExpense={addExpenseHandler} />
        {expenses.map((data) => (
          <ExpenseItem key={data.id} {...data} />
        ))}
      </Card>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
