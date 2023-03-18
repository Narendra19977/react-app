import React from 'react'
import './App.css'
import Customer from './components/Customer'
import Incommponents from './components/Incommponents'
const App = () => {
  return (
    // <div className='App'>
    //   <Incommponents/>
    //   </div>
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