import React, { useState } from 'react';
import styled from 'styled-components'

const Container = styled.div`
dispaly:flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap: 25px
`

const Header = styled.div`
display: flex;
justify-content: center;
align-items:center;
width: 100%;
gap: 500px
`
const Button = styled.button`
background:transparent;
border: 1px solid #111111;
padding: 7px 13px;
border-radius: 5px;
background-color: #111111;
color: #ffffff;
font-weight: 500;
cursor:pointer
`

const TransactionContainer = styled.div`
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:20px;

`
const ExpenseContainer = styled.div`
margin-left: 200px;
margin-right: 200px;
margin-top: 25px;
border: 1px solid #b5b5b5;
padding: 25px 20px 20px 25px;
display: flex;
justify-content: space-evenly;
align-items:center;

`

const Expense = styled.div`
border: 1px solid #b5b5b5;
padding: 20px 40px;
font-weight: 600;
color: ${(props)=>props.isIncome ? "green" : "red"}
`

 const Form = ({setShowForm, showForm, addTransaction}) => {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("EXPENSE");

    const addTransactions = () => {
        if(amount==="" || description==="" || type===""){
            return;
        } else {
            addTransaction({
                id: Date.now(),
                amount:Number(amount),
                description,
                type
            });
            setAmount("");
            setDescription("");
            setShowForm(!showForm)
        }
    }
    return (
        <TransactionContainer>
<input
placeholder='Enter Amount'
type="number"
value={amount}
onChange={(e)=>setAmount(e.target.value)}
/>
<input
placeholder='Enter Description'
type="text"
value={description}
onChange={(e)=>setDescription(e.target.value)}
/>
<div>
    <input 
    type="radio"
    id="income"
    name="type"
    value="INCOME"
    checked={type==="INCOME"}
    onChange={(e)=>setType(e.target.value)}
    />
    <label>Income</label>
    <input 
    type="radio"
    id="expense"
    name="type"
    value="EXPENSE"
    checked={type==="EXPENSE"}
    onChange={(e)=>setType(e.target.value)}
    />
    <label>Expense</label>
</div>
<Button onClick={addTransactions}>Add Transaction</Button>
</TransactionContainer>
    )
    

}

const OverviewComponent = ({expense, income, setExpense, setIncome, addTransaction}) => {
    const [showForm, setShowForm] = useState(false);
  return (
    <Container>
        <Header>
      <h2>Balance : ${income - expense}</h2>
      <Button onClick={()=>setShowForm(!showForm)}>{showForm ? "Cancel" : "Add"}</Button>
      </Header>
      {
        showForm ? (
            <Form setShowForm={setShowForm} showForm={showForm} addTransaction={addTransaction}/>
        ) : ""
      }
      <ExpenseContainer>
        <Expense isIncome={true}>Income <br /> ${income}</Expense>
        <Expense>Expense <br /> ${expense}</Expense>
      </ExpenseContainer>
    </Container>
  )
}

export default OverviewComponent
