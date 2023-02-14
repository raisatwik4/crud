import { useEffect ,useState} from "react";
// import { FormControl, FormGroup, InputLabel, Input , Button} from "@mui/material";
import TextField from "@mui/material/TextField";
import { Table, TableBody, TableCell, TableHead, TableRow ,styled,Button} from "@mui/material";
import  {Link} from 'react-router-dom';
import { getuser ,deleteuser} from "../service/api";
import data from '../database/db.json';

const StyledTable=styled(Table)
`
   width:90%;
   margin:50px auto 0 auto;
   font-size:20px;
`

const Thead=styled(TableRow)
`
     background:#000;
     &>th{
      color:white;
     }
`
const TBody=styled(TableRow)`
    
     &>td{
      color:black;
     }
`

const Alluser=()=>{
  const [users,setUsers]=useState([]);
  
  //api call for data
  useEffect(()=>{
    getUserDetail();
  },[]);

  const getUserDetail=async()=>{
    var response = await getuser();
    console.log(response);
    setUsers(response.data);
  }
  const deleteusers=async(id)=>{
      await deleteuser(id);
      getUserDetail();
  }

    return(
      <>
     
   
      <StyledTable>
          <TableHead>
             <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>AnyThing</TableCell>
                
             </Thead>
        </TableHead>
        <TableBody id='myTable'>
             {
                users.map(user=>(
                   <TBody>

                      <TableCell>{user.id}</TableCell>
                      <TableCell>{user.Name}</TableCell>
                      <TableCell>{user.Email}</TableCell>
                      <TableCell>{user.Anything}</TableCell>
                      <TableCell>
                           <Button variant="contained" color="secondary" component={Link} to={`/edit/${user.id}`}>Edit</Button>
                           <Button variant="contained" style={{marginLeft: 20}} onClick={()=>deleteusers(user.id)}>Delete</Button>
                       </TableCell>
                   </TBody>
                ))
             }    
        </TableBody>
      </StyledTable>
      </>
    )
  
  }
  
  export default Alluser;