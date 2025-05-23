import { useState, useEffect } from 'react';

const skills = [
  // Frontend skills
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 85, category: 'frontend' },
  { name: 'Angular', level: 70, category: 'frontend' },
  { name: 'JavaScript (ES6+)', level: 92, category: 'frontend' },
  { name: 'TypeScript', level: 88, category: 'frontend' },
  { name: 'HTML5', level: 95, category: 'frontend' },
  { name: 'CSS3', level: 90, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Material-UI', level: 90, category: 'frontend' },
  { name: 'Jquery', level: 75, category: 'frontend' },

  // Backend skills
  { name: 'Node.js', level: 95, category: 'backend' },
  { name: 'Ejs', level: 80, category: 'backend' },
  { name: 'Express.js', level: 95, category: 'backend' },
  { name: '.NET Core', level: 60, category: 'backend' },
  { name: 'PostgreSQL', level: 90, category: 'data base' },
  { name: 'MongoDB', level: 90, category: 'data base' },
  { name: 'MySQL', level: 90, category: 'data base' },

  // Tools and others
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'AWS', level: 75, category: 'tools' },
  { name: 'Azure', level: 70, category: 'tools' },
  { name: 'Swagger/OpenAPI', level: 90, category: 'tools' },
  { name: 'Postman', level: 90, category: 'tools' },
  { name: 'Figma', level: 70, category: 'tools' },
];

const Skills = () => {
  const [category, setCategory] = useState('all');
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

    const section = document.getElementById('skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const filteredSkills =
    category === 'all' ? skills : skills.filter((skill) => skill.category === category);

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-blue-600 dark:bg-blue-400 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
            {['all', 'frontend', 'backend', 'tools', 'data base'].map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  category === cat
                    ? 'bg-blue-600 text-white'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill, index, isVisible }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{skill.name}</h3>
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-gradient-to-r from-blue-600 to-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${skill.level}%` : '0%',
            transitionDelay: `${index * 100 + 300}ms`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
