import React from 'react'

import { Typography } from 'antd'
const {Title} = Typography

export default function Histroy() {
  return (
    <div>
      <Title level={4}>Histroy</Title>
      <hr></hr>
      <div className='history--card'>
        
        <section className='transaction--name'><span>Cash</span></section>
        <section className='transaction--cash'><span>+400$</span></section>
      </div>
    </div>
  )
}
