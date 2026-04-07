import { useEffect, useRef, useState, useCallback } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { galleryImages, heroSlides } from '../assets/galleryData';

const socialLinks = [
  { label: 'Instagram', href: 'https://www.instagram.com/mayorshots?igsh=YnI0MXZxMDg1ZWNo' },
  { label: 'Facebook', href: 'https://www.facebook.com/share/1EBZ54fLM4/' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@mayorshots?_r=1&_t=ZS-95JYyTV9joz' },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollToGallery = () => {
    document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-neutral-900 dark:bg-black">
      {/* Background Slideshow */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={slide.image}
            className="absolute inset-0 w-full h-full object-cover opacity-90 dark:opacity-80"
            alt={slide.title}
          />
        </div>
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/40 dark:from-black/20 dark:to-black/60" />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-end pb-12 px-6 lg:px-12 text-white">
        {/* Slide Indicators */}
        <div className="absolute top-1/2 left-6 lg:left-12 -translate-y-1/2 flex flex-col gap-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-1 h-8 transition-all duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/30 hover:bg-white/50'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <div className="space-y-4">
            <p className="text-[10px] tracking-[0.4em] uppercase font-light opacity-90">
              {heroSlides[currentSlide].subtitle}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] uppercase leading-tight drop-shadow-lg transition-all duration-500">
              {heroSlides[currentSlide].title}
            </h1>
          </div>

          <div className="flex flex-col items-end gap-4">
            {/* Social Links */}
            <div className="flex items-center gap-4 mb-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] tracking-[0.2em] uppercase text-white/70 hover:text-white transition-colors"
                >
                  {social.label}
                </a>
              ))}
            </div>
            <button
              onClick={scrollToGallery}
              className="w-fit border border-white/60 dark:border-white/50 px-10 py-4 text-[10px] tracking-[0.3em] uppercase hover:bg-white hover:text-black transition-all duration-500 backdrop-blur-sm"
            >
              View Gallery
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  const observerRef = useRef(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [likedImages, setLikedImages] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('likedImages');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });

  // Persist liked images to localStorage
  useEffect(() => {
    localStorage.setItem('likedImages', JSON.stringify(likedImages));
  }, [likedImages]);

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

  const handleNext = useCallback(() => {
    if (selectedIndex !== null && selectedIndex < galleryImages.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  }, [selectedIndex]);

  const handlePrev = useCallback(() => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  }, [selectedIndex]);

  const handleClose = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const toggleLike = useCallback((imageId) => {
    setLikedImages((prev) => {
      if (prev.includes(imageId)) {
        return prev.filter((id) => id !== imageId);
      }
      return [...prev, imageId];
    });
  }, []);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: 'Mayor Shots Photography',
      text: 'Check out this amazing photography portfolio!',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share canceled');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  }, []);

  const handleDownload = useCallback((imageSrc, e) => {
    e.stopPropagation(); // Prevent event bubbling
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `mayor-shots-${Date.now()}.jpg`;
    link.target = '_blank'; // Open in new tab as fallback
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const isLiked = selectedIndex !== null && likedImages.includes(galleryImages[selectedIndex]?.id);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      {/* Hero Section added here */}
      <Hero />

      {/* Gallery Grid - smaller images */}
      <div id="gallery" className="py-1 px-4 sm:px-6 lg:px-8 xl:px-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {galleryImages.map((image, index) => (
          <div
            key={image.id}
            className="slide-up-image overflow-hidden rounded-sm opacity-0 translate-y-12 transition-all duration-1000 ease-out cursor-pointer group"
            style={{ transitionDelay: `${(index % 3) * 150}ms` }}
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className="w-full aspect-[3/4] sm:aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={handleClose}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-50 p-3 text-white/80 hover:text-white transition-colors"
            aria-label="Close"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev Button */}
          {selectedIndex > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); handlePrev(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/60 hover:text-white transition-colors"
              aria-label="Previous"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Next Button */}
          {selectedIndex < galleryImages.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); handleNext(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 text-white/60 hover:text-white transition-colors"
              aria-label="Next"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Image Container */}
          <div
            className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[selectedIndex].src}
              alt={`Gallery image ${galleryImages[selectedIndex].id}`}
              className="max-w-full max-h-[85vh] w-auto h-auto object-contain"
            />
          </div>

          {/* Bottom Actions - Updated with Like, Download, Share */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Like Button with localStorage */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLike(galleryImages[selectedIndex].id);
              }}
              className={`p-2 transition-colors ${isLiked ? 'text-red-500' : 'text-white/60 hover:text-white'}`}
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <svg className="w-5 h-5" fill={isLiked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Download Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDownload(galleryImages[selectedIndex].src, e);
              }}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Download"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>

            {/* Share Button with navigator.share() */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
              className="p-2 text-white/60 hover:text-white transition-colors"
              aria-label="Share"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      )}

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