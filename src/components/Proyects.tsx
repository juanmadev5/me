import icReact from "../assets/ic-react.webp";
import icAndroid from "../assets/ic-android.webp";
import icGoto from "../assets/ic-goto.webp";

export default function Proyects() {
  const proyects = [
    "Este portafolio",
    "Imagify",
    "Express Task+",
    "TicTacToe",
    "ToDo Express",
  ];
  const prDescription = [
    "Desarrollado con React y TailwindCSS",
    "Aplicación que te permite obtener imagenes de unsplash.com. Tecnologías utilizadas: Jetpack Compose, Kotlin, MVVM, Dagger-Hilt, Retrofit, DataStore, OkHttp, Coil Image y Proguard Rules.",
    "Sitio web que te permite crear tareas a hacer, permite registrarse y iniciar sesión para guardar las tareas. Tecnologías utilizadas: Vite + React, TailwindCSS, TypeScript, Firebase Login y Firebase Realtime Database.",
    "Juego TicTacToe, destaca por una interfaz intuitiva y lógica de juego fluida. Tecnologías utilizadas: Jetpack Compose, Kotlin, ViewModel.",
    "Sencilla aplicación que te permite guardar/borrar tareas a realizar. Tecnologías utilizadas: Jetpack Compose, Kotlin, Dagger-Hilt, ViewModel, Android Room.",
  ];

  const prIcons = [icReact, icAndroid, icReact, icAndroid, icAndroid];

  const prLinks = [
    "https://github.com/juanmadev5/me",
    "https://github.com/juanmadev5/Imagify",
    "https://github.com/juanmadev5/express-task-plus",
    "https://github.com/juanmadev5/TicTacToe",
    "https://github.com/juanmadev5/ToDoExpress",
  ];

  return (
    <div className="w-full h-auto grid grid-cols-1 lg:grid-cols-3 gap-4 max-md:grid-cols-1 max-md:flex max-md:flex-col items-center">
      {proyects.map((name, index) => (
        <div
          key={index}
          className="h-[364px] max-md:h-auto max-md:w-full my-3 mx-3 rounded-2xl p-3 bg-gradient-to-tr from-emerald-800 to-sky-900 transition-transform duration-300 transform hover:scale-[1.03] flex flex-col justify-between"
        >
          <div>
            <img
              className="mb-3 w-8 h-8"
              src={prIcons[index]}
              alt={`${name} icon`}
            />
            <p className="font-bold text-white">{name}</p>
            <p className="text-white text-sm mt-2">{prDescription[index]}</p>
          </div>
          <a
            className="text-white rounded-xl mt-4 border-[1px] max-md:w-32 hover:border-cyan-300 hover:border-[2px]"
            href={prLinks[index]}
          >
            <div className="w-auto flex flex-row items-center p-1">
              <img
                className="invert w-6 h-6"
                src={icGoto}
                alt="Ir al repositorio del proyecto"
              />
              <p className="ml-1 text-xs">Ver en GitHub</p>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}
