import React from 'react'
import './App.css'
import Customer from './components/Customer'
const App = () => {
  return (
    <div>
      {
        [...Array(10)].map((arraElement,index)=>(
          <Customer index={index} key={index}/>
        ))
      }
    </div>
  )
}

export default App