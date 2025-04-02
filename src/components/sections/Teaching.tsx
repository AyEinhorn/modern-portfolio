import { motion } from 'framer-motion';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Jane Doe',
    role: 'Former Student',
    content: 'The way you explained complex programming concepts made them easy to understand. Your patience and willingness to help students outside class hours showed your dedication to our success.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 2,
    name: 'John Smith',
    role: 'Teaching Colleague',
    content: 'Your ability to break down difficult concepts and make them accessible to students with various backgrounds is impressive. You have a natural talent for teaching and mentoring.',
    avatar: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    name: 'Emily Johnson',
    role: 'Mentorship Program Participant',
    content: 'The guidance you provided helped me navigate my entry into tech. I especially appreciated your practical advice about portfolio development and interview preparation.',
    avatar: 'https://via.placeholder.com/150',
  },
];

const Teaching = () => {
  return (
    <section id="teaching" className="section bg-white">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Teaching & Mentorship</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600">
            Sharing knowledge and helping others grow has always been a passion of mine.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Academic Teaching Experience</h3>
            <div className="space-y-8">
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 before:z-10 before:border-4 before:border-white">
                <h4 className="text-xl font-semibold">Web Development Instructor</h4>
                <p className="text-gray-500 mb-2">Tech University • 2019-2020</p>
                <p className="text-gray-600">
                  Taught comprehensive web development courses covering HTML, CSS, JavaScript, and React. Developed curriculum that balanced theoretical concepts with hands-on projects.
                </p>
              </div>
              
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 before:z-10 before:border-4 before:border-white">
                <h4 className="text-xl font-semibold">Code Bootcamp Instructor</h4>
                <p className="text-gray-500 mb-2">Coding Academy • 2018-2019</p>
                <p className="text-gray-600">
                  Led intensive 12-week bootcamp sessions teaching full-stack development. Guided students through building portfolio projects and prepared them for technical interviews.
                </p>
              </div>
              
              <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:rounded-full before:bg-blue-600 before:z-10 before:border-4 before:border-white">
                <h4 className="text-xl font-semibold">Guest Lecturer</h4>
                <p className="text-gray-500 mb-2">Various Institutions • 2017-Present</p>
                <p className="text-gray-600">
                  Regularly speak at tech meetups and educational institutions about web development, career transitions, and continuing education in tech.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">My Teaching Philosophy</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <p className="text-gray-600 mb-4">
                I believe effective teaching involves more than just explaining concepts—it's about creating an environment where students feel comfortable asking questions and making mistakes. 
              </p>
              <p className="text-gray-600 mb-4">
                My approach combines clear explanations with practical examples, encouraging students to apply what they've learned to real-world problems. I emphasize building a strong foundation that allows for continuous self-learning.
              </p>
              <p className="text-gray-600">
                Having made a career transition myself, I understand the challenges learners face when entering tech from different backgrounds. This experience informs my teaching style, which is inclusive and adaptable to different learning paces.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">Mentorship Programs</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Technical mentor for coding bootcamp graduates</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Career advisor for professionals transitioning to tech</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-blue-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Open source project mentor for new contributors</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Student Testimonials</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg shadow-sm"
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Teaching; 