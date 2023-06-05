import logo from './logo.svg';
import './App.css';
import { Typography } from 'antd';
import Balance from './Components/Balance';
import Tracker from './Components/Tracker';
import Histroy from './Components/Histroy';
import Transaction from './Components/Transaction';
import { useState } from 'react';
const {Title} = Typography
const style = {
  height:"900px",
  width:"40%",
  margin:"0 auto",
  paddingTop:"2%",
  paddingBottom:"2%"
}



function App() {

  const [histroy,setHistory] = useState([{
    "id":1,
    "name":"cash included",
    "amount":600
  }])
  console.log(histroy)
  
  return (
    <div style={style}>
      <Title level={1}>Expense Tracker</Title>
      <Balance/>
      <Tracker/>
      <Histroy/>
      <Transaction/>
    </div>
  );
}

export default App;
