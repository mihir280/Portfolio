import { motion } from 'framer-motion';

const About = () => {
  return (
    <div id="about" className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-heading">About Me</h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col gap-4"
          >
            <p>
              I'm a passionate software developer with experience in building full-stack web applications. 
              My journey in programming began during my computer science studies at Lovely Professional University, 
              where I developed a strong foundation in software development principles.
            </p>
            <p>
              I specialize in JavaScript-based technologies, particularly the MERN stack 
              (MongoDB, Express, React, and Node.js). I enjoy creating intuitive and responsive 
              user interfaces that provide excellent user experiences.
            </p>
            <p>
              My approach to development focuses on writing clean, maintainable code while 
              prioritizing performance and accessibility. I'm constantly learning new technologies 
              and improving my skills to stay current with industry trends.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-lightNavy p-6 rounded-md"
          >
            <h3 className="text-xl font-medium text-lightestSlate mb-4">Key qualities:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-secondary mr-2">▹</span>
                <span>Adaptable problem-solver with strong analytical skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">▹</span>
                <span>Effective team player with excellent communication skills</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">▹</span>
                <span>Dedicated to creating clean, maintainable code</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">▹</span>
                <span>Continuous learner, always seeking to improve and grow</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">▹</span>
                <span>Detail-oriented with a focus on quality and user experience</span>
              </li>
              <li className="flex items-start">
                <span className="text-secondary mr-2">▹</span>
                <span>Passionate about creating innovative solutions</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About; 