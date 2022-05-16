import { useEffect, useState } from "react"
import axios from "axios"


const History=(props)=>{
    // const [msg,setMsg]=useState("")
    const [tray,setTray]=useState([])
    const [all,setAll]=useState(true)

    // useEffect(()=>{
    //     axios.post("http://localhost:3002/history_exp",{
              
    //         "txt":props.details.txtD,
    //         "amount":props.details.amountD
    //       }).then((res)=>setMsg(res.request.statusText)).catch((err)=>console.log(err))
    // },[props.details.txtD,props.details.amountD])

    // useEffect(()=>{
    //     axios.get("http://localhost:3002/history_exp").then(res=>
    //     setTray(res.data)).catch(err=>console.log(err))
    //     console.log("inside useEffect ,tray: ",tray)
    // },[])

    const handleAll=(e)=>{
         e.preventDefault()

         setAll(!all)
    }
 const arr1=props.tray
    return(
        <>

{all?   <>
 <br></br>
 <h5 className="hist"><b>History</b></h5>
      <hr></hr>
        {arr1.slice(arr1.length-3).reverse().map(item=>( 
        <div>
      <div className="history-card">
          <div className="txt">
            {console.log(item.txt)}
      <h6>{item.txt}</h6>
    
      </div>

      <div className="price">
      <div>
      {Number(item.amount)>0?<><h6 className="add">+{item.amount}</h6></>:<><h6 className="sub">{item.amount}</h6></>}
      </div> 
      </div>

      </div>

  </div>
    ))}
</>:

<>

 <br></br>
 <h5 className="hist"><b>History</b></h5>
      <hr></hr>
        {props.tray.slice(0).reverse().map(item=>( 
        <div>
          {console.log(item)}
      <div className="history-card">
          <div className="txt">
      <h6>{item.txt}</h6>
      {/* {console.log(item.txt)} */}

      </div>

      <div className="price">
      <div>
      {Number(item.amount)>0?<><h6 className="add">+{item.amount}</h6></>:<><h6 className="sub">{item.amount}</h6></>}
      </div> 
      </div>

      </div>

  </div>
    ))}
    </>





        }

<div className="bt">
{/* <i class="bi bi-chevron-bar-expand" onClick={handleAll}></i> */}
<button className="btn-info" onClick={handleAll}><i class="bi bi-chevron-bar-expand" ></i></button>
</div>
</>

    )
}  
export default History