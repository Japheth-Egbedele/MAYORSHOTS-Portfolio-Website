import Navbar from '../components/Navbar';

const About = () => (
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <Navbar />
    <div className="pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-12 max-w-2xl mx-auto text-center pb-12">
      <img src="https://via.placeholder.com/400" className="w-full max-w-sm mx-auto mb-6 sm:mb-10 grayscale" alt="Portrait" />
      <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Capturing life's fleeting moments.</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
        I am a photographer based in [Your City], specializing in [Photography Style].
        Every click is an attempt to freeze time.
      </p>
    </div>
  </div>
);
export default About;