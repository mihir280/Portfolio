import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const Hero = () => {
  return (
    <div id="home" className="w-full h-screen flex flex-col justify-center items-start px-4 md:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-secondary mb-2">Hi, my name is</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-lightestSlate">Mihir Chandra</h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate mt-2 mb-6">
          Software Developer
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="max-w-xl mb-8"
      >
        <p className="text-lg">
          Full-stack developer specializing in building modern web applications with React and Node.js. Currently focusing on MERN stack development.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap gap-4"
      >
        <Link to="projects" smooth={true} duration={500}>
          <button className="btn">View My Work</button>
        </Link>
        
        <a href="/resume.pdf" download className="btn flex items-center gap-2">
          <FaFileDownload /> Resume
        </a>
        
        <div className="flex gap-6 items-center ml-4 mt-2 sm:mt-0">
          <a href="https://github.com/mihir280" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors duration-300">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/chandramihir/" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors duration-300">
            <FaLinkedin />
          </a>
          <a href="mailto:chandramihir38@gmail.com" className="text-2xl hover:text-secondary transition-colors duration-300">
            <HiMail />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero; 