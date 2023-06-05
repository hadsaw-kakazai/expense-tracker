import React from 'react'
import { Typography } from 'antd'
const {Title} = Typography


export default function Tracker() {
  return (
    <div>
      <div className='tracker--div'>
      <Title level={5}>Income</Title>
        <Title level={2} type='success'>$67</Title>
     
     </div>

     <div className='tracker--div'>
      <Title level={5}>Expense</Title>
        <Title level={2} type='danger'>$67</Title>
     
     </div>
     
      
    </div>
  )
}
