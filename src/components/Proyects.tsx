import icGoto from "../assets/ic-goto.webp";
import { appStrings, myData } from "../data/Data";

export default function Proyects() {
  return (
    <div className="overflow-x-hidden w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {myData.myProyects.map((project, index) => (
        <div
          key={index}
          className="h-auto max-w-md mx-auto bg-gray-900 shadow-lg rounded-xl overflow-hidden transform transition duration-500 md:hover:scale-105 hover:shadow-2xl max-md:w-full"
        >
          <div className="p-6">
            <img
              className="w-12 h-12 mb-4"
              src={project.icon}
              alt={`${project.name} icon`}
            />
            <h3 className="font-semibold text-xl text-white mb-2">
              {project.name}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <a
              className="inline-flex items-center text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="w-4 h-4 mr-2 invert"
                src={icGoto}
                alt={appStrings.gotoRepo}
              />
              {appStrings.seeOnGH}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
