import React,{useState} from 'react'

const Incommponents = () => {
    let emi;
    const initialValue={
        loanAmount:0,
        rate:0,
        time:0
    }
    
    const [data, setData] = useState(initialValue);
    const [MonthlyLoanPayment, setMonthlyLoanPayment] = useState('');
    const formHandler=(event)=>{
        const {name,value}=event.target;
        setData({...data,[name]:value});
    }
    const calcHandler=(e)=>{
        const simpleIntrest=parseInt(data.loanAmount)*parseInt(data.rate)*parseInt(data.time)/100;
        setMonthlyLoanPayment(simpleIntrest);
    }
  return (
    <div>
        <div className="firstInput">
        <label>Loan Payment</label>
        <input 
        type={'range'}
        name='loanAmount'
        id='loanAmount'
        value={data.loanAmount}
        min={'1000'}
        max={'1000000'}
        step={'10000'}
        onChange={event=>formHandler(event)}
        />
        {data.loanAmount}
        </div>
        <div className="secondInput">
        <label>Loan Payment</label>
        <input 
        type={'range'}
        name='rate'
        id='rate'
        value={data.rate}
        min={'1'}
        max={'10'}
        step={'1'}
        onChange={event=>formHandler(event)}
        />
        {data.rate}
        </div>
        <div className="time">
        <label>time</label>
        <input 
        type={'range'}
        name='time'
        id='time'
        value={data.time}
        min={'1'}
        max={'10'}
        step={'1'}
        onChange={event=>formHandler(event)}
        />
        {data.time}
        </div>
        <button onClick={event=>calcHandler(event)}>
            calculate
        </button>
        {MonthlyLoanPayment}
    </div>
  )
}

export default Incommponents