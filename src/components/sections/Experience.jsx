import { Link2 } from 'lucide-react';
import { useEffect, useState } from 'react';

const vreedhiSummary = `I am a results-driven Full-Stack Developer with over 3+ years of
experience designing and building secure, scalable, and high-performance web applications. Skilled in modern technologies such as React, Next.js, Angular, Node.js, and .NET Core. I specialize in delivering responsive, user-friendly interfaces combined with robust backend services and efficient database management.`;

// Sample AXLR past company data
const pastExperiences = [
  {
    company: 'Vreedhi Impact Technologies',
    role: 'Full Stack Developer',
    duration: 'March 2024 - Present',
    responsibilities: [
      'Developed AI-powered HR platforms.',
      'Built multi-vendor e-commerce solutions.',
      'Improved app performance and UI/UX design.',
    ],
    link:"https://vreedhitechnologies.com/"
  },
  {
    company: 'AXLR DATA PVT LTD | Software Solutions.',
    role: 'Frontend Developer',
    duration: 'Jun 2020 - Dec 2021',
    responsibilities: [
      'Implemented responsive web designs using React and Tailwind CSS.',
      'Collaborated with backend teams to integrate RESTful APIs.',
      'Maintained code quality with unit and integration tests.',
    ],
    link:"https://www.axlrdata.com/"
  },
];

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    const section = document.getElementById('experience');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {vreedhiSummary}
          </p>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left: Vreedhi Summary (can add more details or highlight here) */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-6 text-blue-600 dark:text-blue-400">
              Professional Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {vreedhiSummary}
            </p>
          </div>

          {/* Right: AXLR Past Experience Cards */}
          <div className="space-y-8">
            {pastExperiences.map(({ company, role, duration, responsibilities }, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <h4 className="text-lg font-bold mb-1 text-gray-900 dark:text-white">
                  {company}
                </h4>
                <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{role}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{duration}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <a
                  href={pastExperiences[idx].link}
                  target="_blank"
                  title='Visit Company Website'
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                >
                 <span><Link2 /> </span> 
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
