import icGoto from "../assets/ic-github.webp";
import { appStrings, myData } from "../data/Data";

export default function Proyects() {
  return (
    <div className="overflow-x-hidden w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {myData.myProyects.map((project, index) => (
        <a
          key={index}
          className="h-auto max-w-md mx-auto bg-green-100/20 shadow-lg rounded-xl overflow-hidden max-md:w-full"
        >
          <div className="p-6">
            <div className="flex flex-row items-start justify-between mb-4">
              <img
                className="w-12 h-12"
                src={project.icon}
                alt={`${project.name} icon`}
              />
              <a
                className="flex items-center text-sm hover:bg-green-300 transition-colors rounded-full"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="h-6"
                  src={icGoto}
                  alt={appStrings.gotoRepo}
                />
              </a>
            </div>

            <h3 className="font-semibold text-xl mb-2">{project.name}</h3>
            <p className="text-sm mb-4">{project.description}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
