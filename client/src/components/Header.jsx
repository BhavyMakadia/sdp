import React from 'react'
import {FaSearch} from 'react-icons/fa';

import { Link } from 'react-router-dom';
export default function Header() {
  return (
<header className='bg-slate-800 shadow-md'>
    <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
    <Link to='/'>
    <h1 className='font-bold text-sm sm:text-xl flex flex-wrap'>
   
      <span className='text-slate-500'>Bhavy</span>
    <span className='text-slate-100'>Estate</span>
    
</h1>
</Link>
<form className='bg-slate-100 p-1 rounded-lg flex items-center'>
<input type="text" placeholder="Search.." 
className='bg-transpert focus:outline-none w-24 sm:w-64' />
<FaSearch className='text-slate-600'/>
</form>
<ul className='flex gap-4'>
  <li className='hidden sm:inline text-slate-100 hover:text-slate-500 font-bold  rounded '>Home</li>
  <li className='hidden sm:inline text-slate-100 hover:text-slate-500 font-bold  rounded '>About</li>
  <li className=' sm:inline text-slate-100 hover:text-slate-500 font-bold  rounded '>Sign in</li>
  
 
  </ul>
</div>
</header>
    
  )
}
