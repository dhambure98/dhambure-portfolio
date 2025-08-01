import { assets, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const About = ({ isDarkMode }) => {
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isEducationModalOpen, setIsEducationModalOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);


  // Function to handle scroll event
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (Math.abs(currentScrollY - lastScrollY) > 10) {
      setIsLanguageModalOpen(false);
      setIsEducationModalOpen(false);
    }
    setLastScrollY(currentScrollY);
  };

  // Add and clean up scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isLanguageModalOpen, isEducationModalOpen, lastScrollY]);

  return (
    <motion.div 
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >

      <motion.h4 
        className='text-center mb-2 text-lg font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Introduction
      </motion.h4>

      <motion.h2 
        className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        About me
      </motion.h2>

      <motion.div 
        className='flex w-full flex-col lg:flex-row items-center justify-center gap-20 my-20'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div 
          className='w-64 sm:w-1/2 rounded-3xl max-w-none'
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image 
            src={isHovered ? assets.user_image2 : assets.user_image} 
            alt='User Profile' 
            className='w-full rounded-3xl transition-all duration-500 ease-in-out' 
          />
        </motion.div>

        <motion.div 
          className='w-64 text-center sm:text-left sm:w-full'
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6, delay: 0.8 }}
          >
          <p className='mb-10 max-w-2xl font-Ovo'>
            Passionate QA Engineer and UI/UX Enthusiast with experience in ensuring the quality and usability of web and mobile applications. Skilled in test automation, user interface evaluation, and responsive design principles. Dedicated to enhancing user experiences through meticulous testing and intuitive design practices. Strong analytical and problem-solving skills with a commitment to continuous learning and innovation in the areas of quality engineering and user-centered design.
          </p>

          <motion.div className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}>

            <motion.div className='border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:bg-darkHover/50'
              onClick={() => setIsLanguageModalOpen(true)}
              whileInView={{ opacity: 1.05 }}>
              <Image src={isDarkMode ? assets.code_icon_dark : assets.code_icon} alt='Languages' className='w-7 mt-3' />
              <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Languages</h3>
              <p className='text-gray-600 text-sm dark:text-white/80'>HTML, CSS, JavaScript, React.js, Java, Selenium </p>
            </motion.div>

            <motion.div className='border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:bg-darkHover/50'
                onClick={() => setIsEducationModalOpen(true)}
              whileInView={{ opacity: 1.05 }}>
              <Image src={isDarkMode ? assets.edu_icon_dark : assets.edu_icon} alt='Education' className='w-7 mt-3' />
              <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Education</h3>
              <p className='text-gray-600 text-sm dark:text-white/80'>B.Hon in Software Enginnerung</p>
            </motion.div>

            <motion.a href="#projects" className='border-[0.5px] border-gray-400 rounded-xl p-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-lg dark:border-white dark:hover:bg-darkHover/50'
              whileInView={{ opacity: 1.05 }}>
              <Image src={isDarkMode ? assets.project_icon_dark : assets.project_icon} alt='Projects' className='w-7 mt-3' />
              <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>Projects</h3>
              <p className='text-gray-600 text-sm dark:text-white/80'>Built more than 5 projects</p>
            </motion.a>
          </motion.div>

          <motion.h4 className='my-6 text-gray-700 font-Ovo dark:text-white/80'
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}>
            Tools I use
          </motion.h4>

          <motion.ul className='flex items-center gap-3 sm:gap-5'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}>
            {toolsData.map((tool, index) => (
              <motion.li key={index} className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:shadow-md hover:-translate-y-1 duration-500'
                whileHover={{ scale: 1.05 }}>
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>

      {/* Modal for Languages */}
      {isLanguageModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
          <div className='relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-h-[90%] overflow-x-auto max-w-md'>
            <h2 className='text-xl font-semibold mb-4 text-gray-700 dark:text-white'>Tech Stacks I Use</h2>
            <div className='absolute right-6 top-6' onClick={() => setIsLanguageModalOpen(false)}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='cursor-pointer w-5' />
            </div>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Frontend:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>HTML5, CSS3, JavaScript (ES6+), TypeScript</li>
              <li>Responsive Design & Cross-Browser Compatibility</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Frameworks & Libraries:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>React.js, Tailwind CSS, Bootstrap</li>
              <li>Material UI, React Hook Form, Axios</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>State Management:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Redux Toolkit, Context API, Zustand</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Quality Assurance:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Manual Testing (Test Case Writing, Bug Reporting)</li>
              <li>Automation: Selenium, Cypress, TestNG</li>
              <li>API Testing: Postman, Swagger</li>
              <li>Test Management Tools: Jira, TestRail</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>UI/UX Design Tools:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Figma, Adobe XD</li>
              <li>Wireframing & Prototyping with FigJam</li>
              <li>User-Centered Design Principles</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Version Control:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Git, GitHub</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Backend Basics:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Spring Boot, Node.js (basics)</li>
              <li>RESTful APIs (Request/Response, Status Codes)</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Databases:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>MySQL, MongoDB, Firebase</li>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Tools & Platforms:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Visual Studio Code, Postman, Chrome DevTools</li>
              <li>Jira, Trello, Notion</li>
              <li>GitHub Actions (basic CI/CD knowledge)</li>
            </ul>
          </div>
        </div>
      )}

      {/* Modal for Education */}
      {isEducationModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm z-50'>
          <div className='relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-[90%] max-h-[90%] overflow-x-auto max-w-md'>
            <h2 className='text-xl font-semibold mb-4 text-gray-700 dark:text-white'>Education Qualifications</h2>
            <div className='absolute right-6 top-6' onClick={() => setIsEducationModalOpen(false)}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='cursor-pointer w-5' />
            </div>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Acadamic:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Bachelor of Software Engineering (Honours) Undergraduate</li>
              <p>- Open University of Sri Lanka</p>

              <li>General Certificate of Education (Advanced Level)</li>
              <p>- Richmond College, Galle</p>

              <li>General Certificate of Education (Ordinary Level)</li>
              <p>- Richmond College, Galle</p>
            </ul>

            <h3 className='text-lg font-semibold text-gray-700 dark:text-white'>Certifications:</h3>
            <ul className='list-disc pl-5 text-gray-600 dark:text-white/80'>
              <li>Design Thinking</li>
              <p>- Great Learning Academy</p>

              <li>Programming for Everybody (Python)</li>
              <p>- University of Michigan</p>

              <li>Java, Python, Java Script</li>
              <a>- Sololearn</a>

              <li>Postman API Fundamentals Student Expert</li>
              <a>- Postman Academy</a>

              <li>Introduction to Data Science</li>
              <a>- Cisco Network Academy</a>

              <li>Google Analytics for Beginners</li>
              <a>- Google Analytics Academy</a>
            </ul>

          </div>
        </div>
      )}
    </motion.div>
  )
}

export default About;
