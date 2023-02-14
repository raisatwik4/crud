import './satwik.css';
// import photo1 from "./crudback.jpg";
import photo2 from "./crud.png";

const Satwik=()=>{
    return(
      <>
      
      <div className='img2' >
          <div className='card'>
             <img className='img' src={photo2}></img>
             {/* <h1>Satwik Rai</h1> */}
             <p className='hob'>CRUD APPLICATION</p>
             <a href='https://www.linkedin.com/in/satwik-rai-817544228/' target='_blank'><i className='link fa fa-linkedin'></i></a>
             <a href='https://www.instagram.com/bhumihar._satwik_.rai/' target='_blank'><i className='insta fa fa-instagram'></i></a>
             <a href='https://github.com/raisatwik4' target='_blank'><i className='git fa fa-github'></i></a>
          </div>
     </div>
     {/* </img> */}
      </>
    )
  
}
  
export default Satwik;