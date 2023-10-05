import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./Components/ExpenseItem";
import dummyData from "./utils/dummy";
import Card from "./Components/Card";
import "./Components/Expenses.css";
import NewExpense from "./Components/NewExpense";
import ExpenseForm from "./Components/ExpenseForm ";

const AppLayout = () => {
  const [expenses, setExpense] = useState(dummyData);

  const addExpenseHandler = (newExpene) => {
    setExpense((prevExpense) => [newExpene, ...prevExpense]);
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
