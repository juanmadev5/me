import { useState } from "react";
import icArrowUp from "/ic-arrow-up.svg";
import icArrowDown from "/ic-arrow-down.svg";
import { strings } from "../app/Strings";
import { PortfolioDataModel } from "../model/PortfolioDataModel";

type ProjectsProps = Pick<PortfolioDataModel, "myProjects">;

export default function Projects({ myProjects: myProjects }: ProjectsProps) {
  const [expanded, setExpanded] = useState(null);

  //@ts-ignore
  const toggleExpand = (index) => {
    setExpanded((prev) => (prev === index ? null : index));
  };

  return (
    <div className="flex flex-col mt-6 p-2 gap-4 rounded-2xl mx-2">
      {myProjects.map((project, index) => {
        const isExpanded = expanded === index;
        return (
          <div
            key={index}
            className="p-4 rounded-2xl border-2 border-onSecondary"
          >
            <div className="flex items-center justify-between">
              <div className="flex flex-col max-w-64 md:max-w-full sm:max-w-full">
                <h3 className="text-sm text-onSurface text-opacity-80">
                  {project.name}
                </h3>

                <div className="flex flex-row mt-2">
                  {project.techList.map((techIcon, index) => (
                    <img
                      key={index}
                      className="mr-2 mb-1 mt-2"
                      width="28px"
                      height="28px"
                      src={techIcon}
                      alt={`${project.name} icon`}
                    />
                  ))}
                </div>
              </div>

              <button
                onClick={() => toggleExpand(index)}
                aria-label={strings.descriptionButton}
                className=" bg-onSecondary rounded-xl w-8 h-8 flex items-center justify-center"
              >
                {isExpanded ? (
                  <img className="w-4 h-4 invert" src={icArrowUp} />
                ) : (
                  <img className="w-4 h-4 invert" src={icArrowDown} />
                )}
              </button>
            </div>

            <div
              className={`transition-[max-height] duration-500 ease-in-out overflow-hidden`}
              style={{
                maxHeight: isExpanded ? "1000px" : "0px",
              }}
            >
              <div className="flex flex-row w-full justify-between mt-6 gap-2">
                {project.screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  className="rounded-lg overflow-scroll"
                  src={screenshot}
                  alt={`${project.name} icon`}
                />
              ))}
              </div>
              
              <div className="mt-6">
                <p className="text-sm mb-2 text-onSurface text-opacity-80">
                  {project.description}
                </p>
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
