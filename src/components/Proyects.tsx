import icReact from "../assets/ic-react.webp";
import icAndroid from "../assets/ic-android.webp";
import icGoto from "../assets/ic-goto.webp";

export default function Proyects() {
  const proyects = [
    {
      name: "Este portafolio",
      description: "Hecho con React y TailwindCSS.",
      icon: icReact,
      link: "https://github.com/juanmadev5/me",
    },
    {
      name: "Imagify",
      description: "App para buscar imágenes de Unsplash con Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      name: "Express Task+",
      description:
        "App de gestión de tareas con autenticación usando React y Firebase.",
      icon: icReact,
      link: "https://github.com/juanmadev5/express-task-plus",
    },
    {
      name: "TicTacToe",
      description:
        "Juego clásico con una interfaz simple usando Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/TicTacToe",
    },
    {
      name: "ToDo Express",
      description: "App sencilla para gestionar tareas con Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/ToDoExpress",
    },
  ];

  return (
    <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {proyects.map((project, index) => (
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
                alt="Ir al repositorio del proyecto"
              />
              Ver en GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
