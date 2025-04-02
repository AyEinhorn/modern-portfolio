import { motion } from 'framer-motion';

interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: number; // 1-10
    icon?: string; // URL or Base64
  }[];
}

const skillsData: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: [
      { name: 'HTML/CSS', level: 9 },
      { name: 'JavaScript', level: 9 },
      { name: 'TypeScript', level: 8 },
      { name: 'React', level: 9 },
      { name: 'Redux', level: 8 },
      { name: 'Next.js', level: 7 },
      { name: 'Tailwind CSS', level: 8 },
      { name: 'Material UI', level: 7 },
    ]
  },
  {
    name: 'Backend',
    skills: [
      { name: 'Node.js', level: 8 },
      { name: 'Express', level: 8 },
      { name: 'MongoDB', level: 7 },
      { name: 'SQL', level: 6 },
      { name: 'REST API', level: 8 },
      { name: 'GraphQL', level: 6 },
      { name: 'Authentication', level: 7 },
    ]
  },
  {
    name: 'Tools & Others',
    skills: [
      { name: 'Git', level: 8 },
      { name: 'Webpack', level: 7 },
      { name: 'Vite', level: 8 },
      { name: 'Jest', level: 7 },
      { name: 'CI/CD', level: 6 },
      { name: 'Docker', level: 5 },
      { name: 'AWS', level: 6 },
    ]
  },
  {
    name: 'Soft Skills',
    skills: [
      { name: 'Communication', level: 9 },
      { name: 'Teamwork', level: 9 },
      { name: 'Problem Solving', level: 8 },
      { name: 'Teaching', level: 9 },
      { name: 'Time Management', level: 8 },
      { name: 'Adaptability', level: 8 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto"></div>
          <p className="mt-6 max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            My technical toolkit and professional capabilities that I bring to every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {skillsData.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 text-white flex items-center justify-center mr-3 shadow-md">
                  {categoryIndex + 1}
                </span>
                {category.name}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{skill.level * 10}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level * 10}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          skill.level >= 8 
                            ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                            : skill.level >= 6
                              ? 'bg-gradient-to-r from-primary-400 to-accent-400'
                              : 'bg-gradient-to-r from-primary-300 to-accent-300'
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-gray-900/20 border border-gray-100 dark:border-gray-700"
        >
          <h3 className="text-xl font-bold mb-6 text-center text-gray-800 dark:text-white">Additional Skills</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Responsive Design', 'UX/UI Fundamentals', 'Cross-Browser Compatibility',
              'Agile Methodology', 'Code Review', 'Mentoring', 'Documentation',
              'Figma', 'Accessibility', 'Performance Optimization'
            ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05, 
                  backgroundColor: index % 3 === 0 ? '#e5f7ff' : index % 3 === 1 ? '#e5ffe8' : '#f5e5ff',
                  color: index % 3 === 0 ? '#0078d4' : index % 3 === 1 ? '#00a854' : '#8c00d4',
                }}
                className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium transition-all cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 