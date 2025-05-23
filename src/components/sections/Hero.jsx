import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import profileImage from "../../public/images/profileimagevamsi.jpeg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-label="Introduction Section"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 -z-10"></div>

      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-10 -right-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/30 rounded-full filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-purple-200 dark:bg-purple-900/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-10 right-1/3 w-60 h-60 bg-teal-200 dark:bg-teal-900/30 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10 text-center">
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <img
            src={profileImage}
            alt="Vamsi Gangula Profile"
            className="mx-auto w-32 h-32 md:w-52 md:h-52 rounded-full shadow-lg border-2 border-blue-600 dark:border-blue-400"
            loading="lazy"
            width={160}
            height={160}
          />

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6 mb-4">
            <span className="block">Hi, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Vamsi Gangula
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            A passionate{" "}
            <span className="font-semibold text-blue-600 dark:text-blue-400">
              Full Stack Developer
            </span>{" "}
            crafting beautiful, functional web experiences.
          </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
  {['View My Work', 'Experience', 'Contact Me'].map((text, idx) => (
    <a
      key={text}
      href={`#${text.toLowerCase().replace(/ /g, '')}`}
      className={`px-6 py-3 rounded-lg shadow-lg font-medium transition-all duration-300 transform hover:-translate-y-1 ${
        text === 'Contact Me'
          ? 'bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 border border-gray-200 dark:border-gray-700 hover:shadow-xl'
          : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-xl'
      } min-w-[140px] flex justify-center`}
    >
      {text}
    </a>
  ))}
</div>

        </div>

        <button
          onClick={handleScrollDown}
          className={`absolute bottom-8 animate-bounce p-2 rounded-full bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-opacity duration-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Scroll down to About section"
        >
          <ArrowDown className="text-blue-600 dark:text-blue-400" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
