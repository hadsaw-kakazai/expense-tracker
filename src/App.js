import logo from './logo.svg';
import './App.css';
import { Typography } from 'antd';
import Balance from './Components/Balance';
import Tracker from './Components/Tracker';
import Histroy from './Components/Histroy';
import Transaction from './Components/Transaction';
import { createContext, useState } from 'react';
const {Title} = Typography
const style = {
  height:"900px",
  width:"40%",
  margin:"0 auto",
  paddingTop:"2%",
  paddingBottom:"2%"
}

const historyContext = createContext()

function App() {

  const [expense,setExpense] = useState(0)
  const [income,setIncome] = useState(0)

  const [history,setHistory] = useState([])


 
  
  return (
    <div style={style}>
      <Title level={1}>Expense Tracker</Title>
      <historyContext.Provider value={{history,setHistory,expense,setExpense,income,setIncome}}>
          <Balance/>
          <Tracker/>
          <Histroy/>
          <Transaction/>
      </historyContext.Provider>

    </div>
  );
}

export default App;
export {historyContext}
