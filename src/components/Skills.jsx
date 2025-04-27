import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaJs, FaPhp
} from 'react-icons/fa';
import { 
  SiMongodb, SiExpress, SiCplusplus, SiC
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: [
        { name: "C", icon: <SiC className="text-3xl md:text-4xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-3xl md:text-4xl" /> },
        { name: "JavaScript", icon: <FaJs className="text-3xl md:text-4xl" /> },
        { name: "PHP", icon: <FaPhp className="text-3xl md:text-4xl" /> }
      ]
    },
    {
      category: "Frontend",
      items: [
        { name: "HTML", icon: <FaHtml5 className="text-3xl md:text-4xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-3xl md:text-4xl" /> },
        { name: "React", icon: <FaReact className="text-3xl md:text-4xl" /> }
      ]
    },
    {
      category: "Backend",
      items: [
        { name: "Node.js", icon: <FaNodeJs className="text-3xl md:text-4xl" /> },
        { name: "Express", icon: <SiExpress className="text-3xl md:text-4xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-3xl md:text-4xl" /> }
      ]
    },
    {
      category: "Tools",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-3xl md:text-4xl" /> },
        { name: "GitHub", icon: <FaGithub className="text-3xl md:text-4xl" /> }
      ]
    }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div id="skills" className="w-full py-16 md:py-24 bg-lightNavy/30">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-heading">My Skills</h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-lightNavy p-6 rounded-md"
            >
              <h3 className="text-xl text-lightestSlate font-medium mb-6 pb-2 border-b border-lightestNavy">
                {skillGroup.category}
              </h3>
              
              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                {skillGroup.items.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    variants={item}
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="text-secondary">
                      {skill.icon}
                    </div>
                    <span className="text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 bg-lightNavy p-6 rounded-md"
        >
          <h3 className="text-xl text-lightestSlate font-medium mb-4">Soft Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Adaptability", "Team Management", "Cooperative", "Problem Solving", "Communication", "Time Management", "Attention to Detail", "Critical Thinking"].map((skill, index) => (
              <motion.div 
                key={skill}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="flex items-center gap-2"
              >
                <span className="text-secondary">▹</span>
                <span>{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills; 