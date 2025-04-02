import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    role: 'Assistant Instructor || Centralized Grader',
    company: 'EdX Bootcamps',
    period: '05/2022 - Present',
    description: 'Guide students in developing complex web applications using modern technologies. Teach advanced React techniques, component optimization, TypeScript, and full-stack development. Mentor on best practices for state management, API consumption, and collaborative Git workflows.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Node.js', 'Express', 'REST APIs', 'GraphQL', 'MongoDB', 'Redux', 'Context API', 'Jest', 'Cypress', 'Tailwind', 'Bootstrap']
  },
  {
    id: 2,
    role: 'Web Development Instructor',
    company: 'iCode Afterschool Program',
    period: '03/2024 - 08/2024',
    description: 'Taught foundational web development concepts to K-12 students in an engaging, interactive environment. Created activities that encouraged critical thinking and problem-solving while maintaining student interest in coding and STEM education.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Teaching', 'Curriculum Development', 'Student Engagement', 'STEM Education']
  },
  {
    id: 3,
    role: 'Pharmacy Specialist',
    company: 'Healthcare Institution',
    period: '2007 - 2019',
    description: 'Managed patient care and medication administration in a clinical setting. ',
    skills: ['Problem Solving', 'Team Collaboration', 'Attention to Detail', 'Patient Communication']
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Experience Timeline</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My professional journey represents a transition from healthcare to technology, leveraging transferable skills along the way.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary-500 to-accent-500 hidden md:block rounded-full opacity-70"></div>
          
          {/* Experience items */}
          <div className="space-y-16">
            {experienceData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center justify-center relative"
              >
                {/* For odd items (left side) */}
                {index % 2 === 0 ? (
                  <>
                    <div className="md:w-5/12 md:pr-12 md:text-right">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/20"
                      >
                        <span className="inline-block px-3 py-1 rounded bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-sm font-medium mb-2">
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold mb-1 dark:text-white">{item.role}</h3>
                        <h4 className="text-gray-600 dark:text-gray-300 mb-3">{item.company}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2 justify-start md:justify-end">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Timeline dot */}
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-gray-900 relative z-10 my-4 md:my-0 shadow-lg">
                      <span className="text-white text-xs font-bold">{item.id}</span>
                    </div>
                    
                    {/* Empty space for right side */}
                    <div className="md:w-5/12 hidden md:block"></div>
                  </>
                ) : (
                  <>
                    {/* Empty space for left side */}
                    <div className="md:w-5/12 hidden md:block"></div>
                    
                    {/* Timeline dot */}
                    <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 border-4 border-white dark:border-gray-900 relative z-10 my-4 md:my-0 shadow-lg">
                      <span className="text-white text-xs font-bold">{item.id}</span>
                    </div>
                    
                    {/* For even items (right side) */}
                    <div className="md:w-5/12 md:pl-12">
                      <motion.div 
                        whileHover={{ y: -5 }}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-gray-900/20"
                      >
                        <span className="inline-block px-3 py-1 rounded bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-300 text-sm font-medium mb-2">
                          {item.period}
                        </span>
                        <h3 className="text-xl font-bold mb-1 dark:text-white">{item.role}</h3>
                        <h4 className="text-gray-600 dark:text-gray-300 mb-3">{item.company}</h4>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex} 
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 