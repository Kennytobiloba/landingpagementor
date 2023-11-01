import React from 'react'

import SideBar from '../component/SideBar'
import Main from '../component/Main'
import Activity from '../component/Activity'

 const DasboardComponent = () => {
  return (
    <div>
      <div className='flex justify-center w-full items-center  h-full '>
        <div className='flex justify-between w-[100%] px-5 py-4'>
        <SideBar/>
        <Main/>
        <Activity/>
        
        </div>
      </div>
    </div>
  )
}
export default DasboardComponent
