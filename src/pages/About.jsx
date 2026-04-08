import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OLogo from '/O.png';
import image from './../assets/gallery/image.png';
import { Link } from 'react-router-dom';

const About = () => (
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <Navbar />
    <div className="flex justify-center py-8 bg-white dark:bg-black">
      <img src={OLogo} alt="Mayor Shots" className="h-16 w-auto" />
    </div>
    <div className="pt-8 sm:pt-12 md:pt-16 px-4 sm:px-6 lg:px-12 max-w-3xl mx-auto text-center pb-12">
      <img src={image} className="w-full max-w-sm mx-auto mb-6 sm:mb-10 grayscale" alt="Portrait" />
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold mb-2 tracking-tight">
        Oluwamayokun Oke
      </h1>
      <p className="text-xl sm:text-2xl text-gray-500 dark:text-gray-400 font-light tracking-widest uppercase mb-8">
        Photographer & Videographer
      </p>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
       I am a visual storyteller based in Lagos, Nigeria, dedicated to documenting the memories that tell a story. Specializing in weddings, corporate functions, and portraits, my work is driven by a commitment to authenticity and precision. From the boardroom to the ballroom, I capture the memories that matter most, providing professional multimedia services tailored to your unique story.      </p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center mt-10 px-10 py-4 rounded-full border border-black dark:border-white text-sm font-bold tracking-[0.2em] text-black dark:text-white uppercase hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all active:scale-95"
      >
        Contact Me
      </Link>
    </div>
    <Footer />
  </div>
);
export default About;