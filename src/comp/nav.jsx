
import {AppBar,Toolbar, Typography,styled} from '@mui/material';
import {NavLink} from 'react-router-dom';
// import './nav.css';

const Head=styled(AppBar)`
   background:none;
`

const Tabs=styled(NavLink)`
  margin-right:15px;
  font-size:20px;
  text-decoration:none;
  border-radius:20%;
  color:red;
  font-weight:bold;
`
const  Tab=styled(Tabs)`
     margin-right:6rem;
      color:red;
      font-weight:bold;
`

const Navbar=()=>{
    return(
      <>
         <Head position='static'>
           <Toolbar >
             <Tab to='/'>CRUD</Tab>
             {/* <Typography>CRUD</Typography>  ptag ka replacement*/}  
              <Tabs to="/add">CREATE USER</Tabs>
              <Tabs to="/all" >ALL USER</Tabs>
             
           </Toolbar>
         </Head>
      </>   
    )
}
export default Navbar;




