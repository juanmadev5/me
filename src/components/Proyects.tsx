import { myData } from "../data/Data";

export default function Proyects() {
  return (
    <div className="w-full flex flex-col mt-6 p-2 gap-4">
      {myData.myProyects.map((project, index) => (
        <div
          key={index}
          className="flex flex-row border border-sky-700 p-2 rounded-2xl items-center text-pretty"
        >
          <img
            className="w-8 h-8 mx-4"
            src={project.icon}
            alt={`${project.name} icon`}
          />
          <div className="flex flex-col items-start ml-4">
            <h3 className="text-sm mb-2">{project.name}</h3>
            <p className="text-sm mb-4">- {project.description}</p>
            <a href={project.link} className="text-sm text-sky-400">
              Ver en GiHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
