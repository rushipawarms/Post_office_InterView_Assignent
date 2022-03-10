
import * as React from 'react';
import { useContext,useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Login.css'
import { makeStyles } from '@material-ui/core';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';
import { Link ,useNavigate} from 'react-router-dom'
import { context } from '../Context/AuthContext';


export default function Login() {

const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const[error,seterror]=useState('');
  const [loading,setloading]=useState(false);
  const navigate = useNavigate();
    const {login}=useContext(context);
  const useStyle=makeStyles({
    text1:{
      marginBottom:"1rem",
      color:"grey",
      textAlign:"center"
    },
    Card2:{
      height:"3rem",
      marginTop:'2%'
    },
    text2:{
        textAlign:'center',
        display: "flex",
        justifyContent:'center'
        
    }
  })
  const classes=useStyle();
  let loginHandle=async()=>{
      try{
        setloading(true);
        let res=await login(email,password);
        setloading(false);
        navigate('/Main');
      }
      catch(err){
        seterror(err.message);
        setTimeout(() => {
          seterror('');
        }, 3000);
        setloading(false);
      }
  }
  return (
      <div className="LogInWrapper">
          <div className='LogInCard'>
              <Card variant="outlined">
                <CardContent>
                   {error!=='' && <Alert severity="error"  margin="dense">{error}</Alert>}
                    <TextField id="outlined-basic" label="Email" variant="outlined" margin="dense" size='small'  fullWidth={true}value={email} onChange={(e)=>setemail(e.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" margin="dense" size='small'  fullWidth={true} value={password} onChange={(e)=>setpassword(e.target.value)}  />
                </CardContent>
                <CardActions>
                    <Button color="primary" fullWidth={true} variant="contained" margin="dense" disabled={loading} onClick={loginHandle}  > Log In</Button>
                </CardActions>
                </Card>
                 <Card variant="outlined" className={classes.Card2}>
                    <CardContent>
                        <Typography  className={classes.text1} variant="Subtitle1" component="div" >
                            Dont have an account?<Link to="/" style={{textDecoration:'none'}}>Sign In</Link>
                        </Typography>
                    </CardContent>
                </Card>
          </div>
      </div>

  );
}