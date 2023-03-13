import React from "react";
import img1 from "../assets/images/Software Project-L2.jpeg";
import img2 from "../assets/images/MSP_Mobile_App.jpg";
import img3 from "../assets/images/MSP_HRIS.jpg";
import img4 from "../assets/images/raas.jpg";
import img5 from "../assets/images/Fit&Furious.jpg";
import img6 from "../assets/images/fyp.png";

function Projects() {
  const projects = [
    {
      title: "Human Resource Management System",
      subtitle: "Second Year Software Project",
      description: "Android ASP.NET MySQL",
      imageUrl: img1,
      demoUrl: "#",
      sourceCodeUrl:
        "https://github.com/pavaramanupriya98/hr-tool-frontend.git",
    },

    {
      title: "Moraspirit Mobile Application (Android)",
      subtitle: "Moraspirit Initiative",
      description: "Java Firebase",
      imageUrl: img2,
      demoUrl:
        "https://play.google.com/store/apps/details?id=com.moraspirit.moraspiritapp&hl=en_US&gl=US",
      sourceCodeUrl: "https://github.com/moraspirit/msp-mobile-app.git",
    },

    {
      title: "Moraspirit Human Resource Information System",
      subtitle: "Moraspirit Initiative",
      description: "Laravel MySQL",
      imageUrl: img3,
      demoUrl: "https://hris.moraspirit.com/home",
      sourceCodeUrl: "https://github.com/moraspirit/msp-hr-website.git",
    },

    {
      title: "Revenue & Arrears Analysis System",
      subtitle: "External Project",
      description: "React JS  Spring Boot  MySQL",
      imageUrl: img4,
      demoUrl: "https://github.com/hException-Technologies/RAAS_Frontend.git",
      sourceCodeUrl:
        "https://github.com/hException-Technologies/RAAS_Frontend.git",
    },

    {
      title: "Fit & Furious Mobile Application (Android)",
      subtitle: "Moraspirit Initiative",
      description: "University Sports",
      imageUrl: img5,
      demoUrl: "https://github.com/moraspirit/Fit-n-Furious.git",
      sourceCodeUrl: "https://github.com/moraspirit/Fit-n-Furious.git",
    },

    {
      title: "Facebook Advertisements Recommendation System",
      subtitle: "Final Year Project",
      description: "Python Machine Learning NLP",
      imageUrl: img6,
      demoUrl: "",
      sourceCodeUrl: "",
    },
  ];

  return (
    <section className="projects section" id="projects">
      <div className="text-center pt-36">
        <h2 className="text-4xl py-2 text-teal-600 font-extrabold md:text-6xl underline-offset-8">
          Projects
        </h2>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              className="bg-white rounded-lg overflow-hidden shadow-lg"
              key={project}
            >
              <img
                className="h-48 w-full object-cover"
                src={project.imageUrl}
                alt={project.title}
              />
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                <h6 className="font-bold">{project.subtitle}</h6>
                <p className="text-gray-700 text-base mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between">
                  <a
                    href={project.demoUrl}
                    className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Demo
                  </a>
                  <a
                    href={project.sourceCodeUrl}
                    className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
