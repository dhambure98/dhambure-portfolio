import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

            <div className='w-max sm:flex items-center gap-4 mx-auto'>
                <div className='flex items-center gap-2'><Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' /><a href="mailto:supungunawardana.me@gmail.com">supungunawardana.me@gmail.com</a></div>
                <div className='flex items-center gap-2'><Image src={isDarkMode ? assets.phone_icon_dark : assets.phone_icon} alt='' className='w-6' /><a href="tel:+94717272618">+94 71 72 72 618</a></div>
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>© 2025 Supun Gunawardhana. All rights reserved</p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a target='_blank' href="https://github.com/Lawo69">GitHub</a></li>
                <li><a target='_blank' href="https://www.linkedin.com/in/supungunawardhana/">LinkedIn</a></li>
                <li><a target='_blank' href="https://www.behance.net/supungunawardana/">Behance</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer