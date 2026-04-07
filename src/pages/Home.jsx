import { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { galleryImages } from '../assets/galleryData';
import heroImage from '../assets/gallery/hero.jpg';

const Hero = () => {
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-neutral-900 dark:bg-black">
      {/* Background Image */}
      <img
        src={heroImage}
        className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80"
        alt="Hero Background"
      />

      {/* Overlay - lighter in light mode, darker in dark mode */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 dark:from-black/20 dark:to-black/60" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-12 px-6 lg:px-12 text-white">

        {/* Main Text & Button Wrapper */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">

          {/* Title and Date */}
          <div className="space-y-4">
            {/* <p className="text-[10px] tracking-[0.4em] uppercase font-light opacity-90">
              July 15th, 2025
            </p> */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase leading-tight drop-shadow-lg">
              My <span className="font-light">Works</span>
              {/* <br className="md:hidden" /> Morocco */}

            </h1>
          </div>

          {/* Ghost Button */}
          <button
            onClick={scrollToGallery}
            className="w-fit border border-white/60 dark:border-white/50 px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
          >
            View Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('slide-up-visible');
            observerRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const images = document.querySelectorAll('.slide-up-image');
    images.forEach((img) => observerRef.current.observe(img));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      {/* Hero Section added here */}
      <Hero />

      {/* Gallery Grid */}
      <div id="gallery" className="py-1 px-4 sm:px-6 lg:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="slide-up-image overflow-hidden rounded-sm opacity-0 translate-y-12 transition-all duration-1000 ease-out"
            style={{ transitionDelay: `${(index % 3) * 150}ms` }}
          >
            <img
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className="w-full aspect-[2/3] object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </div>

      <Footer />

      <style>{`
        .slide-up-image.slide-up-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Home;