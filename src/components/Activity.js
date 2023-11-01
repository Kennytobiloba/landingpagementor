import React from 'react'
import Navbar from './Navbar'


export const Activity = () => {
  return (
  
   <div className='xl:w-[38%] xl:p-4 mt-1  flex flex-col gap-0  relative overflow-hidden   xl:overflow-visible w-full '>
    <Navbar/>
    <div className='flex justify-between text-white mb-6'>
      <div>
        <div className='flex gap-2'>
    <div class="border-[#FC00B5] rounded-full border-2 xl:flex hidden items-center justify-center w-10 h-10 bg-white text-black">
            <i class="fa-regular fa-user text-[24px]"></i>
          </div>
          <div>
          <h3 class="xl:block hidden text-[17px] font-semibold">Olaatunbi kehinde</h3>
         <cite class="xl:block hidden text-[13px] opacity-60">Lagos Nigeria</cite>
          </div>
          </div>
          </div>
         
          <div class=" flex gap-4 xl:mr-8 mr-2">
          <div>
            <h3 class="text-[#FC00B5] text-[18px] xl:block hidden">3698.42</h3>
           <div class="xl:hidden flex gap-2">
           
           </div>
          </div>
          <div>
            <div class="hidden xl:block w-[30px] h-[30px]">
              <i class="fa-solid fa-gear text-[30px] font-bold border-b-[1px] border-b-white/20 pb-3"></i>
            </div>
          </div>
        </div>

        
    </div>
    <div class="text-white hidden justify-between xl:flex gap-3 mb-4">
        <div class="flex items-center gap-x-3 gap-3">
          <div class="p-2 bg-[#1F1B31] rounded-xl border-[1px] border-[#FC00B5] ">
          
            <i class="fa-solid fa-square-check text-[23px] text-sky-400 shadow-2xl "></i>
          </div>
          <div class="flex flex-col justify-center" >
            <h3 class="text-[26px] leading-[27px] overflow-visible">0</h3>
            <p class=" text-white">Days in training</p>
          </div>
        </div>




        <div class="text-white hidden justify-between xl:flex gap-3 ">
        <div class="flex items-center gap-x-3 gap-3">
          <div class="p-2 bg-[#1F1B31] rounded-xl border-[1px] border-[#FC00B5] ">
          
            <i class="fa-solid fa-square-check text-[23px] text-sky-400 shadow-2xl "></i>
          </div>
          <div class="flex flex-col justify-center" >
            <h3 class="text-[26px] leading-[27px] overflow-visible">0</h3>
            <p class=" text-gray-400">Days in training</p>
          </div>
        </div>
        </div>

        <div class="flex items-center gap-x-3 gap-3">
          <div class=" border-[#FC00B5]  p-2 bg-[#1F1B31] rounded-xl border-[1px]  ">
          
            <i class="fa-solid fa-crown text-[23px] text-orange-500"></i>
          </div>
          <div class="flex flex-col justify-center" >
            <h3 class="text-[26px] leading-[27px] overflow-visible">0</h3>
            <p class=" text-gray-400">Completed Courses</p>
          </div>
        </div>
        </div>
   
        <div class="py-3">
        <h1 class="font-bold text-[22px] mb-4 text-white">Quick Activities</h1>
      </div>
      <div className="group mb-4">
        <div className='flex text-white gap-6 group-hover:-translate-y-2 transition-transform duration-300 hover:border-2 hover:border-[transparent] lg:hover:border-[#FC00B5] hover:rounded-lg p-2 rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325] animate-bounce-anim hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)] mb-3 lg:hover:border-1'>
      <div className='border-[1px] bg-[#1F1B31] border-[#FC00B5] p-2 rounded-md object-contain'>
        
        <div>
        <i class="fa-solid  lg:text-[40px] fa-head-side-virus text-[30px] text-gray-500 w-[40px] max-md:w-[30px]"></i>
        </div>
      </div>
      <div> <h3 class="font-semibold text-[17px] max-md:text-[15px] ">Take personality Test</h3>
            <p class="text-[12px]  max-md:text-[10px]">take a personality text to get a course recommendation from julieth</p>
          </div>

        </div>
      </div>

      <div class="group mb-4">
            <div class="flex text-white gap-6 group-hover:-translate-y-2 hover:border-2 hover:border-[#FC00B5] hover:rounded-lg p-2 rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325] animate-bounce-anim hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)]">
              <div class="border-[1px] bg-[#1F1B31] border-[#FC00B5] p-2 rounded-md object-contain">
                <i class="fa-solid fa-comment lg:text-[40px] text-[30px] text-sky-400  w-[40px] max-md:w-[30px]"></i>
              </div>
              <div> <h3 class="font-semibold text-[17px] max-md:text-[15px] ">Previous conversation</h3>
              <p class="text-[12px]  max-md:text-[10px]">visit your previous conversations</p>
            </div>
            </div>
          </div>
          <div class=" mb-4">
            <div class="flex text-white gap-6 group-hover:-translate-y-2 transition-transform duration-300 hover:border-2 hover:border-[#FC00B5] hover:rounded-lg p-2 rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325] animate-bounce-anim hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)]">
              <div class="border-[1px] bg-[#1F1B31] border-[#FC00B5] p-2 rounded-md object-contain">
                <i class="fa-solid fa-comment lg:text-[40px] fa-note-sticky text-[30px] text-yellow-300  w-[40px] max-md:w-[30px]"></i>
              </div>
              <div> <h3 class="font-semibold text-[17px] max-md:text-[15px] ">Notes</h3>
              <p class="text-[12px]  max-md:text-[10px]">write down some questions and ideas you have</p>
            </div>
            </div>
          </div>
          <div class="mb-4">
            <div class="flex text-white gap-6 group-hover:-translate-y-2 transition-transform duration-300 hover:border-2 hover:border-[#FC00B5] hover:rounded-lg p-2 rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325] animate-bounce-anim hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)]">
              <div class="border-[1px] bg-[#1F1B31] border-[#FC00B5] p-2 rounded-md object-contain">
                <i class="fa-solid fa-comment lg:text-[40px]  fa-note-sticky fa-head-side-virus text-[30px] text-gray-500 w-[40px] max-md:w-[30px]"></i>
              </div>
              <div> <h3 class="font-semibold text-[17px] max-md:text-[15px] ">Leaderboar</h3>
              <p class="text-[12px]  max-md:text-[10px]">check the individual rating of fellow member</p>
            </div>
            </div>
          </div>
          <div class=" mb-4">
            <div class="flex text-white gap-6 group-hover:-translate-y-2 transition-transform duration-300 hover:border-2 hover:border-[#FC00B5] hover:rounded-lg p-2 rounded-xl max-md:hover:bg-[#1F1B31] max-md:hover:border-none max-md:hover:drop-shadow-none bg-[#0a0325] animate-bounce-anim hover:drop-shadow-[0_15px_10px_rgba(252,0,181,.1)] md:border-none">
              <div class="border-[1px] bg-[#1F1B31] border-[#FC00B5] p-2 rounded-md object-contain">
                <i class="fa-solid fa-comment fa-book-open-reader text-[30px] lg:text-[40px] text-blue-600 w-[40px] max-md:w-[30px]"></i>
              </div>
              <div> <h3 class="font-semibold text-[17px] max-md:text-[15px] text-white">See what others are learning</h3>
              <p class="text-[12px]  max-md:text-[10px]">Check out the most frequently asked questions</p>
            </div>
            </div>
          </div>

   </div>
  )
}
