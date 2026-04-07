import Navbar from '../components/Navbar';

const Contact = () => (
  <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
    <Navbar />
    <div className="pt-24 sm:pt-28 md:pt-32 px-4 sm:px-6 lg:px-12 max-w-md mx-auto pb-12">
      <h2 className="text-3xl sm:text-4xl font-serif mb-6 sm:mb-10">Get in touch.</h2>
      <form className="space-y-4 sm:space-y-6">
        <input type="text" placeholder="Name" className="w-full border-b border-black dark:border-gray-500 py-2 focus:outline-none bg-transparent text-black dark:text-white placeholder:text-gray-500" />
        <input type="email" placeholder="Email" className="w-full border-b border-black dark:border-gray-500 py-2 focus:outline-none bg-transparent text-black dark:text-white placeholder:text-gray-500" />
        <textarea placeholder="Message" className="w-full border-b border-black dark:border-gray-500 py-2 focus:outline-none bg-transparent text-black dark:text-white placeholder:text-gray-500" rows="4"></textarea>
        <button className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 py-3 uppercase text-xs tracking-widest hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition">Send</button>
      </form>
    </div>
  </div>
);
export default Contact;