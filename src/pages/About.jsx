import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OLogo from '/O.png';
import image from './../assets/gallery/image.png';

const About = () => (
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <Navbar />
    <div className="flex justify-center py-8 bg-white dark:bg-black">
      <img src={OLogo} alt="Mayor Shots" className="h-16 w-auto" />
    </div>
    <div className="pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12 max-w-2xl mx-auto text-center pb-12">
      <img src={image} className="w-full max-w-sm mx-auto mb-6 sm:mb-10 grayscale" alt="Portrait" />
      <h2 className="text-2xl sm:text-3xl font-serif mb-4 sm:mb-6">Capturing life's fleeting moments.</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
        I am a photographer based in [Your City], specializing in [Photography Style].
        Every click is an attempt to freeze time.
      </p>
    </div>
    <Footer />
  </div>
);
export default About;