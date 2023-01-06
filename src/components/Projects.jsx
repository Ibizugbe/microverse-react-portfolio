import React from 'react';
import './Projects.css';
import { motion } from 'framer-motion';
import AOS from 'aos';
import data from '../data/data';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Projects = () => {
  // projects file
  const project = data;
  // setProject(data);

  return (
    <section id="projects" className="px-5 pb-5 lg:px-48">
      {project.map((items) => (
        <motion.div
          className="project rounded-xl grid md:grid-cols-2 grid-cols-1 p-9 bg-white mt-5 md:mt-48"
          data-aos="fade-up"
          data-aos-duration="3000"
          whileHover={{ scale: 1.1 }}
          key="1"
        >
          <div className="project-image">
            <img src={items.image} alt="project" />
          </div>
          <div className="project-details md:px-10 py-5">
            <h2 className="text-[#091E42] font-black text-5xl">{items.name}</h2>
            <p className="description text-xl pt-5">{items.description}</p>
            <div className="mt-4 flex">
              {items.skills.map((skill) => (
                <span className="p-2 text-base bg-[#EBEBFF] text-[#6070FF] m-2 rounded-xl" key="2">
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex">
              <a href={items.live} target="_blank" rel="noreferrer">
                <motion.button
                  className="btn"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => null}
                >
                  See Live
                </motion.button>
              </a>

              <a href={items.github} target="_blank" rel="noreferrer">
                <motion.button
                  className="btn ml-5"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => null}
                >
                  See source
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default Projects;
