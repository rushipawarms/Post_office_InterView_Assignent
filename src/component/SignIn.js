import * as React from 'react';
import { useState, useEffect, useContext } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './SignIn.css'
import { makeStyles } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { Link , useNavigate} from 'react-router-dom';
import { context } from '../Context/AuthContext';


export default function SignIn() {
  const useStyle=makeStyles({
    text1:{
      marginBottom:"1rem",
      color:"grey",
      textAlign:"center"
    },
    Card2:{
      height:"3rem",
      marginTop:'2%'
    }
  })
  const classes=useStyle();
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const[error,seterror]=useState('');
  const [loading,setloading]=useState(false);
  const navigate = useNavigate();
  const {signup}=useContext(context);
  
  let signupHandle=async()=>{
    
 
    try {
      seterror('');
      setloading(true);
      let userobj= await signup(email,password)
      let uid= userobj.user.uid
       console.log(uid)
       navigate('/Main');
    } catch (err) {
      seterror(err.message);
      setTimeout(() => {
        seterror('');
      }, 3000);
      setloading(false);
    }
  
  }
  return (
      <div className="SignUpWrapper">
          <div className='SignUpCard'>
              <Card variant="outlined">
                
                    <CardContent>
                        {error!=='' && <Alert severity="error"  margin="dense">{error}</Alert>}
                        <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" size='small'  fullWidth={true} value={email} onChange={(e)=>setemail(e.target.value)}/>
                        <TextField id="outlined-basic" type="password" label="Password" variant="outlined" margin="dense" size='small'  fullWidth={true} value={password} onChange={(e)=>setpassword(e.target.value)} />
                    </CardContent>
                    <CardActions>
                        <Button color="primary" fullWidth={true} variant="contained" margin="dense" disabled={loading} onClick={signupHandle} > Sign up</Button>
                    </CardActions>
                </Card>
                <Card variant="outlined" className={classes.Card2}>
                    <CardContent>
                            <Typography  className={classes.text1} variant="Subtitle1" component="div" >
                                     Having an account?<Link to="/Login" style={{textDecoration:'none'}}>Login</Link>
                            </Typography>
                </CardContent>
                </Card>
          </div>
      </div>   
  );
}