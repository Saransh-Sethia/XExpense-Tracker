import React from 'react';
import styled from "styled-components";

const TransactionList = styled.div`
display:flex;
justify-content: center;
align-items:center;
gap: 75px;
border-bottom: 1px solid #b5b5b5;
padding: 5px 10px;
`

const Button = styled.button`
background:transparent;
border: 1px solid #bf000a;
padding: 7px 13px;
border-radius: 5px;
background-color: #bf000a;
color: #ffffff;
font-weight: 500;
cursor:pointer
`

const TransactionType = styled.h4`
color: ${(props)=>props.isExpense ? "red" : "green"}
`


const TransactionComponent = ({transactionList, setTransactionList}) => {

  const deleteTransaction = (id) => {
    const updatedData = transactionList.filter((item) => item.id !== id);
    setTransactionList(updatedData);
  }
  return (
    <>
    <h2>Transactions</h2>
      {
        transactionList.map((item) => (
            <TransactionList key={item.id} isExpense={item.type === 'EXPENSE'}>
            <h4>${item.amount}</h4>
            <h4>{item.description}</h4>
            <TransactionType>{item.type}</TransactionType>
            <Button onClick={()=>deleteTransaction(item.id)}>Remove</Button>
            </TransactionList>
        ))
      }
    </>
  )
}

export default TransactionComponent
