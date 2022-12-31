import React from "react";
import data from "../data/data.js";
import "./Projects.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
import { motion } from "framer-motion";

const Projects = () => {
  // projects file
  const project = data;
  // setProject(data);

  return (
    <section id="projects" className="px-5 pb-5 lg:px-48">
      {project.map((items, index) => (
        <motion.div
          className="project rounded-xl grid md:grid-cols-2 grid-cols-1 p-9 bg-white mt-5 md:mt-48"
          data-aos="fade-up"
          data-aos-duration="3000"
          whileHover={{ scale: 1.1 }}
        >
          <div key={index} className="project-image">
            <img src={items.image} alt="project-image" />
          </div>
          <div className="project-details md:px-10 py-5">
            <h2 className="text-[#091E42] font-black text-5xl">{items.name}</h2>
            <p className="description text-xl pt-5">{items.description}</p>
            <div className="mt-4 flex">
              {items.skills.map((skill) => (
                <span className="p-2 text-base bg-[#EBEBFF] text-[#6070FF] m-2 rounded-xl">
                  {skill}
                </span>
              ))}
            </div>
            <div>
              <motion.button
                className="btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => null}
              >
                See Project
              </motion.button>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
