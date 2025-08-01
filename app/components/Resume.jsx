import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { assets } from "@/assets/assets";

// Certifications data
const certifications = [
  { logo: assets.coursera_logo, title: "Agile with Atlassian Jira", issuer: "Atlassian University" },
  { logo: assets.coursera_logo, title: "Software Testing and Automation Specialization", issuer: "University of Minnesota" },
  { logo: assets.coursera_logo, title: "Programming Foundations with JavaScript, HTML and CSS", issuer: "" },
  { logo: assets.coursera_logo, title: "Programming for Everybody (Getting Started with Python)", issuer: "" },
  { logo: assets.sololearn_logo, title: "Java Certification", issuer: "SoloLearn" },
  { logo: assets.sololearn_logo, title: "Python Developer", issuer: "SoloLearn" },
  { logo: assets.google_analytics_logo, title: "Introduction to Data Studio", issuer: "Google Analytics Academy" },
  { logo: assets.google_analytics_logo, title: "Google Analytics for Power Users", issuer: "Google Analytics Academy" },
];

// Education data
const educationData = [
  { school: "The Open University of Sri Lanka", duration: "2020 - Present", degree: "BSc(Hons) in Software Engineering" },
  { school: "IJSE (Institute of Software Engineering), Panadura", duration: "2020 - 2023", degree: "Graduate Diploma in Software Engineering [GDSE]" },
  { school: "Lalith Atulathmudali Vocational Training Center (LAVTC)", duration: "2018 - 2019", degree: "Higher National Diploma in Network Administration (NVQ Level.5) & Computer Network Technician (NVQ Level.4)" },
  { school: "Cisco Center, University of Moratuwa", duration: "2017 - 2018", degree: "Cisco Certified Network Associate (CCNA)" },
  { school: "Wijeya Graphics, Colombo", duration: "2017 - 2018", degree: "Diploma in Multimedia" },
  { school: "Richmond College, Galle", duration: "2017", degree: "G.C.E. Advanced Level" },
];

const experienceParagraph = `During 08-month internship and training program at SLT PLC, I gained practical experience working with broadband technologies, including fiber optics and 4G networks. I contributed to the installation, maintenance, and rehabilitation of SLT’s last-mile and core infrastructure, supporting digital services such as PEOTV (IPTV), data networking, and enterprise connectivity. I was exposed to SD-WAN technologies through SLT-MOBITEL’s partnership with Cisco and assisted in technical operations involving ADSL, 4G maintenance, and optical fiber ring architectures. My role also involved cable development and maintenance to ensure high-availability network solutions. Additionally, I worked with managed services for enterprise clients, including MPLS and Internet-based connectivity, gaining a comprehensive understanding of network planning, fault management, and quality service delivery across Sri Lanka.`;

const Resume = () => {
  return (
    <motion.section
      id="resume"
      className="max-w-6xl mx-auto px-6 py-16 scroll-mt-24 text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        className="text-center mb-2 text-lg font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        Quick Overview
      </motion.h4>
      <motion.h2
        className="text-center text-5xl font-Ovo"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Resume
      </motion.h2>

      {/* Experience */}
      <motion.div
        className="flex items-center gap-3 text-3xl font-semibold mb-4 text-gray-300"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg className="h-8 w-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.567-3 3.5S10.343 15 12 15s3-1.567 3-3.5S13.657 8 12 8z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-2m0-7v1m0 0a7 7 0 110 14 7 7 0 010-14z" />
        </svg>
        <span>Experience</span>
      </motion.div>

      <motion.section
        className="mb-20 border border-white rounded-lg p-8 bg-opacity-5  flex items-start gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-16 h-16 relative flex-shrink-0">
          <Image
            src={assets.telecom_logo}
            alt="Telecom Company Logo"
            layout="fill"
            objectFit="contain"
            className="rounded"
          />
        </div>
        <article className="relative pl-2 flex-1">
          <h4 className="font-semibold text-xl mb-1">
            Digital Service Enabling Unit (Internship) @ Sri Lanka Telecom PLC OPMC Ragama
          </h4>
          <p className="italic text-sm mb-6 text-gray-300">Sep 2019 – May 2020</p>
          <p className="text-gray-300 text-sm">{experienceParagraph}</p>
        </article>
      </motion.section>

      {/* Education */}
      <motion.div
        className="flex items-center gap-3 text-3xl font-semibold mb-4 text-gray-300"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg className="h-8 w-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.343 6.777L12 21.75l-6.5-3.395a12.083 12.083 0 01.343-6.777L12 14z" />
        </svg>
        <span>Education</span>
      </motion.div>

      <motion.section
        className="mb-20 border border-white rounded-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {educationData.map(({ school, duration, degree }, idx) => (
            <article
              key={idx}
              className="p-6 border border-gray-600 rounded-lg bg-gray-900 hover:border-purple-500 transition-colors duration-300"
            >
              <h4 className="font-semibold text-lg mb-1">{school}</h4>
              <p className="italic text-sm mb-2 text-gray-400">{duration}</p>
              <p className="text-gray-300 text-sm">{degree}</p>
            </article>
          ))}
        </div>
      </motion.section>

      {/* Certifications */}
      <motion.div
        className="flex items-center gap-3 text-3xl font-semibold mb-4 text-gray-300"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <svg className="h-8 w-7 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.343 6.777L12 21.75l-6.5-3.395a12.083 12.083 0 01.343-6.777L12 14z" />
        </svg>
        <span>Online Certifications</span>
      </motion.div>

      {/* Certifications Section */}
      <motion.section
        className="border border-white rounded-lg p-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map(({ logo, title, issuer }, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-5 p-4 border border-white rounded-lg hover:scale-105 transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-14 h-14 relative flex-shrink-0">
                <Image src={logo} alt={title} layout="fill" objectFit="contain" />
              </div>
              <div>
                <h4 className="font-semibold text-lg">{title}</h4>
                {issuer && <p className="text-sm text-gray-300">{issuer}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.section>

  );
};

export default Resume;
