


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login  from "./components/Login/Login";
import Home from './Pages/Home';




export default function App() {
  return (
  
      <div>
        
      <BrowserRouter>
      {/* <Home/> */}
      <Routes>
   <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login />} />
</Routes>
      
      </BrowserRouter>



    </div>
    
    
  )
}