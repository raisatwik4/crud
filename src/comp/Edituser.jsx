import { FormControl, FormGroup, InputLabel, Input ,Typography, Button ,styled} from "@mui/material";
import { useState,useEffect } from "react";
import { getuse,edituser } from "../service/api";
import { useNavigate ,useParams} from "react-router-dom";
const Container=styled(FormGroup)`
   width:50%;
   margin:5% auto 0 auto;

`
const Fo=styled(FormControl)`
   margin:5%;

`
const initial={
    Name:'',
    Email:'',
    Anything:''
}


const EditUser=()=>{

    const navigate=useNavigate();
    const { id }=useParams();
    const[user,setuser]=useState(initial);
    useEffect(()=>{
        getuserdata();
      },[]);
   
       const getuserdata=async()=>{
             let response= await getuse(id)
              console.log(response);
              setuser(response.data);
       }
    const onValueChange=(e)=>{
        console.log(e.target.name,e.target.value);
        setuser({...user,[e.target.name]:e.target.value}) //e.target.name variable hai isliye square bracktet mai
       
      }
  
    const adduserdetail=async()=>{
        await edituser(user,id);
        navigate('/all');

    }
  return(
    <Container>
        <Typography variants="h2">Edit User</Typography>
       <Fo>
         <InputLabel>Name</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="Name" value={user.Name} />
       </Fo>
       <Fo>
         <InputLabel>Email</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="Email" value={user.Email} />
       </Fo>
       <Fo>
         <InputLabel>Anything</InputLabel>
         <Input onChange={(e)=>onValueChange(e)} name="Anything" value={user.Anything} />
       </Fo>
       <Fo>
          <Button onClick={()=>adduserdetail()} variant="contained">Edit User</Button>
       </Fo>
   </Container>
  )

}

export default EditUser;

