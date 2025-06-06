import About from '../components/sections/About';
import Teaching from '../components/sections/Teaching';

const AboutPage = () => {
  return (
    <div className="pt-20 md:pt-24 bg-white dark:bg-gray-900 overflow-x-hidden">
      <About />
      <Teaching />
    </div>
  );
};

export default AboutPage; 