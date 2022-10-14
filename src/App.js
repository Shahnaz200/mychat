import NavbarChat from "./nav-chat";
import React from 'react'
import Chat from "./pages/chat";
import Contact from "./pages/contact";
import Profile from "./pages/profile";
import { Route, Routes } from "react-router-dom"

function App() {

 return (
   <>
     <NavbarChat />
     <div>
       <Routes>
         <Route path="/chat" element={<Chat />} />
         <Route path="/profile" element={<Profile />} />
         <Route path="/contact" element={<Contact />} />
      </Routes> 
     </div>
   </>
 )
}

export default App