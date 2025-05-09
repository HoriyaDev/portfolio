import { motion } from 'framer-motion';
import { FaCode, FaDatabase, FaChartLine, FaBrain } from 'react-icons/fa';

const skills = [
  {
    icon: <FaCode className="w-6 h-6 text-apple-blue" />,
    title: "HTML & CSS",
    description: "PProficiency in creating structured, well-styled, and responsive layouts."
  },
  {
    icon: <FaDatabase className="w-6 h-6 text-apple-blue" />,
    title: "JavaScript",
    description: "Expertise in adding interactivity and dynamic functionality to web pages."
  },
  {
    icon: <FaChartLine className="w-6 h-6 text-apple-blue" />,
    title: "React js",
    description: "Skilled in building modular, scalable, and dynamic user interfaces."
  },
  {
    icon: <FaBrain className="w-6 h-6 text-apple-blue" />,
    title: "Tailwind CSS",
    description: "Efficient in designing responsive and modern UIs with utility-first CSS."
  }
];

const About = () => (
  <section id="about" className="bg-apple-white text-apple-black py-12 sm:py-20">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center mb-8 sm:mb-16"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">About <span className="text-apple-blue">Me</span></h2>
        <p className="text-apple-gray text-base sm:text-xl max-w-3xl mx-auto px-4">
         "Front-End Developer skilled in building responsive, user-friendly web applications with a strong focus on design, performance, and modern web technologies."
        </p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-white rounded-xl shadow p-4 sm:p-6 flex items-start gap-4"
          >
            <div className="mt-1">{skill.icon}</div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-apple-gray text-sm sm:text-base">{skill.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default About; 