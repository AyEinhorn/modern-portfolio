import About from '../components/sections/About';
import Teaching from '../components/sections/Teaching';

const AboutPage = () => {
  return (
    <div className="pt-24 md:pt-28 bg-white dark:bg-gray-900">
      <About />
      <Teaching />
    </div>
  );
};

export default AboutPage; 