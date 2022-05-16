import History from "./components/History"
import {useEffect, useState} from "react"
import axios from "axios"
import "./App.css"

function App() {
 
  const [txt,setTxt]=useState("")
  const [amount,setAmount]=useState("")
  const [details,setDetails]=useState({
    txtD:"",
    amountD:""
  })
  const [flag,setFlag]=useState(false)
  const [tray,setTray]=useState([])
  const [msg,setMsg]=useState("")// use this as a toast feature
  const isEmpty = tray.length === 0



  let income = 0
  let expense=0
  tray.map(item=>{
    if(Number(item.amount<0)){
    expense=expense-Number(item.amount)
  }
  else if(Number(item.amount>0)){
    income=income+Number(item.amount)
  }
   
  }) 
  let balance=income-expense 

  console.log("value of expense",expense)


//  const handleText=(e)=>{
//    e.preventDefault()
//    setDetails({txt:e.target.value})

//  }
//  const handleAmount=(e)=>{
//   e.preventDefault()
//   setDetails({amount:e.target.value})

// }


const handleText=(e)=>{
  e.preventDefault()
  setTxt(e.target.value)
  // setFlag(false)

}
const handleAmount=(e)=>{
 e.preventDefault()
 setAmount(e.target.value)

}


useEffect(()=>{
  axios.get("http://localhost:3002/history_exp").then(res=>{
        setTray(res.data)
        setFlag(false)
      
      }).catch(err=>console.log(err))
        {console.log("tray contains inside func: ",tray)}
        {console.log(flag)}
        
        
},[flag])


const addTransaction=()=>{

 
  axios.post("http://localhost:3002/history_exp",{
              
    "txt":txt,
    "amount":amount
  }).then((res)=>{
    
    setMsg(res.request.statusText)
    setFlag(true)
  
  }).catch((err)=>console.log(err))
  
  // setDetails({txtD:txt,amountD:amount})
  // setDetails({txtD:txt})
  // console.log("setflag will run")
  //   //  setFlag(true)
  //    console.log("setflag ran")
  //    console.log("value of flag inside func: ",flag)

    //  axios.get("http://localhost:3002/history_exp").then(res=>
    //     setTray(res.data)).catch(err=>console.log(err))
    //     console.log("inside function ,tray: ",tray)
}

// flag?axios.get("http://localhost:3002/history_exp").then(res=>
// setTray(res.data)).catch(err=>console.log(err)):setTray("nothing")



  return (
  <div className="container">
    {/* {console.log("value of flag inside console: ",flag)} */}
     {/* {console.log("tray contains inside console: ",tray)} */}
   
    <div className="app-name">
  <h3><b>Expense Tracker</b></h3>
  </div>

  <div>
    <br></br>
    <h6><b>YOUR BALANCE</b></h6>
    <div className="bal">
    <h1>Rs {balance.toFixed(2)}</h1>
    </div>
  </div>
  <br></br>
  <div className="status-card">
    
    <div className="income-card">
       
       
          <h6 className="inc"><b>INCOME</b></h6>
           <h5 style={{color:"rgb(92, 179, 92)"}}>Rs {income.toFixed(2)}</h5>
         
    </div>
    <div class="line-card"></div>
    
    <div className="expense-card">
      
          <h6 className="exp"><b>EXPENSE</b></h6> 
          <h5 style={{color:"rgb(199, 93, 93)"}}>Rs {expense.toFixed(2)}</h5>
          
    </div>
  </div>
  {/* {flag?<History txt={txt} amount={amount}></History>:<></>} */}
  {/* {flag?<History></History>:<></>} */}
  {!isEmpty?<History tray={tray}></History>:<></>}

  <div>



    <br></br>
    <h5 className="tran"><b>Add new transaction</b></h5>
    <hr></hr>
    
    <div>
     
      <h6>Text</h6>
      <input class="form-control" type="text" placeholder="Enter Text" onChange={(e)=>handleText(e)} required></input>
    </div>
    <div>
    <br></br>
      <h6 className="amt">Amount</h6>
      <b><h6>(negative - expense, positive - income)</h6></b>
      <input class="form-control" type="Number" placeholder="Enter amount" onChange={(e)=>handleAmount(e)} required></input>
    
    </div>



  </div>
  <div className="d-grid">
    <br></br>
  <button className="btn btn-info btn-add" type="button" disabled={!txt || !amount}onClick={addTransaction}>Add transaction</button>
  
</div>




</div>
 
 


  )
}

export default App;
