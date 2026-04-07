
const Footer = () => (
  <footer className="py-12 px-12 border-t border-gray-100 dark:border-gray-800 mt-20 text-center">
    <p className="text-[10px] uppercase tracking-widest text-gray-400">
      © {new Date().getFullYear()} Mayor Shots Photography
    </p>
    <div className="mt-4 space-x-6 text-[10px] uppercase text-gray-500 dark:text-gray-400">
      <a href="#" className="hover:text-red-600">Instagram</a>
      <a href="#" className="hover:text-red-600">Twitter</a>
    </div>
  </footer>
);
export default Footer;