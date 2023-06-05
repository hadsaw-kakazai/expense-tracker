import React, { useContext } from 'react'
import { historyContext } from '../App'
import { Typography } from 'antd'
const {Title} = Typography

export default function Histroy() {

    const {history} = useContext(historyContext)
  return (
    <div>
      <Title level={4}>Histroy</Title>
      <hr></hr>
      {history.map((historyObject)=>
      
      parseInt(historyObject.amount)<0 ? (
        <div className='history--card--red' key={historyObject.name}>
            <section className='transaction--name'><span>{historyObject.name}</span></section>
            <section className='transaction--cash'><span>$ {historyObject.amount}</span></section>
      </div>
      ): (
        <div className='history--card--green'  key={historyObject.name}>
        <section className='transaction--name' ><span>{historyObject.name}</span></section>
        <section className='transaction--cash'><span>$ {historyObject.amount}</span></section>
        </div>
      ))}
      
    </div>
  )
}
