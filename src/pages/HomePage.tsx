import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';

const HomePage = () => {
  return (
    <div className="bg-white dark:bg-gray-900 overflow-x-hidden">
      <Hero />
      <About />
      <Skills />
    </div>
  );
};

export default HomePage; 