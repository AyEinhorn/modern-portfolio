import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import resumePDF from '../../assets/Allan-Einhorn-Resume-2025.pdf';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoverItem, setHoverItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'About', path: '/about' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' },
  ];
  
  // Check if a nav item is active (current page)
  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-gray-100 dark:bg-gray-800 shadow-lg dark:shadow-black/30 py-2' 
          : 'bg-gray-900 dark:bg-gray-900 py-6'
      }`}
    >
      <div className="container flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <Link to="/" className="relative group">
            <div className="flex items-center">
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ 
                  scale: 1.1, 
                  backgroundImage: 'linear-gradient(135deg, #0099ff, #b618fc)',
                  backgroundSize: '200% 200%',
                }}
                animate={{ 
                  backgroundImage: 'linear-gradient(135deg, #0099ff, #b618fc)',
                  backgroundSize: '200% 200%',
                }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg flex items-center justify-center text-white font-bold text-2xl mr-3 animate-gradient bg-size-200"
              >
                P
              </motion.div>
              <motion.div
                initial={{ opacity: 1 }}
                whileHover={{ y: -3 }}
                className={`text-xl font-bold ${isScrolled ? 'text-gray-800 dark:text-white' : 'text-white'}`}
              >
                Portfolio
              </motion.div>
            </div>
            <motion.div 
              initial={{ width: 0 }}
              whileHover={{ width: '100%' }}
              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary-500 to-accent-500"
            />
          </Link>
        </motion.div>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <motion.li 
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.indexOf(item) * 0.1 }}
                onHoverStart={() => setHoverItem(item.path)}
                onHoverEnd={() => setHoverItem(null)}
              >
                <Link 
                  to={item.path}
                  className={`relative py-2 px-1 font-medium text-md transition-colors ${
                    isActive(item.path) 
                      ? 'text-primary-500 dark:text-primary-400'
                      : isScrolled
                        ? 'text-gray-700 dark:text-gray-200 hover:text-primary-500 dark:hover:text-primary-400'
                        : 'text-gray-200 hover:text-white hover:text-primary-400'
                  }`}
                >
                  {item.name}
                  
                  {/* Animated underline */}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-accent-500"
                    />
                  )}
                  
                  {/* Hover effect */}
                  {hoverItem === item.path && !isActive(item.path) && (
                    <motion.div
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: '100%', opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary-400 to-accent-400"
                    />
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          <motion.a
            href="https://github.com/ayeinhorn"
            target="_blank"
            rel="noopener noreferrer"
            className={`mr-4 transition-colors hidden md:block ${
              isScrolled 
                ? 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400' 
                : 'text-gray-300 hover:text-white'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          
          <motion.a
            href={resumePDF}
            download="Allan-Einhorn-Resume.pdf"
            className="py-2 px-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white font-medium text-sm hidden md:block transition-all hover:shadow-lg hover:shadow-primary-500/25 dark:hover:shadow-accent-500/25"
            whileHover={{ 
              scale: 1.05, 
              backgroundImage: 'linear-gradient(135deg, #b618fc, #0099ff)',
              backgroundSize: '200% 200%',
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            Download CV
          </motion.a>
          
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="p-2 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-6 w-6 ${isScrolled ? 'text-gray-700 dark:text-gray-200' : 'text-white'}`}
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden w-full ${
              isScrolled ? 'bg-white dark:bg-gray-800' : 'bg-gray-900'
            }`}
            style={{ maxWidth: '100vw', overflowX: 'hidden' }}
          >
            <nav className={`py-4 px-4 border-t ${
              isScrolled ? 'border-gray-100 dark:border-gray-700' : 'border-gray-800'
            }`}>
              <ul className="space-y-3 w-full overflow-x-hidden">
                {navItems.map((item) => (
                  <motion.li 
                    key={item.path}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navItems.indexOf(item) * 0.1 }}
                  >
                    <Link 
                      to={item.path}
                      className={`block py-2 px-3 rounded-md transition-colors ${
                        isActive(item.path) 
                          ? 'bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 font-medium'
                          : isScrolled
                            ? 'text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
                            : 'text-gray-200 hover:bg-gray-800 hover:text-white'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              
              <div className={`mt-6 pt-6 flex items-center justify-between border-t ${
                isScrolled ? 'border-gray-100 dark:border-gray-700' : 'border-gray-800'
              }`}>
                <a 
                  href="https://github.com/ayeinhorn" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`transition-colors ${
                    isScrolled 
                      ? 'text-gray-600 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <ThemeToggle />
                <a 
                  href={resumePDF}
                  download="Allan-Einhorn-Resume.pdf"
                  className="py-2 px-4 rounded-full bg-gradient-to-r from-primary-500 to-accent-500 text-white text-sm font-medium"
                >
                  Download CV
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 