import axios from 'axios';
//axios use for api calling


const Url='http://localhost:3002/users';

export const addUser=async(data)=>{
   try {
       return await axios.post(Url,data);
   }
   catch(error)
   {
      console.log('Error while calling addUser api',error.message);
   }
}

export const getuser=async()=>{
  try{
   return await axios.get(Url);
  }
  catch(error)
  {
   console.log("Error while calling getusers api",error.message);
  }
}

export const getuse=async(data)=>{
   try{
    return await axios.get(`${Url}/${data}`)
   }
   catch(error)
   {
      console.log("Error while calling getuse api",error.message);
   }
   
}


export const edituser=async(data,id)=>{
     try{
            return await axios.put(`${Url}/${id}`,data)
     }
     catch(error){
      console.log("Error while calling edituser api",error.message);
     }
}


export const deleteuser=async(id)=>{
   try{
      return await axios.delete(`${Url}/${id}`);
   }
   catch(error)
   {
      console.log("Error while calling deleteuser api",error.message);  
   }
}