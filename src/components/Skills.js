import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const technicalSkills = [
    { name: "Angular", level: 90 },
    { name: ".NET", level: 90 },
    { name: "MSSQL", level: 90 },
    { name: "PostgreSQL", level: 90 },
    { name: "React", level: 70 },
    { name: "JavaScript", level: 80 },
    { name: "Java", level: 80 },
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "Node.js", level: 60 },
    { name: "Swift", level: 80 },
    { name: "Flutter", level: 60 },
  ];
  const nonTechnicalSkills = [
    { name: "Leadership", level: 85 },
    { name: "Communication", level: 90 },
    { name: "Problem Solving", level: 80 },
    { name: "Time Management", level: 75 },
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        delay: 0.5,
      },
    },
  };

  return (
    <section className="skills section" id="skills">
      <div className="text-center pt-36">
        <h2 className="text-4xl py-2 text-teal-600 font-extrabold md:text-6xl underline-offset-8">
          Skills
        </h2>
      </div>
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="md:flex md:justify-between">
          <div className="w-full m-1 md:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Technical Skills
            </h3>
            <table className="w-full text-left mb-8">
              <tbody>
                {technicalSkills.map((skill, index) => (
                  <tr key={index.toString()}>
                    <td className="pr-4 text-center">{skill.name}</td>
                    <td className="w-full">
                      <div className="bg-white h-2 rounded-full">
                        <motion.div
                          className="bg-teal-500 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        ></motion.div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full m-1 md:w-1/2">
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Non-Technical Skills
            </h3>
            <table className="w-full text-left mb-8">
              <tbody>
                {nonTechnicalSkills.map((skill, index) => (
                  <tr key={index.toString()}>
                    <td className="pr-4 text-center">{skill.name}</td>
                    <td className="w-full">
                      <div className="bg-white h-2 rounded-full">
                        <motion.div
                          className="bg-teal-500 h-full rounded-full"
                          style={{ width: `${skill.level}%` }}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1 }}
                        ></motion.div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Skills;
