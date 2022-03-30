import { async } from '@firebase/util'
import React, { useState } from 'react'
import './Mainpage.css'
import axios from 'axios'
import Alert from '@mui/material/Alert';
import { useNavigate} from 'react-router-dom'

function MainPage() {
        const[data,setdata]=useState([])
        const[error,seterror]=useState('')
        const[post,setpost]=useState('')
        const[Pincode,setpin]=useState();
        const navigate = useNavigate();
    let handleClick1=async()=>{
       
        try{
            let resp= await axios.get(`https://api.postalpincode.in/postoffice/${post}`)
            let data=resp.data
            if( data[0].Status=="Error")
            {
                 seterror('No records found');
                setTimeout(() => {
                seterror('');
                }, 3000);
                setdata([]);
                setpost('');
            }
            else if(data[0].Status=="Success")
            {
                setdata(data[0].PostOffice);
                setpin('');
            }
            console.log(resp.data);
            console.log(data[0].PostOffice)
        }
        catch(err){
            seterror(err.message);
            setTimeout(() => {
              seterror('');
            }, 3000);
        }

    }
    let handleOptimization=()=>{
        navigate('/Optimize');
    }
    let handleClick2=async()=>
    {
        
        try{
            let resp= await axios.get(`https://api.postalpincode.in/pincode/${Pincode}`)
            let data=resp.data
            if( data[0].Status=="Error")
            {
                 seterror('No records found');
                setTimeout(() => {
                seterror('');
                }, 3000);
                setdata([]);
                setpost('');
            }
            else if(data[0].Status=="Success")
            {
                setdata(data[0].PostOffice);
                setpost('')
            }
            console.log(resp.data);
            console.log(data[0].PostOffice)
        }
        catch(err){
            seterror(err.message);
            setTimeout(() => {
              seterror('');
            }, 3000);
        }
        
    }
  return (
   <>
   <h1 style={{ display: "flex",justifyContent: "center"}}>Welcome to post office&nbsp;<button onClick={handleOptimization}> Go and check Optimization</button></h1>
   <div className='main'>
        <div className='sub1' >
            <h2>Post Office serach by Name</h2>
            <input type="text" style={{marginLeft:"3rem"}} value={post} onChange={(e)=>setpost(e.target.value)}/>
            <button  onClick={handleClick1}>Serach</button>
        </div>
        <div className='sub2'>
            <h2>Post Office serach by Pincode</h2>
            <input type="number"  style={{marginLeft:"4rem"}} value={Pincode} onChange={(e)=>setpin(e.target.value)} />
            <button onClick={handleClick2}>Serach</button>
        </div>
   </div>
   <div className='AllPost'>
       {
          error!==''?<Alert severity="error"  margin="dense">{error}</Alert>:
          <>
            {
                data.map((obj)=>{
                    return(
                        <p className='SubPost'>{obj.Name}</p>
                    )
                   
                })
            }
          </>
       }

   </div>
   </>
  )
}

export default MainPage
