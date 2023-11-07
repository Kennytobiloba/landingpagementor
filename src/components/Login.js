import React from 'react'
import { BiUserCircle } from "react-icons/bi"
import { BsEye, BsEyeSlash, BsLock } from "react-icons/bs"
import { Link } from 'react-router-dom';
 const Login = () => {
  return (
    
  <section className='"w-full flex bg-[#262626] bg-gradient-to-r from-[#5C0095]/60 to-[#262626] h-screen'>
    <div className='w-[60%] hidden flex-col justify-center items-center h-[max] md:flex'>
      <div className='w-[60%]'>
          <img src="./image/julieth2.jpg" alt="" width={100} />
      <h1 className="font-medium text-[45px] h-fit">
       A world where you can learn tech skills with AI
         </h1>

      </div>
    </div>
    <div className='w-[100%] lg:w-[40%] bg-[#130F26] p-8 lg:p-10'>
      <form action="" className='h-[90%] w-full flex flex-col items-center justify-center'>
        <h3 className='font-[500] text-transparent text-[40px] bg-clip-text bg-gradient-to-r from-[#B658FF] to-[#FC00B5] tracking-[2px] mb-10'>
          <Link to="signUp"> Login</Link>
        </h3>
          <div className='w-full md:w-[80%] py-3'>
            <label htmlFor="email" className='text-md opacity-80 text-white'>Email</label>
            <div className='bg-gradient-to-r from-[#B658FF] to-[#FC00B5] tracking-[2px] p-[1px] rounded-md mt-1 shadow-xl'>
              <div className='bg-[#130F26] rounded-md'>
                <div className='bg-[#D9D9D9]/[10%] flex px-4 py-3 gap-x-3 items-center'>
                <BiUserCircle
                                        color="white"
                                        size={30}
                                        className="fill-[#FFFEFE]/20 opacity-80"
                                    />

                                    <input type="email" className='bg-transparent outline-none w-full' />

                </div>

              </div>

            </div>

          </div>


          <div className='w-full md:w-[80%] py-3'>
            <label htmlFor="password" className='text-md opacity-80 text-white'>Password</label>
            <div className='bg-gradient-to-r from-[#B658FF] to-[#FC00B5] tracking-[2px] p-[1px] rounded-md mt-1 shadow-xl'>
              <div className='bg-[#130F26] rounded-md'>
                <div className='bg-[#D9D9D9]/[10%] flex px-4 py-3 gap-x-3 items-center'>
               <BsLock
                                        color="white"
                                        size={29}
                                        className="fill-[#FFFEFE]/20 opacity-80"
                                    />

                                    <input type="email" className='bg-transparent outline-none w-full' />

                </div>

              </div>

            </div>

          </div>


          <div className='flex justify-between items-center w-full md:w-[80%] mt-2'>
            <div className='flex gap-x-1'>
              <input type="checkbox" className="bg-red" />
               <label
                                className="text-sm opacity-30"
                                htmlFor="check"
                            >
                                Remember me
                            </label>

            </div>

            <h3 className='text-[#FC00B5] text-sm font-[300]'>
               <Link to="signUp">  Forgot Password?</Link>
            </h3>
            

          </div>
       <Link to="/signUp" className='bg-gradient-to-r w-full md:w-[80%] mt-12 from-[#B658FF] to-[#FC00B5] text-white p-4 shadow-lg rounded-md disabled:opacity-50 flex items-center justify-center'>
           
               Login
           
         
         </Link>

          <p className='text-sm mt-4 text-white/40'>
  Opps! aren’t part of the community yet?{" "}
  <Link to="/signUp" className='text-[#FC00B5] opacity-100 underline-offset-1'>Sign Up</Link>
</p>

  
          
            
          


     

      </form>

    </div>

  </section>
  )
} 
export default Login
