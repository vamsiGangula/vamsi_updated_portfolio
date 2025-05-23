import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Portfolio
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-md">
              Creating beautiful, functional websites and applications with a focus on user experience.
            </p>
          </div>

          <div className="flex space-x-4">
            <SocialLink href="https://github.com/vamsiGangula" icon={<Github size={20} />} label="GitHub" />
            <SocialLink href="https://www.linkedin.com/in/vamsi-gangula-5786b822b/" icon={<Linkedin size={20} />} label="LinkedIn" />
            <SocialLink href="mailto:vamsigangula9133@gmail.com" icon={<Mail size={20} />} label="Email" />
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            © {currentYear} Vamsi Portfolio. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            Designed and built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 shadow-sm hover:shadow-md transition-all duration-300"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;
