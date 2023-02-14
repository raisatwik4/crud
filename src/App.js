import './App.css';

import Navbar from './comp/nav';
import Satwik from './comp/satwik';
import Alluser from './comp/alluser';
import Adduser from './comp/adduser';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import EditUser from './comp/Edituser';
function App() {
  return ( 

    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
            <Route path="/" element= {<Satwik/>}/>
            <Route path="/all" element={ <Alluser/>}/>
            <Route path="/add" element= {<Adduser/>}/>
            <Route path="/edit/:id"  element={<EditUser/>}/>
            
          </Routes>
       </BrowserRouter>
    </div> 
  );
}

export default App;
