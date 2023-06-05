import React, { useEffect } from 'react'
import { Typography } from 'antd'
import {Input,Button} from 'antd'
import { useContext } from 'react'
import { historyContext } from '../App'
import { useState } from 'react'

const {Title} = Typography

export default function Transaction() {
    const {history,setHistory,expense,setExpense,income,setIncome} = useContext(historyContext)

    const [trans,setTransaction] = useState({
        name : "",
        amount : 0
    })

   
    useEffect(()=>{
        let incomeTemp = 0    
            for(let i=0;i<history.length;i++){
                if(Number(history[i].amount)>0){
                    incomeTemp+=Number(history[i].amount)
                }
            }

            setIncome(incomeTemp)
        
      
            let expenseTemp = 0    
            for(let i=0;i<history.length;i++){
                if(Number(history[i].amount)<0){
                    expenseTemp+=Number(history[i].amount)
                }
            }

            setExpense(expenseTemp)
    },[history])
    
    function handleSubmit(){
        setHistory((prevData)=>{
            return [...prevData,trans]
        })

        setTransaction({name : "",
        amount : 0})


        
        
        // setIncome(history.reduce((acc,curr)=>{}))



    }


    function handleChange(event){
        setTransaction((prevData)=>{
            return {...prevData,[event.target.name]:event.target.value}
        })

       
    }


  return (
    <div>
      <div>
      <Title level={4}>Add New Transaction</Title>
      <hr></hr>
      <Title level={4}>Transaction Name</Title>
      <Input required placeholder="Enter Transaction Name" name="name" value={trans.name} onChange={(event)=>handleChange(event)}></Input>
      <Title level={4}>Amount</Title>
      <span>(Negative for expense, positive for inceasring income)</span>
      <Input required={true} placeholder="Enter Transaction Amount" type="number" name='amount' value={trans.amount} onChange={(event)=>handleChange(event)}></Input>
    
      <Button onClick={handleSubmit} type='primary'>Add Transaction</Button>
    </div>
    </div>
  )
}
