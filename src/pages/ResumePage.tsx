import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';

const ResumePage = () => {
  return (
    <div className="pt-20 md:pt-24 bg-white dark:bg-gray-900 overflow-x-hidden">
      <Experience />
      <Skills />
    </div>
  );
};

export default ResumePage; 