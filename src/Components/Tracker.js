import React from 'react'
import { Typography } from 'antd'
import { useContext } from 'react'
import { historyContext } from '../App'
const {Title} = Typography



export default function Tracker() {
    const {expense,income} = useContext(historyContext)
  return (
    <div>
      <div className='tracker--div'>
      <Title level={5}>Income</Title>
        <Title level={2} type='success'>${income}</Title>
     
     </div>

     <div className='tracker--div'>
      <Title level={5}>Expense</Title>
        <Title level={2} type='danger'>${expense}</Title>
     
     </div>
     
      
    </div>
  )
}
