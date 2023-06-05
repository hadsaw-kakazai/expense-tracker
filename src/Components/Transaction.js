import React from 'react'
import { Typography } from 'antd'
import {Input,Button} from 'antd'

const {Title} = Typography


export default function Transaction() {
  return (
    <div>
      <div>
      <Title level={4}>Add New Transaction</Title>
      <hr></hr>
      <Title level={4}>Transaction Name</Title>
      <Input placeholder="Enter Transaction Name" name='username'></Input>
      <Title level={4}>Amount</Title>
      <span>(Negative for expense, positive for inceasring income)</span>
      <Input placeholder="Enter Transaction Amount" name='username'></Input>
    
      <Button type='primary'>Add Transaction</Button>
    </div>
    </div>
  )
}
