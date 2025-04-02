import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-500 via-accent-500 to-primary-700 dark:from-dark-800 dark:via-primary-900 dark:to-dark-900 text-white min-h-screen flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-10 right-10 w-96 h-96 bg-accent-400 dark:bg-accent-800 rounded-full filter blur-3xl"
        />
        <motion.div 
          initial={{ opacity: 0.1 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse", delay: 2 }}
          className="absolute bottom-10 left-10 w-72 h-72 bg-primary-400 dark:bg-primary-900 rounded-full filter blur-3xl"
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern bg-center opacity-10"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-medium mb-2 text-primary-100"
          >
            Hello, I'm
          </motion.h2>
          
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 inline-block bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-100"
          >
            Allan Einhorn
          </motion.h1>
          
          <motion.h3
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold mb-6"
          >
            <span className="text-white">Fullstack Developer with a passion for 
              <motion.span
                initial={{ opacity: 0.6 }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="ml-2 bg-clip-text text-transparent bg-gradient-to-r from-accent-200 to-white dark:from-accent-300 dark:to-white"
              >
                innovative solutions
              </motion.span>
            </span>
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-white/90 mb-10 max-w-2xl leading-relaxed"
          >
            I build modern, responsive web applications using React, TypeScript, and Node.js. With a background in pharmacy and education, I bring a unique perspective to problem-solving in tech.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-wrap gap-5"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-lg font-medium bg-white text-primary-600 rounded-full hover:shadow-lg hover:shadow-white/25 transition-all"
              >
                View My Work
              </motion.button>
            </Link>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 text-lg font-medium border-2 border-white text-white rounded-full hover:bg-white/10 transition-all"
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
        >
          <Link to="/about" className="text-white flex flex-col items-center group">
            <span className="mb-2 text-sm group-hover:text-primary-200 transition-colors">Learn More</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatType: "loop"
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero; 