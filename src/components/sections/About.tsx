import { motion } from 'framer-motion';
import aboutPhoto from '../../assets/about-photo.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="section bg-white py-6 md:py-10 overflow-x-hidden">
      <div className="container max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-5 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-full"
          >
            <div className="relative">
              <div className="w-full rounded-lg overflow-hidden" style={{ maxHeight: '50vh' }}>
                <img 
                  src={aboutPhoto}
                  alt="Picture of Allan Einhorn" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 md:-bottom-3 md:-right-3 w-16 md:w-20 h-16 md:h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex flex-col items-center justify-center shadow-lg transform rotate-3 z-10">
                <span className="text-white text-base md:text-lg font-bold">3+</span>
                <span className="text-white text-[10px] md:text-xs">Years</span>
                <span className="text-white text-[10px] md:text-xs">Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:pr-2"
          >
            <h3 className="text-lg md:text-xl font-bold mb-2 px-1">
              I'm a Fullstack Developer with a unique background
            </h3>
            
            <p className="text-gray-600 mb-2 text-xs md:text-sm px-1">
              With a background in pharmacy and a passion for technology, I made a career transition that combines the best of both worlds: attention to detail, analytical thinking, and creative problem-solving.
            </p>
            
            <p className="text-gray-600 mb-2 text-xs md:text-sm px-1">
              My experience in education has honed my communication skills and ability to explain complex concepts clearly—skills that translate perfectly to collaborative development environments. I specialize in React and Full Stack development, building applications that are not only functional but intuitive and user-friendly.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-2 md:p-3 border border-gray-100 shadow-sm mb-3">
              <h4 className="text-sm font-bold mb-1 text-blue-600 border-b pb-1 border-gray-200 px-1">Personal Information</h4>
              <div className="grid grid-cols-2 gap-x-2 gap-y-1 px-2">
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs w-16 mr-1">Name:</span>
                  <span className="text-gray-800 font-medium text-sm">Allan Einhorn</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs w-16 mr-1">Email:</span>
                  <a href="mailto:a.einhorn886@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors font-medium text-sm max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
                    a.einhorn886@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs w-16 mr-1">Location:</span>
                  <span className="text-gray-800 font-medium text-sm">San Antonio, TX</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-500 text-xs w-16 mr-1">Specialty:</span>
                  <span className="text-gray-800 font-medium text-sm">Fullstack Dev</span>
                </div>
              </div>
            </div>
            
            <div className="text-center md:text-left mb-2">
              <Link 
                to="/contact"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-full transition-all transform hover:-translate-y-1 hover:shadow-lg text-sm"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 