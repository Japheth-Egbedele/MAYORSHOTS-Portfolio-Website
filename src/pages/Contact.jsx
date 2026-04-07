import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OLogo from '/O.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "9f70692c-4862-4349-b5bc-636d67a4868f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Navbar />

      <div className="pt-20 sm:pt-24 md:pt-28 px-4 sm:px-6 lg:px-12 max-w-xl mx-auto pb-12">
        {/* O Logo at top */}
        <div className="flex justify-center mb-6">
          <img src={OLogo} alt="Mayor Shots" className="h-16 w-auto opacity-80" />
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-3">
            Get in touch
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
            Let&apos;s create something beautiful together
          </p>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Name Field */}
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="w-full border-b-2 border-gray-300 dark:border-gray-600 py-3 px-1 focus:outline-none focus:border-red-600 bg-transparent text-black dark:text-white placeholder:text-gray-400 transition-colors"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="w-full border-b-2 border-gray-300 dark:border-gray-600 py-3 px-1 focus:outline-none focus:border-red-600 bg-transparent text-black dark:text-white placeholder:text-gray-400 transition-colors"
            />
          </div>

          {/* Message Field */}
          <div className="relative">
            <textarea
              name="message"
              required
              placeholder="Your Message"
              rows="5"
              className="w-full border-b-2 border-gray-300 dark:border-gray-600 py-3 px-1 focus:outline-none focus:border-red-600 bg-transparent text-black dark:text-white placeholder:text-gray-400 resize-none transition-colors"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-12 py-4 uppercase text-xs font-bold tracking-[0.2em] hover:bg-red-600 dark:hover:bg-red-600 dark:hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </div>

          {/* Result Message */}
          {result && (
            <div className={`text-center text-sm py-3 px-4 rounded ${result.includes('successfully') ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'}`}>
              {result}
            </div>
          )}
        </form>

      </div>
      <Footer />
    </div>
  );
};

export default Contact;