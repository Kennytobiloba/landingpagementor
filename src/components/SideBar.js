import React from 'react'

export const SideBar = () => {
  return (
    <div className=' f flex-col max-md:justify-between mt-2 h-full max-md:items-stretch w-[20%] text-white hidden xl:flex'>
        <div className='flex items-center justify-between overflow-visible'>
        <div className=' text-white hidden flex-col items-start ml-20 gap-5 xl:flex'>
            <div  className='mb-6 w-[80px] '>
            <img src="./julieth.png" alt="" />
            </div>
        </div>


        {/* <div class="w-[20%]  text-white hidden flex-col items-start ml-8 gap-5 xl:flex"> */}
        {/* <div class=" mt-5 ml-10">
            {/* <img src="img/julieth.png" alt="" width="80"> */}
        </div> 
      <div class="py-[25px] mb-5">  
        <div class=" flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] mb-4 w-[240px]" >
            <div>
                <i class="fa-solid fa-table-cells-large text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90 ">Dashboard</h1></div>
           
        </div>

        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] mb-4 ">
            <div>
                <i class="fa-regular fa-comment text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90 ">Julieth AI</h1></div>
        </div>
        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] mb-4 ">
            <div>
                <i class="fa-solid fa-signs-post text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90">Roadmaps</h1></div>
        </div>
        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F]  mb-4 ">
            <div>
                <i class="fa-solid fa-book-open text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90">Skillup Arena</h1></div>
        </div>
        
        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] mb-4 ">
            <div>
                <i class="fa-solid fa-users text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90">Mentor's Hangout</h1></div>
        </div>
        
        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F]  mb-4 ">
            <div>
                <i class="fa-solid fa-book text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90">My Courses</h1></div>
        </div>
        
        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[rgb(252,0,181)] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F]  py-3 mb-5 ">
            <div>
                <i class="fa-solid fa-credit-card text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90 ">Julieth Tokens</h1></div>
        </div>
        
        <div class="flex items-center gap-x-4 p-[0.6rem] rounded-lg border-[#FC00B5] border-[1px] w-[240px] hover:bg-gradient-to-r from-[#FC00B5] to-[#7F167F] mt-4 ">
            <div>
                <i class="fa-solid fa-right-from-bracket text-[20px]"></i>
            </div>

            <div><h1 class="text-[14px] opacity-90 ">Logout</h1></div>
        </div>
        
        
      </div>
    </div>



  )
}
