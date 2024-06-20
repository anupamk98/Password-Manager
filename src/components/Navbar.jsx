import React from 'react'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-around bg-slate-800 py-6' >
      <div className="logo font-bold text-2xl text-green-800 p-1">&lt;<span className='text-green-800'>Pass</span>
      <span className='text-white'>Saver</span>/&gt;</div>
        <div className='flex align-center cursor-pointer hover:bg-green-700 p-1 rounded-full '>
        <span><img src="github_mark.svg" alt="" className='invert w-10'/></span>
        <span className='font-bold text-xl text-white px-3 py-1 '>Github</span>
        </div>
    </nav>
    </>
  )
}

export default Navbar
