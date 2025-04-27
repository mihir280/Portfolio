import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "Todo App",
      description: "Developed a full-stack Todo application with DevOps implementation for continuous deployment and container orchestration.",
      features: [
        "Task Management: Users can create, prioritize, and track tasks with priority levels.",
        "DevOps Pipeline: Implemented CI/CD with Jenkins and Azure Pipelines.",
        "Containerization: Docker and Kubernetes setup for reliable deployment.",
        "Infrastructure as Code: Used Terraform for cloud infrastructure management."
      ],
      technologies: ["JavaScript", "Node.js", "Docker", "Kubernetes", "Terraform", "Jenkins"],
      github: "https://github.com/mihir280/Todo_APP",
      live: "http://43.205.255.10:8000/todo",
      year: "2024"
    },
    {
      title: "Weather App",
      description: "Developed a React-based weather application that provides real-time weather updates using weather API integration.",
      features: [
        "Real-time Weather: Users can search for weather information by city name.",
        "Modern UI: Built with Material UI for a responsive design experience.",
        "API Integration: Used Axios for fetching real-time temperature, humidity, and weather conditions.",
        "Mobile Responsive: Seamless experience across all devices."
      ],
      technologies: ["React", "Material UI", "API Integration", "Axios", "JavaScript"],
      github: "https://github.com/mihir280/Weather_App.git",
      live: "https://mihir280.github.io/Weather_App/",
      year: "2024"
    }
  ];

  return (
    <div id="projects" className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-heading">Projects</h2>
        </motion.div>

        <div className="mt-12 space-y-24">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative grid md:grid-cols-12 gap-4 md:gap-8"
            >
              {/* Project Content */}
              <div className={`md:col-span-7 ${index % 2 === 1 ? 'md:col-start-6' : ''} z-10`}>
                <div className="bg-lightNavy p-6 md:p-8 rounded-md h-full flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-semibold text-lightestSlate">{project.title}</h3>
                    <span className="text-secondary text-sm">{project.year}</span>
                  </div>
                  
                  <p className="mb-6">{project.description}</p>
                  
                  <h4 className="text-lg font-medium text-lightestSlate mb-2">Key Features:</h4>
                  <ul className="space-y-1 mb-6">
                    {project.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-secondary mr-2">▹</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, i) => (
                        <span 
                          key={i} 
                          className="text-xs px-3 py-1 rounded-full bg-primary text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg hover:text-secondary transition-colors duration-300"
                      >
                        <FaGithub />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg hover:text-secondary transition-colors duration-300"
                      >
                        <FaExternalLinkAlt />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 