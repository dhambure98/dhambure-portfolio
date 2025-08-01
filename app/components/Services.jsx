import { serviceData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import { motion } from "framer-motion";

const Services = ({ isDarkMode }) => {
  const [expanded, setExpanded] = useState(null);
  const containerRef = useRef(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  // Detect outside click and collapse expanded service
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpanded(null);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <motion.div 
      id='services' 
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
        What I offer
      </motion.h4>
      <motion.h2 
        className='text-center text-5xl font-Ovo'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        My Services
      </motion.h2>

      <motion.div 
        className='grid grid-cols-auto gap-6 my-10'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.6 }}
        ref={containerRef}
      >
        {serviceData.map((service, index) => (
          <motion.div 
            key={index} 
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-lg cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover relative'
            whileHover={{ scale: 1.05 }}
            animate={{ height: expanded === index ? "auto" : 300, opacity: expanded === index ? 1 : 0.8 }}
            transition={{ duration: 0, ease: "easeOut" }}
          >
            <Image src={service.icon} alt={service.title} className='w-10' />
            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{service.title}</h3>
            
            <div className="relative">
              <motion.p
                className="text-sm text-gray-600 leading-5 dark:text-white/80 overflow-hidden min-h-[60px]"
                initial={{ height: 60, opacity: 0.8 }}
                animate={{ height: expanded === index ? "auto" : 60, opacity: expanded === index ? 1 : 0.8 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {service.fullDesc}
              </motion.p>
            </div>

            <button 
              onClick={() => toggleExpand(index)} 
              className='flex items-center gap-2 text-sm mt-5 text-blue-500'
            >
              {expanded === index ? "Read less" : "Read more"}
            </button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
