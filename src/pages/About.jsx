import React from 'react';
import Navbar from '../components/Navbar';

const About = () => (
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <Navbar />
    <div className="pt-32 px-12 max-w-2xl mx-auto text-center">
      <img src="https://via.placeholder.com/400" className="w-full mb-10 grayscale" alt="Portrait" />
      <h2 className="text-3xl font-serif mb-6">Capturing life's fleeting moments.</h2>
      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
        I am a photographer based in [Your City], specializing in [Photography Style].
        Every click is an attempt to freeze time.
      </p>
    </div>
  </div>
);
export default About;