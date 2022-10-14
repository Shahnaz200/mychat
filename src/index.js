import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { BrowserRouter } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <center>
      <App />
    </center>
    </BrowserRouter>
  </React.StrictMode>
)


  // const Chatapp =() =>{
    
  //   return (
  //    <Fragment>
  
  //       <section className='img'> <Image/></section>
  //       <section className='name'> <Profile/></section>
  //       <section className='name'> <Contact/></section>
  //    </Fragment>
  //   )
  // }
  // const Image =() =>(
  //   <>
  //   <div className='img-item'>
  //   <img src ="https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236__340.png" alt ="" />
  // )
  // </div>
  // </>
  // )
  //  const Profile =() =>{
  //   return(
  //   <div className='name-item'>  name</div>
  
  
  //  )
  //  }
  
  // const Contact =()=>{
  //   return  <ul>
  //     <li>Maryam</li>
  //     <li>Mom</li>
  //     <li>Dad</li>
  
  //   </ul>
  // }
  
  
  // 
  //   <Chatapp/>
  // )
