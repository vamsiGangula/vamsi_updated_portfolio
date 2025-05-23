import { useState, useEffect } from "react";
import { Code, Briefcase, GraduationCap, FileUser } from "lucide-react";
const About = () => {
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

    const section = document.getElementById("about");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform -translate-x-8"
            }`}
          >
            <h3 className="text-2xl font-bold mb-4">My Story</h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              I am a results-driven Full-Stack Developer with over 3+ years of
              experience designing and building secure, scalable, and
              high-performance web applications. Skilled in modern technologies
              such as React, Next.js, Angular, Node.js, and .NET Core, I
              specialize in delivering responsive, user-friendly interfaces
              combined with robust backend services and efficient database
              management (PostgreSQL, MongoDB, MySQL).
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Throughout my career, I have contributed to diverse projects
              ranging from AI-powered HR platforms to multi-vendor e-commerce
              solutions and enterprise workflow systems, consistently improving
              application performance and user experience. I have a strong
              foundation in both front-end and back-end development, with a keen
              eye for UI/UX design principles, ensuring that my products strike
              the perfect balance between functionality and aesthetics.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              I thrive in Agile team environments and have experience working
              with cloud platforms such as AWS and Azure, incorporating DevOps
              practices to ensure smooth CI/CD pipelines. When I’m not coding, I
              enjoy playing cricket, volleyball, and exploring new strategy
              games like chess.
            </p>
            <div>
              <span onClick={() => window.open("https://pwdse.blob.core.windows.net/pwdse-files/resume/final_resume_vamsi%20(1).pdf??sp=racwdl&st=2024-08-27T05:41:36Z&se=2026-08-27T13:41:36Z&spr=https&sv=2022-11-02&sr=c&sig=66ZYpyLP0bsa41FtPdD7nzAu%2BT8DAqnIFRdEcjacIO0%3D", "_blank")} className="flex items-center justify-end mt-4 text-blue-600 dark:text-blue-400 cursor-pointer">
                <FileUser  className="mr-2 w-8 h-8"/>
                Resume
              </span>
            </div>
          </div>

          <div
            className={`space-y-6 transition-all duration-1000 ease-out delay-300 ${
              isVisible
                ? "opacity-100 transform translate-x-0"
                : "opacity-0 transform translate-x-8"
            }`}
          >
            <ExperienceCard
              icon={<Code className="text-blue-600 dark:text-blue-400" />}
              title="Full-Stack Development"
              duration="2022 - Present"
              description="Building scalable and secure web applications using React, Next.js, Angular, Node.js, Express, and .NET Core. Delivered AI-enabled HR products and multi-vendor e-commerce platforms with optimized performance and high availability."
            />
            <ExperienceCard
              icon={<Briefcase className="text-blue-600 dark:text-blue-400" />}
              title="Database & API Integration"
              duration="2022 - Present"
              description="Designing and optimizing RESTful APIs and database queries with PostgreSQL, MongoDB, and MySQL to improve data analytics and application efficiency by up to 40%."
            />
            <ExperienceCard
              icon={
                <GraduationCap className="text-blue-600 dark:text-blue-400" />
              }
              title="B.Tech"
              duration="2018 - 2021"
              description="Graduated with a strong academic record at Lingaya’s Institute of Management & Technology."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceCard = ({ icon, title, duration, description }) => {
  return (
    <div className="flex bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex-shrink-0 mr-4">
        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-1">{title}</h4>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
          {duration}
        </p>
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default About;
