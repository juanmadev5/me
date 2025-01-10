import { useState } from "react";
import { data } from "../app/Data";
import icArrowUp from "/ic-arrow-up.svg";
import icArrowDown from "/ic-arrow-down.svg";

export default function Proyects() {
  const [expanded, setExpanded] = useState(null);

  //@ts-ignore
  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="w-full flex flex-col mt-6 p-2 gap-4">
      {data.myProyects.map((project, index) => {
        const isExpanded = expanded === index;
        return (
          <div
            key={index}
            className="flex flex-col p-2 rounded-2xl text-pretty"
          >
            <div className="flex flex-row items-center">
              <img
                className="h-6 m-2 mt-1"
                src={project.icon}
                alt={`${project.name} icon`}
              />
              <h3 className="text-sm ml-2">{project.name}</h3>
              <button
                onClick={() => toggleExpand(index)}
                className="ml-auto bg-sky-700 text-white text-xs px-2 py-2 rounded-lg hover:bg-sky-800 transition"
              >
                {isExpanded ? <img className="w-4 h-4 invert" src={icArrowUp}></img> : <img className="w-4 h-4 invert" src={icArrowDown}></img>}
              </button>
            </div>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: isExpanded ? "200px" : "0",
              }}
            >
              <div className="m-2">
                <p className="text-sm mb-2">{project.description}</p>
                <a
                  href={project.link}
                  className="transition-all text-sm text-sky-400 hover:font-semibold"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver en GitHub
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
