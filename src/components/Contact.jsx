import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Contact = () => {
  return (
    <div id="contact" className="w-full py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-lightestSlate mb-4">Get In Touch</h2>
          <p className="mb-8">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll do my best to get back to you!
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a 
              href="https://github.com/mihir280" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-lightSlate hover:text-secondary transition-colors duration-300"
            >
              <FaGithub className="text-3xl" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/chandramihir/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 text-lightSlate hover:text-secondary transition-colors duration-300"
            >
              <FaLinkedin className="text-3xl" />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:chandramihir38@gmail.com"
              className="flex flex-col items-center gap-2 text-lightSlate hover:text-secondary transition-colors duration-300"
            >
              <HiMail className="text-3xl" />
              <span>Email</span>
            </a>
          </div>
          
          <a 
            href="mailto:chandramihir38@gmail.com"
            className="btn inline-block"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
      
      <div className="mt-24 border-t border-lightestNavy pt-8">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col items-center justify-center">
            <p className="text-sm text-slate">Designed & Built by Mihir Chandra</p>
            <p className="text-xs text-slate mt-2">© 2024 All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 