import { useState } from "react";
import { data } from "../app/Data";
import icArrowUp from "/ic-arrow-up.svg";
import icArrowDown from "/ic-arrow-down.svg";
import { strings } from "../app/Strings";

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  //@ts-ignore
  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col mt-6 p-2 gap-4 rounded-2xl mx-2">
      {data.myProyects.map((project, index) => {
        const isExpanded = expanded === index;
        return (
          <div
            key={index}
            className="flex flex-col p-2 rounded-2xl text-pretty"
          >
            <div className="flex flex-row items-center">
              <img
                className="m-2 mt-1"
                width="24px"
                height="24px"
                src={project.icon}
                alt={`${project.name} icon`}
              />
              <h3 className="text-sm ml-2 text-onSurface">{project.name}</h3>
              <button
                onClick={() => toggleExpand(index)}
                aria-label={strings.descriptionButton}
                className="ml-auto bg-primary text-xs px-2 py-2 rounded-xl hover:bg-secondary transition"
              >
                {isExpanded ? (
                  <img className="w-4 h-4" src={icArrowUp}></img>
                ) : (
                  <img className="w-4 h-4" src={icArrowDown}></img>
                )}
              </button>
            </div>
            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: isExpanded ? "200px" : "0",
              }}
            >
              <div className="m-2 mt-4">
                <p className="text-sm mb-2 text-onSurface">{project.description}</p>
                <a
                  href={project.link}
                  className="transition-all text-sm text-primary hover:font-semibold"
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
