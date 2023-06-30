import logo from './logo.svg';
import './App.css';
import AddTransaction from './Components/add';
import DisplayTransaction from './Components/displayTransaction';
import { useState } from 'react';

function App() {


  const [transactions, setTransactions]= useState([]);
  
  const add=((transactionItem, amount, transactionType)=>{
    setTransactions ((transactions)=>[...transactions, {transactionItem:transactionItem, amount:amount, transactionType:transactionType}]);
  console.log(transactions);
  });



  
  return (
    <div className="container">
      <DisplayTransaction transactions={transactions}/>
      <AddTransaction add={add}/>

    </div>
  );
}

export default App;
