import React,{useState} from 'react'
import axios  from 'axios'
import './Optimize.css'
function Optimize() {
let cancelToken
//const[cancel,setCancel]=useState()
const[serach,setdata]=useState([])

let getData=async(e)=>{
    if(e.target.value!='')
    {
        if(typeof cancelToken!=typeof undefined)
        {
            cancelToken.cancel("cancel")
            console.log("previous cancel")
        }

        cancelToken=axios.CancelToken.source()

        let res=await axios.get(`https://api.postalpincode.in/postoffice/${e.target.value}`,{cancelToken:cancelToken.token})
        let data=res.data
        console.log(data)
        if( data[0].Status=="Error" && data[0].Status=="404" )
        {
            setdata([]);
        }
        if(data[0].Status=="Success")
            {
                setdata(data[0].PostOffice);
                
            }
    }
    else{
        setdata([]);
    }
}

    let handleChange=(fn,d)=>{
        let timer 
        return function(){
        let context=this
        let agr=arguments
        clearTimeout(timer)
        timer= setTimeout(()=>{
                fn.apply(context,agr)},d)
        } 
    }
    let debounce=handleChange(getData,200)
  return (
    <>
     <div className='MainContainer'>
    <div className='Container'>
    <label>Serach</label>
    <input type="text"  onChange={debounce}  placeholder="Enter PostOffice"/>
    </div>
    <div className='Item'>
    {
        serach.length>0?<>{serach.map((obj,id)=>{return(<h1 style={{ marginLeft: "2rem"}} key={id}>{obj.Name}</h1>)})}</>:<></>
    }
    </div>
   </div>
    </>
  )
}

export default Optimize