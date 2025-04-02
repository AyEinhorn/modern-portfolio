import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="w-full h-80 bg-gray-200 rounded-lg overflow-hidden">
                {/* Replace with your image */}
                <img 
                  src="https://via.placeholder.com/600x800" 
                  alt="Picture of Allan Einhorn" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex flex-col items-center justify-center shadow-lg transform rotate-3 z-10">
                <span className="text-white text-xl font-bold">3+</span>
                <span className="text-white text-xs">Years</span>
                <span className="text-white text-xs">Experience</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm a Fullstack Developer with a unique background
            </h3>
            
            <p className="text-gray-600 mb-4">
              With a background in pharmacy and a passion for technology, I made a career transition that combines the best of both worlds: attention to detail, analytical thinking, and creative problem-solving.
            </p>
            
            <p className="text-gray-600 mb-6">
              My experience in education has honed my communication skills and ability to explain complex concepts clearly—skills that translate perfectly to collaborative development environments. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and TypeScript, building applications that are not only functional but intuitive and user-friendly.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-semibold mb-2">Name:</h4>
                <p className="text-gray-600">Allan Einhorn</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Email:</h4>
                <p className="text-gray-600">a.einhorn886@gmail.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">From:</h4>
                <p className="text-gray-600">San Antonio, TX</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Specialty:</h4>
                <p className="text-gray-600">Fullstack Development</p>
              </div>
            </div>
            
            <a href="#contact" className="btn btn-primary">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 