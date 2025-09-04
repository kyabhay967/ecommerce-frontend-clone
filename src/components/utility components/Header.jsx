import React from 'react'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
     <div className='bg-black font-style: bold text-yellow-500 flex justify-end '>
      <div className='flex justify-between w-75 p-3'>
        <div className='hover:cursor-pointer hover:text-red-600 hover:bg-sky-100' onClick={()=>navigate('/')}>Home</div>

        <div className='hover:cursor-pointer hover:text-red-600 hover:bg-sky-100' onClick={()=>navigate('/cart')}>Cart</div>

        <div className='hover:cursor-pointer hover:text-red-600 hover:bg-sky-100' onClick={()=>navigate('/login')}>Logout</div>

        <div className='hover:cursor-pointer hover:text-red-600 hover:bg-sky-100'onClick={()=>navigate('/contactus')}>ContactUs</div>
        
      </div>
      </div>
    </div>
  )
}

export default Header
