import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='flex justify-between'>
    <nav className={`navbar xl:hidden ${isOpen ? 'open' : ''}`}>
      <div className='flex gap-2'>
      <div className="navbar-toggle" onClick={toggleNavbar}>
        {isOpen ? (
          <i className="fas fa-times text-white text-[20px]"></i>
        ) : (
          <i className="fas fa-bars text-white text-[20px]"></i>
        )}
      </div>
      <div class="xl:hidden flex gap-2">
             
              <h3 class="xl:hidden text-[17px] font-semibold text-white">Olaatunbi kehinde</h3>
            </div>
      </div>
      <ul className={`navbar-menu  h-full  bg-[#0a0325] ${isOpen ? 'visible' : 'hidden'}`}>
        
        <div className=' flex flex-col text-white fixed top-0 left-0 w-full h-full overflow-y-auto  bg-[#0a0325]'>
          <div className='flex gap-20   text-white  mt-10'>
            <div class=" mt-6 ml-4 mb-4 w-[80px] ">
              <img src="julieth.png" alt="" />
            </div>
            
            <div className="navbar-toggle mt-20 ml-28 b" onClick={toggleNavbar}>
        {isOpen ? (
          <i className="fas fa-times text-white text-[26px]"></i>
        ) : (
          <i className="fas fa-bars text-white text-[20px]"></i>
        )}
      </div>
          </div>

          <div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F]  ml-4 cursor-pointer" >
              <div>
                  <i class="fa-solid fa-table-cells-large text-[20px]"></i>
              </div>
  
              <div><h1 class="text-[14px] opacity-90">Dashboard</h1></div>
             
          </div>
          <div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] ml-4 cursor-pointer mt-4" >
            <div>
                <i class="fa-regular fa-comment text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90">Julieth AI</h1></div>
           
        </div>
        <div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] ml-4 cursor-pointer mt-4" >
          <div>
              <i class="fa-solid fa-signs-post text-[20px]"></i>
          </div>

          <div><h1 class="text-[14px] opacity-90">Roadmaps</h1></div>
         
      </div>

      <div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F]  ml-4 cursor-pointer mt-4" >
        <div>
            <i class="fa-solid fa-book-open text-[29px]"></i>
        </div>

        <div><h1 class="text-[14px] opacity-90">Skillup Arena</h1></div>
       
    </div>
    <div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] px-6 ml-4 cursor-pointer mt-4" >
      <div>
          <i class="fa-solid fa-users text-[20px]"></i>
      </div>

      <div><h1 class="text-[14px] opacity-90 ">Mentor's Hangout</h1></div>
     
  </div>
  <div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F]  ml-4 cursor-pointer mt-4" >
    <div>
        <i class="fa-solid fa-book text-[20px]"></i>
    </div>

    <div><h1 class="text-[14px] opacity-90">My Course</h1></div>
   
</div>
<div class=" flex items-start gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[85%] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] ml-4 cursor-pointer mt-4" >
  <div>
      <i class="fa-solid fa-credit-card text-[20px]"></i>
  </div>

  <div><h1 class="text-[14px] opacity-90 ">Julieth Tokens</h1></div>
 
</div>
        </div>
      </ul>
    </nav>
    <div className='flex text-white  gap-2 xl:hidden'>

    <i class="fa-solid fa-bell  text-[28px]"></i>
        
    <div class="border-[#FC00B5]  rounded-[50%] overflow-hidden border-2  flex items-center justify-center w-[30px] h-[30px] bg-white text-black xl:hidden">
              <div class="">
                <i class="fa-regular fa-user text-[20px]"></i>
              </div>
    </div>
    </div>
    </div>
  );
}

export default Navbar;
