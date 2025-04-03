import { motion } from 'framer-motion';
import aboutPhoto from '../../assets/about-photo.jpg';

const About = () => {
  return (
    <section id="about" className="section bg-white py-6 md:py-10">
      <div className="container max-w-screen-lg mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-4 md:mb-6 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-start">
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
            <h3 className="text-lg md:text-xl font-bold mb-2">
              I'm a Fullstack Developer with a unique background
            </h3>
            
            <p className="text-gray-600 mb-2 text-xs md:text-sm">
              With a background in pharmacy and a passion for technology, I made a career transition that combines the best of both worlds: attention to detail, analytical thinking, and creative problem-solving.
            </p>
            
            <p className="text-gray-600 mb-3 text-xs md:text-sm">
              My experience in education has honed my communication skills and ability to explain complex concepts clearly—skills that translate perfectly to collaborative development environments. I specialize in React and Full Stack development, building applications that are not only functional but intuitive and user-friendly.
            </p>
            
            <div className="grid grid-cols-2 gap-2 mb-3">
              <div>
                <h4 className="font-semibold mb-0 text-xs md:text-sm">Name:</h4>
                <p className="text-gray-600 text-xs md:text-sm">Allan Einhorn</p>
              </div>
              <div>
                <h4 className="font-semibold mb-0 text-xs md:text-sm">Email:</h4>
                <p className="text-gray-600 text-xs md:text-sm">a.einhorn886@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-0 text-xs md:text-sm">From:</h4>
                <p className="text-gray-600 text-xs md:text-sm">San Antonio, TX</p>
              </div>
              <div>
                <h4 className="font-semibold mb-0 text-xs md:text-sm">Specialty:</h4>
                <p className="text-gray-600 text-xs md:text-sm">Fullstack Development</p>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary py-1 px-4 text-xs md:text-sm">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 