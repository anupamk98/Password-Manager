import React from 'react'

const Footer = () => {
  return (
   <>
    <nav className='bg-slate-800 py-5 ' >
     <ul className='flex justify-center gap-10'>
        <li><img src="public/icons/insta.svg" alt="" className='w-8' /></li>
        <li><img src="public/icons/X.svg" alt="" className='w-10' /></li>
        <li><img src="public/icons/fb.svg" alt="" className='w-8' /></li>
        <li><img src="public/icons/WhatsApp.svg" alt="" className='w-8'/></li>
     </ul>
     <div className='flex justify-center pt-3 text-white flex-wrap' >
     © 2024 PassSaver. All rights reserved. | Privacy Policy | Terms of Service
     </div>
    </nav>
   </>
  )
}

export default Footer