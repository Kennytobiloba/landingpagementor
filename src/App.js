


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Login  from "./components/Login";
import Home from './Pages/Home';
import Dashboard from './components/Dashboard/Dashboard';





export default function App() {
  return (
  
      <div>
        
      <BrowserRouter>
      {/* <Home/> */}
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/login" element={<Login />} />
  <Route path="/signUp" element={<Dashboard />} />
</Routes>
      
      </BrowserRouter>



    </div>
    
    
  )
}