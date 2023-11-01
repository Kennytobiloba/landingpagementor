import React from 'react'

export const Main = () => {
  return (
    <div className='h-[100vh] p-4 w-[40%] max-md:w-full xl:flex max-md:flex-col-reverse max-md:p-5 hidden max-md:h-fit gap-x-4 overflow-hidden '>

<div className='bg-[#7003C6]/10  p-5 px-6 rounded-2xl w-[100%] max-md:w-full max-md:bg-transparent max-md:p-0 h-[93vh]'>
    <div className='flex items-center gap-x-5 border-[1px]  border-[#FC00B5] p-3 px-7 rounded-xl max-md:hidden'>
    <span class="text-white">
                <i class="fas fa-search"></i>
              </span>
              <input type="text" placeholder='what do you want to learn' className='bg-transparent outline-none  border-none text-[13px] w-full' />
             
                 
    </div>
    <div class="flex justify-between mt-6">
            <div>
              <h1 class="text-[17px] font-semibold text-white">Courses Activity</h1>
              <h5 class="text-[13px] font-semibold text-white">No course activity yet</h5>
            </div>
            <div><i class="fa-solid fa-plus text-black text-[18px] bg-white p-2"></i></div>
            </div>  

             <div class="group mt-4">
            <div class="flex h-[60%] justify-center items-center mt-6 group-hover:-translate-y-2 transition-transform duration-300 ">
              <div class="w-[40%] mx-auto">
                {/* <img src="img/start.jpg" class="w-full "> */}
                <img src="start.png" alt="" className='w-full' />
              
              </div>
          </div>
            
          </div>
          <div>
            <h1 class="text-white text-[20px] w-full text-center">Welcome to a new learning journey</h1>
              <h4 class="text-white text-center text-[16px]">Talk to julieth and begin your journey</h4>
          </div>
        </div>  

</div>



  )
}
