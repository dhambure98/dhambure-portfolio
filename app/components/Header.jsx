import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from "motion/react"

const Header = () => {
    return (
        <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center pt-20 2xl:pt-0 gap-4'>
            <motion.div
            initial={{scale: 0}}
            whileInView={{scale: 1}}
            transition={{duration: 0.8, type: 'spring', stiffness: 100}}
            >
                <Image src={assets.profile_img} alt='' className='rounded-full w-32' />
            </motion.div>

            <motion.h3 className='flex items-center gap-2 text-xl md:text-2xl mb-3 font-Ovo'
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            >
                Hi! I'm Akila Dhambure Liyanage <Image src={assets.hand_icon} alt='' className='w-6' />
            </motion.h3>

            <motion.h1 className='text-3xl sm:text-6xl lg:text-[65px] font-Ovo'
            initial={{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.8, delay: 0.5}}
            >
                QA Engineer | Designer
            </motion.h1>

            <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.7}}
            >
                I’m a developer and designer from Sri Lanka, working on both web and mobile projects. I specialize in creating responsive websites and interfaces, with a strong focus on quality assurance and automation testing. 
            </motion.p>
            
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <motion.a href="#contact" className='px-10 py-3 border border-black/80 rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent w-max justify-between bg-black/80 mx-auto hover:bg-black duration-500 dark:border-[0.5px] dark:hover:bg-darkHover dark:border-white'
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1}}
                >
                    contact me 
                    <Image src={assets.right_arrow_white} alt='' className='w-4' />
                </motion.a>
                <motion.a href="/AkilaDhambureCv.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'
                initial={{y: 30, opacity: 0}}
                whileInView={{y: 0, opacity: 1}}
                transition={{duration: 0.6, delay: 1.2}}
                >
                    my resume 
                    <Image src={assets.download_icon} alt='' className='w-4' />
                </motion.a>
            </div>
        </div>
    );
};

export default Header;