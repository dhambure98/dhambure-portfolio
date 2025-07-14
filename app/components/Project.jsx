import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "framer-motion"

const categories = ["All", "Web Design", "Mobile Application", "ERP", "Tools", "Design"];

const Project = ({ isDarkMode }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? workData 
    : workData.filter(project => project.category === selectedCategory);

  const visibleProjects = showAll ? filteredProjects : filteredProjects.slice(0, 4);

  return (
    <motion.div id='projects' className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4 className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Projects
      </motion.h4>
      <motion.h2 className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My latest work
      </motion.h2>

      <motion.p className='text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in front-end development.
      </motion.p>

      {/* Category Filter Buttons */}
      <div className="lg:hidden flex justify-center mb-5">
        <select
            value={selectedCategory}
            onChange={(e) => { 
            setSelectedCategory(e.target.value); 
            setShowAll(false);
            }}
            className="py-2 px-5 border rounded-full bg-white dark:bg-gray-900 text-gray-700 dark:text-white border-gray-700 dark:border-white"
        >
            {categories.map((category, index) => (
            <option key={index} value={category}>
                {category}
            </option>
            ))}
        </select>
      </div>

      {/* Category Filter Buttons for Larger Screens */}
      <div className="hidden lg:flex justify-center gap-4 mb-10">
        {categories.map((category, index) => (
            <button 
            key={index} 
            onClick={() => { 
                setSelectedCategory(category); 
                setShowAll(false);
            }}
            className={`py-2 px-5 border rounded-full transition ${selectedCategory === category 
                ? "bg-gray-900 text-white dark:bg-white dark:text-black" 
                : "border-gray-700 text-gray-700 dark:text-white dark:border-white hover:bg-lightHover dark:hover:bg-darkHover"}`}
            >
            {category}
            </button>
        ))}
      </div>


      {/* Projects Grid */}
      <motion.div 
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-10 gap-5 dark:text-black'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
      >
        {visibleProjects.length > 0 ? visibleProjects.map((project, index) => (
          <motion.a 
            key={index} 
            href={project.link} target='_blank'
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' 
            style={{ backgroundImage: `url(${project.bgImage})` }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
              <div>
                <h2 className='font-semibold'>{project.title}</h2>
                <p className='text-sm text-gray-700'>{project.category}</p>
              </div>
              <div className='w-5 aspect-square flex items-center justify-center transition'>
                <Image src={assets.arrow_icon} alt='' className='w-3' />
              </div>
            </div>
          </motion.a>
        )) : (
          <p className="text-center text-gray-500 col-span-full">No projects found.</p>
        )}
      </motion.div>

      {/* Show More / Show Less Button */}
      {filteredProjects.length > 4 && (
        <motion.button 
          onClick={() => setShowAll(!showAll)}
          className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          {showAll ? "Show Less" : "Show More"} 
          <Image 
            src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
            alt='' 
            className={`w-4 transition-transform ${showAll ? 'rotate-180' : ''}`} 
          />
        </motion.button>
      )}

    </motion.div>
  )
}

export default Project;
