import { useState, useEffect } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import mrvImage from "../../public/images/mrv_admin_image.png";
import pwdImage from "../../public/images/pwd_admin_image.png"; 
import mrvToolImage from "../../public/images/mrvtool_admin_image.png";
import hrPortalImage from "../../public/images/hrportal_admin_image.png";
import companyImage from "../../public/images/company_mangement_admin.png";
import hostelImage from "../../public/images/hostel_admin_image.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    projectName: "Almond House Sweets",
    description:
      "A fully responsive e-commerce platform built with React, Redux, Razorpay for payments. Features include product filtering, user authentication, and a shopping cart.",
    image:
      "https://almondhouse.com/cdn/shop/files/Almond_House_July_20247440.jpg?v=1723201171&width=700",
    tags: [
      "React.js",
      "Redux",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "Tailwind CSS",
      "Material UI",
    ],
    demoUrl: "https://almondhouse.com/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    projectName: "Sree MahaLakshmi Sweets",
    description:
      "A productivity application for managing tasks and projects. Features include drag-and-drop task organization, reminders, and team collaboration tools.",
    image:
      "https://www.shreemahalakshmisweets.com/images/webp/Festivedesktoppecials.webp",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "Node.js",
      "Material UI",
    ],
    demoUrl: "https://www.shreemahalakshmisweets.com/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    projectName: "Morning Mist",
    description:
      "A weather application that provides current conditions and forecasts. Integrates with the OpenWeather API and features location detection.",
    image: "https://morningmist.in/static/webp/sectiononebanner.webp",
    tags: [
      "React.js",
      "API Integration",
      "Chart.js",
      "Geolocation",
      "Node.js",
      "Express.js",
    ],
    demoUrl: "https://morningmist.in/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    projectName: "Samsara Diamonds",
    description:
      "An analytics dashboard for social media platforms. Visualizes engagement metrics and provides insights for content strategy.",
    image: "https://samsaradiamonds.com/static/images/store-banner-bg.png",
    tags: [ "Express.js", "OAuth", "Node.js"],
    demoUrl: "https://samsaradiamonds.com/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 5,
    title: "E-Commerce Platform",
    projectName: "TrueJoy Customer",
    description:
      "An analytics dashboard for social media platforms. Visualizes engagement metrics and provides insights for content strategy.",
    image:
      "https://truejoy.ai/images/png/bannerimg.png",
    tags: [
     "Aws",
     "Azure",
      "Express.js",
      "OAuth",
      "Node.js",
      "React.js",
      "MongoDB",
    ],
    demoUrl: "https://truejoy.ai/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 6,
    title: "Farmer Management System",
    projectName: "Monitoring and Reporting of Vaccination (MRV)",
    description:
      "An agricultural application for managing farmer vaccination data with online/offline functionality.",
    image: mrvImage,
    tags: ["Angular", "Node.js", "Express.js", "PostgreSQL", "MongoDB"],
    demoUrl: "https://mrv.drreddysfoundation.org/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 7,
    title: "Seed Grant Management System",
    projectName: "PWD Self Employment Portal",
    description:
      "A platform to support self-employment for persons with disabilities, integrating Aadhaar verification.",
    image:
     pwdImage,
    tags: [
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Material UI",
    ],
    demoUrl: "https://pwdselfemploymentportal.mydrf.org/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 8,
    title: "Product",
    projectName: "Acknowledgement Tool",
    description:
      "A multi-level product acknowledgment system for tracking delivery and stock reassignment with hierarchical workflow.",
    image:
     mrvToolImage,
    tags: ["React.js", "Redux", "Node.js", "PostgreSQL", "Tailwind CSS"],
    demoUrl: "https://mrvtool.drreddysfoundation.org/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 9,
    title: "Product",
    projectName: "AI-Powered Automatic Interview System",
    description:
      "A fully automated AI interview system that uses OpenAI for question generation, video/audio extraction, and AI-based feedback.",
    image:
     hrPortalImage,
    tags: ["React.js", "Redux", "Node.js", "OpenAI API", "Material UI"],
    demoUrl: "https://hrportal.mydrf.org/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 10,
    title: "Product",
    projectName: "Hostel Management System",
    description:
      "A hostel booking and payment management system with vacancy tracking and Razorpay-based payments.",
    image:
      hostelImage,
    tags: [
      "React.js",
      "Next.js",
      "Redux",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
      "Tailwind CSS",
      "Bootstrap",
    ],
    demoUrl: "https://hrportal.mydrf.org/",
    githubUrl: "https://github.com/vamsiGangula",
  },
  {
    id: 11,
    title: "Product",
    projectName: "Company Management System",
    description:
      "A system for employee onboarding, task management, and attendance tracking, with a React.js admin panel and planned React Native app.",
    image:
     companyImage,
    tags: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
    ],
    demoUrl: "https://hrportal.mydrf.org/",
    githubUrl: "https://github.com/vamsiGangula",
  },
];

const Projects = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const uniqueTags = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.tags))),
  ];

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

    const section = document.getElementById("projects");
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.tags.includes(activeFilter))
      );
    }
  }, [activeFilter]);

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My{" "}
            <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was carefully crafted
            to solve real-world problems.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === tag
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index, isVisible }) => {
  return (
    <div
      className={`group bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ${
        isVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <div>
            <h4 className="text-white text-xl font-bold">
              {project.projectName}
            </h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs font-medium bg-blue-600/80 text-white rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
          {project.title}
        </h3>
        <h5 className="text-md font-bold mb-2 text-gray-900 dark:text-white">
          {project.projectName}
        </h5>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex gap-4">
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            Live Demo
            <ArrowUpRight size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-gray-700 dark:text-gray-300 font-medium hover:underline"
          >
            Code
            <Github size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
