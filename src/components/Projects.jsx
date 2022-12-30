import React from "react";
import data from "../data/data.js";
import "./Projects.css";

const Projects = () => {
  // projects file
  const project = data;
  // setProject(data);

  return (
    <section id="projects" className="px-5 lg:px-48">
      {project.map((items, index) => (
        <div className="project rounded-xl grid md:grid-cols-2 grid-cols-1 p-9 bg-white mt-5 md:mt-48">
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
            <button className="btn">See Project</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
