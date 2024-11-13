import composeIcon from "../assets/ic-compose.webp";
import flutterIcon from "../assets/ic-flutter.webp";
import reactIcon from "../assets/ic-react.webp";
import tsIcon from "../assets/ic-ts.webp";
import tailwindIcon from "../assets/ic-tailwindcss.webp";
import kotlinIcon from "../assets/ic-kotlin.webp";
import dartIcon from "../assets/ic-dart.webp";
import sqlIcon from "../assets/ic-sql.webp";
import icReact from "../assets/ic-react.webp";
import icAndroid from "../assets/ic-android.webp";
import icApi from "../assets/ic-api.webp";
import instagramIcon from "../assets/ic-instagram.webp";
import githubIcon from "../assets/ic-github.webp";
import linkedinIcon from "../assets/ic-linkedin.webp";
import contactMe from "../assets/ic-contactme.webp";

export const myData = {
  devName: "JM Dev",
  fullName: "Juan Manuel Velázquez",
  headerDescription: "Desarrollador Android y Web",
  profilePhoto:
    "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
  location: "Ciudad de Limpio, Paraguay",
  aboutMeDescription:
    "Estudiante de Ingeniería Informática y Técnico en Informática, desarrollador Android y Web. Con más de 2 años de experiencia en proyectos personales, me enfoco en crear soluciones eficientes y mejorar la experiencia del usuario usando tecnologías modernas.",
  myStack: [
    { name: "Jetpack Compose", icon: composeIcon },
    { name: "Flutter", icon: flutterIcon },
    { name: "React", icon: reactIcon },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "Dart", icon: dartIcon },
    { name: "Kotlin", icon: kotlinIcon },
    { name: "MySQL", icon: sqlIcon },
    { name: "TypeScript", icon: tsIcon },
  ],
  myProyects: [
    {
      name: "Este portafolio",
      description: "Hecho con React y TailwindCSS.",
      icon: icReact,
      link: "https://github.com/juanmadev5/me",
    },
    {
      name: "Imagify",
      description:
        "App para buscar imágenes de Unsplash con Jetpack Compose.",
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
      name: "API de Control de Inventario",
      description: "Una API sencilla para el control de inventarios, desarrollado con ExpressJS.",
      icon: icApi,
      link: "https://github.com/juanmadev5/inventory-system-api",
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
    {
      name: "OnePiece API Example",
      description:
        "Obtén información de los personajes de OnePiece por medio de una API",
      icon: flutterIcon,
      link: "https://github.com/juanmadev5/onepieceapiexample",
    },
    {
      name: "Random Words",
      description: "Obtén palabras aleatorias desde una API",
      icon: flutterIcon,
      link: "https://github.com/juanmadev5/flutter-random-words",
    },
  ],
  socialLinks: [
    {
      name: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/itz_juanmaa?igsh=MXBsY3B1c3NqbjV6NQ==",
    },
    {
      name: "GitHub",
      icon: githubIcon,
      link: "https://github.com/juanmadev5",
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/juan-manuel-vel%C3%A1zquez-ba8a342ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Contactame",
      icon: contactMe,
      link: "#contact_section",
    },
  ],
}
export const appStrings = {
  title: `Portafolio de ${myData.devName}`,
  landingTitle: "Servicios",
  aboutMeDesc: "Acerca de mi",
  technologiesDesc: "Tecnologías que utilizo",
  proyectsDesc: "Mis Proyectos",
  contactMeDesc: "Contáctame",
  iconLocationAlt: "Icono de ubicacion",
  gotoRepo: "Ir al repositorio del proyecto",
  seeOnGH: "Ver en GitHub",
  alertSended:
    "¡Mensaje enviado exitosamente. Te responderé lo más rápido posible!",
  alertError: "Hubo un problema al enviar el mensaje. Intenta nuevamente.",
  serviceId: import.meta.env.VITE_EJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EJS_TEMPLATE_ID,
  userId: import.meta.env.VITE_EJS_USER_ID,
  contactDesc:
    "¿Tienes un proyecto en mente? ¡No dudes en contactarme y hagamos que esa idea cobre vida!",
  formName: "Nombre",
  formNamePH: "Tu nombre",
  formEmail: "Correo Electrónico",
  formEmailPH: "Tu correo",
  formMSJ: "Mensaje",
  formMSJPH: "Tu mensaje",
  sendBtn: "Enviar"
}