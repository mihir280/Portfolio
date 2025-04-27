import { motion } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      institution: "Lovely Professional University",
      degree: "Bachelor of Technology - Computer Science",
      period: "2022 - Present",
      details: "CGPA: 7.40/10",
      type: "university",
    },
    {
      institution: "North Point Residential School",
      degree: "Class 12 (Science)",
      period: "2022",
      details: "Percentage: 76.90%",
      type: "school",
    },
    {
      institution: "North Point Residential School",
      degree: "Class 10",
      period: "2020",
      details: "Percentage: 84.00%",
      type: "school",
    }
  ];

  const certificates = [
    "Coursera - Server side JavaScript with Node.js (2024)",
    "Coursera - HTML, CSS, and JavaScript for Web Developers (2024)",
    "NPTEL - Cloud Computing (2024)",
    "CipherSchools - Full-Stack Development Using MERN Stack (2024)",
    "CipherSchools - Java for Beginners (2024)"
  ];

  return (
    <div id="education" className="w-full py-16 md:py-24 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-heading">Education</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="border-l-2 border-secondary pl-8 space-y-12 relative">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-4 border-secondary bg-primary"></div>
                  
                  {/* Icon */}
                  <div className="absolute -left-16 mt-0.5 bg-primary text-secondary text-xl">
                    {item.type === 'university' ? <FaGraduationCap /> : <FaSchool />}
                  </div>
                  
                  {/* Content */}
                  <div className="mb-2">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xl font-medium text-lightestSlate">{item.institution}</h3>
                      <span className="text-secondary text-sm">{item.period}</span>
                    </div>
                    <p className="text-white">{item.degree}</p>
                    <p className="text-sm text-lightSlate mt-1">{item.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certificates */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-lightNavy p-6 rounded-md h-fit"
          >
            <h3 className="text-xl font-medium text-lightestSlate mb-6">Certificates</h3>
            
            <ul className="space-y-4">
              {certificates.map((certificate, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="flex items-start"
                >
                  <span className="text-secondary mr-2">▹</span>
                  <span>{certificate}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education; 