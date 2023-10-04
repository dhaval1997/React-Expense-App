import React from "react";
import ReactDOM from "react-dom/client";
import ExpenseItem from "./Components/ExpenseItem";
import dummyData from "./utils/dummy";

const AppLayout = () => {
  return (
    <>
      <div className="parent">
        <h1>Expense items</h1>
        {dummyData.map((data) => (
          <ExpenseItem key={data.id} {...data} />
        ))}
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
