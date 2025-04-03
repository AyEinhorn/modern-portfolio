import { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import crownImage from '../../assets/crown-clothing-img.jpg';
import roboImage from '../../assets/robo-portfolio.jpg';
import gameHubImage from '../../assets/game-hub-sm.png';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  repoUrl?: string;
  category: string;
}

// Updated project data with actual projects
const projectsData: Project[] = [
  {
    id: 1,
    title: 'Crown Clothing',
    description: 'An e-commerce website I engineered using React. I leveraged Firebase for User Auth and utilized a Firebase NoSQL DB to store user and product data. Additionally I applied Context API for state management.',
    image: crownImage,
    technologies: ['React', 'Firebase', 'Context API', 'NoSQL', 'CSS'],
    liveUrl: 'https://allans-crown-clothing.netlify.app/',
    repoUrl: 'https://github.com/ADOwen/crown-clothing',
    category: 'fullstack'
  },
  {
    id: 2,
    title: 'GameHub',
    description: 'A game discovery app where you can search for video games using the Rawg.io API.',
    image: gameHubImage,
    technologies: ['React', 'TypeScript', 'API Integration', 'CSS', 'Axios'],
    liveUrl: 'https://game-hub-allan.vercel.app/',
    repoUrl: 'https://github.com/ADOwen/game-hub',
    category: 'frontend'
  },
  {
    id: 3,
    title: 'Robofriends',
    description: 'A react app where you can search for robots. Uses Redux for state management.',
    image: roboImage,
    technologies: ['React', 'Redux', 'JavaScript', 'API Integration', 'CSS'],
    liveUrl: 'https://adowen.github.io/robofriends/',
    repoUrl: 'https://github.com/ADOwen/robofriends',
    category: 'frontend'
  },
];

const categories = ['all', 'frontend', 'backend', 'fullstack'];

// Lazy loaded image component
const LazyImage = ({ src, alt }: { src: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  return (
    <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      <img 
        src={src} 
        alt={alt} 
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-300 hover:scale-105 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
    </div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [isAnimating, setIsAnimating] = useState(false);
  
  // Memoize the filtered projects to avoid unnecessary recalculations
  const filteredProjects = useMemo(() => 
    filter === 'all' 
      ? projectsData 
      : projectsData.filter(project => project.category === filter),
    [filter]
  );

  // Memoize the filter change handler
  const handleFilterChange = useCallback((category: string) => {
    setIsAnimating(true);
    setTimeout(() => {
      setFilter(category);
      setIsAnimating(false);
    }, 300);
  }, []);

  return (
    <section id="projects" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Projects Showcase</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            A collection of my recent projects demonstrating my technical skills and problem-solving approach.
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-10">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => !isAnimating && handleFilterChange(category)}
                disabled={isAnimating}
                className={`px-4 py-2 rounded-full capitalize transition-all ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                } ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg dark:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all"
              >
                <LazyImage src={project.image} alt={project.title} />
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 dark:text-white">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-primary-500 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {project.repoUrl && (
                      <a 
                        href={project.repoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects; 