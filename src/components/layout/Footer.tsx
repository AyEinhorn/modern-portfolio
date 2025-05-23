import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ),
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-white py-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-gradient-to-br from-accent-500 to-primary-500 filter blur-3xl"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-xl mr-3">
                P
              </div>
              <h3 className="text-xl font-bold">Portfolio</h3>
            </div>
            <p className="text-gray-400 dark:text-gray-300 mb-6">
              A showcase of my work, skills, and journey as a fullstack developer with a unique background.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold mb-4 relative inline-block">
                  <span className="relative z-10">Navigation</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-70"></span>
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>About</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resume" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Resume</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 relative inline-block">
                  <span className="relative z-10">Work</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-70"></span>
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/projects" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Projects</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/resume#skills" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Skills</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about#teaching" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Teaching</span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 relative inline-block">
                  <span className="relative z-10">Contact</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-accent-500 opacity-70"></span>
                </h4>
                <ul className="space-y-3">
                  <li>
                    <Link to="/contact" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Get in Touch</span>
                    </Link>
                  </li>
                  <li>
                    <a href="mailto:your-email@example.com" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors flex items-center gap-2 group">
                      <span className="w-0 h-px bg-primary-500 transition-all duration-300 group-hover:w-4"></span>
                      <span>Email Me</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 dark:text-gray-400"
        >
          <p>
            &copy; {currentYear} Allan Einhorn. All rights reserved.
            <span className="mx-2">•</span>
            Designed with <span className="text-accent-500">♥</span> by Allan Einhorn
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer; 