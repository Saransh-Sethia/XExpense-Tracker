import React, { useEffect, useState } from "react";
import OverviewComponent from "../components/OverviewComponent";
import TransactionComponent from "../components/TransactionComponent";

const Home = () => {
  const [expense, setExpense] = useState("");
  const [income, setIncome] = useState("");
  const [transactionList, setTransactionList] = useState([]);

  const addTransaction = (payload) => {
    const updatedData = [...transactionList];
    updatedData.push(payload);
    console.log(updatedData);
    setTransactionList(updatedData);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactionList.map((item) => {
      item.type === 'EXPENSE' ? (exp = exp + item.amount) : (inc = inc + item.amount)
    });
    setIncome(inc);
    setExpense(exp)
  };

  useEffect(()=>{
    calculateBalance()
  },[transactionList])
  return (
    <div>
      <h1>Expense Tracker</h1>
      <OverviewComponent
        expense={expense}
        income={income}
        setExpense={setExpense}
        setIncome={setIncome}
        addTransaction={addTransaction}
      />
      <TransactionComponent
        expense={expense}
        income={income}
        setExpense={setExpense}
        setIncome={setIncome}
        transactionList={transactionList}
        setTransactionList={setTransactionList}
      />
    </div>
  );
};

export default Home;
