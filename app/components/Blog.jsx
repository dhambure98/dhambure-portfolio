import { assets, blogData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const Blog = ({isDarkMode}) => {
  return (
    <motion.div id='blog' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
        <motion.h4 className='text-center mb-2 text-lg font-Ovo'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
            Articles
        </motion.h4>
        <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        >
            My latest blog post
        </motion.h2>

        <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        >
            Explore my latest blog posts, where I share insights on web development, design, and tech trends.
        </motion.p>

        <motion.div 
        className='grid grid-cols-1 md:grid-cols-3 my-10 gap-5 dark:text-black'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        >
            {blogData.map((item, index)=>(
                <div key={index} className="flex flex-col flex-wrap">
                <div>
                    <img src={item.bgImage} alt="Placeholder" className="rounded-t-lg" />
                </div>
                <div className="flex p-10 flex-col border border-gray-400 rounded-b-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover relative dark:border-darkHover border-t-0">
                    <div>
                    <h3 className='text-lg mb-4 text-gray-700 dark:text-white'>{item.title}</h3>
                        <motion.p
                            className="text-sm text-gray-600 leading-5 dark:text-white/80 overflow-hidden min-h-[60px]"
                            initial={{ height: 60, opacity: 0.8 }}
                            transition={{ duration: 0.6, delay: 0.9 }}
                        >{item.description}</motion.p>
                    </div>
                    <a
                    href={item.link}
                    target='_blank'
                    className='flex items-center gap-2 text-sm text-blue-500'
                    >
                    Read more
                    </a>
                </div>
            </div>
            ))}
        </motion.div>

        <motion.a 
          href='https://www.techwadiya.us/'
          target='_blank'
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          Show More
          <Image 
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
            alt='' 
            className={`w-4 transition-transform`} 
          />
        </motion.a>
    </motion.div>
  )
}

export default Blog