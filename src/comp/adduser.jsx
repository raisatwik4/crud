import { FormControl, FormGroup, InputLabel, Input ,Typography, Button ,styled} from "@mui/material";
import { useState } from "react";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";


const Container=styled(FormGroup)`
   width:50%;
   margin:5% auto 0 auto;
   background:white;
`
const Fo=styled(FormControl)`
   margin:5%;
  background:white;
`


const initial={
    Name:'',
    Email:'',
    Anything:''
}


const Adduser=()=>{
    
    const navigate=useNavigate();
    const[user,setuser]=useState(initial);
    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value);
        setuser({...user,[e.target.name]:e.target.value}) //e.target.name variable hai isliye square bracktet mai
    }

    const adduserdetail=async()=>{
           await addUser(user)
           navigate('/all');
    }

  return(
    <Container>
        <Typography variants="h2">Add User</Typography>
       <Fo>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="Name"/>
       </Fo>
       <Fo>
         <InputLabel>Email</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="Email"/>
       </Fo>
       <Fo>
         <InputLabel>Anything</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="Anything"/>
       </Fo>
       <Fo>
          <Button onClick={()=>adduserdetail()} variant="contained">Add User</Button>
       </Fo>
   </Container>
  )

}

export default Adduser;

