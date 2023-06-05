
import React, { useContext, useEffect } from 'react'
import { historyContext } from '../App'
import { Typography } from 'antd'
const {Title} = Typography
export default function Balance() {

    const {expense,income} = useContext(historyContext)
    let balance = income-(-expense);
    useEffect(()=>{
        if(expense>income){
            balance = -balance
            console.log(balance)
        }
    },[expense,income])

  return (
    <div>
        <Title level={4}>YOUR BALANCE</Title>
        <Title level={1}>$ {balance}</Title>
        
    </div>
  )
}
