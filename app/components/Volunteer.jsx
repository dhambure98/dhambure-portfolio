import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const volunteerData = [
  {
    orgName: 'Software Engineering Society [SESoc OUSL]',
    logo: assets.sesoc_logo,
    roles: ['SESoc OUSL Chapter President Term [2024/2025]'],
    images: assets.sesoc_images,
  },
  {
    orgName: 'IEEE Sri Lankan Section',
    logo: assets.ieee_logo,
    roles: [
      'IEEE Sri Lankan Section - SubEditor [2025]',
      'IEEE Challenge Sphere 2024 Executive Committee - Editor [2024]',
    ],
    images: assets.ieee_images,
  },
  {
    orgName: 'IEEE Young Professionals Sri Lanka',
    logo: assets.ypsl_logo,
    roles: [
      'IEEE Let’s Talk YPSL Project - Design Team Lead/Member Term [2022/2023]',
      'IEEE Awrudu Organizing Committee - Logistics Team Lead [2023]',
      'IEEE Innovation Nation Sri Lanka INSL - Logistic Coordinator Colombo North Divisional  [2022/2023]',
      'Former Vice Chairman, IEEE Student Branch of Open University of Sri Lanka [22/23]',
      'Former Design Team Lead/Member [20/23]',
      'Former Design Team Member WIE OUSL [2021]',
      "Design Team Member of VoltOU'21 [2021]",
    ],
    images: assets.ypsl_images,
  },
  {
    orgName: 'SEDS OUSL [Students for the Exploration and Development of Space]',
    logo: assets.seds_logo,
    roles: [
      'OUSL Chapter Chairman Term [2023/2024]',
      'Finance and Management Division Manager [2022/2023]',
      'Finance Manager at NuForA’22 Project',
      'Media Division Lead/Member Term [2020 to 2022]',
    ],
    images: assets.seds_images,
  },
  {
    orgName: 'Career Guidance Unit - OUSL',
    logo: assets.cgu_logo,
    roles: [
      'ENOSPIRE OUSL Entrepreneurship Day Organizing Committee [2024]',
      'Vice President at TalentLift Career Fair [2023]',
    ],
    images: assets.cgu_images,
  },
];

const ImageSlider = ({ images }) => {
  if (!images || images.length === 0) return null;

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  // Image width + gap between images (tailwind gap-4 = 1rem ~16px)
  const imageWidth = 640 + 16;
  const totalWidth = duplicatedImages.length * imageWidth;

  return (
    <div className="overflow-hidden mt-6">
      <motion.div
        className="flex gap-4"
        style={{ width: totalWidth }}
        animate={{ x: [-totalWidth / 2, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: duplicatedImages.length * 2, // adjust speed here
            ease: 'linear',
          },
        }}
      >
        {duplicatedImages.map((imgSrc, i) => (
          <Image
            key={i}
            src={imgSrc}
            alt={`slider image ${i + 1}`}
            width={640}
            height={427}
            style={{ objectFit: 'cover', borderRadius: '8px' }}
            priority
          />
        ))}
      </motion.div>
    </div>
  );
};

const Volunteer = ({ isDarkMode }) => {
  return (
    <section
      id="volunteer"
      tabIndex={-1}
      className={`min-h-screen px-0 py-12 ${
        isDarkMode ? 'bg-gray-900' : 'bg-white'
      }`}
    >
      <motion.h4
        className={`text-center mb-2 text-lg font-Ovo ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Experiences
      </motion.h4>
      <motion.h2
        className={`text-center text-5xl font-Ovo mb-12 ${
          isDarkMode ? 'text-gray-100' : 'text-gray-800'
        }`}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Volunteer Experience
      </motion.h2>
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {volunteerData.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className={`rounded-2xl p-6 border ${
              isDarkMode
                ? 'bg-gray-800 border-gray-700 shadow-lg shadow-black/40'
                : 'bg-white border-gray-200 shadow-xl'
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4 flex-shrink-0">
                <Image
                  src={item.logo}
                  alt={`${item.orgName} logo`}
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <h3
                className={`text-2xl font-semibold ${
                  isDarkMode ? 'text-gray-100' : 'text-gray-800'
                }`}
              >
                {item.orgName}
              </h3>
            </div>
            <ul
              className={`list-disc list-inside text-sm mb-6 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-700'
              }`}
            >
              {item.roles.map((role, i) => (
                <li key={i}>{role}</li>
              ))}
            </ul>
            <ImageSlider images={item.images} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Volunteer;
