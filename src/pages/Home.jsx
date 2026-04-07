import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { galleryImages } from '../assets/galleryData';

const Home = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <div className="pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-12 pb-12 sm:pb-16 md:pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {galleryImages.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={`Gallery image ${image.id}`}
              className="w-full aspect-[2/3] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};
export default Home;