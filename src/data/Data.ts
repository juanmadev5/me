import composeIcon from "../assets/ic-compose.webp";
import flutterIcon from "../assets/ic-flutter.webp";
import reactIcon from "../assets/ic-react.webp";
import tsIcon from "../assets/ic-ts.webp";
import tailwindIcon from "../assets/ic-tailwindcss.webp";
import aspnetIcon from "../assets/ic-dotnet.webp";
import dockerIcon from "../assets/ic-docker.webp";
import icReact from "../assets/ic-react.webp";
import icAndroid from "../assets/ic-android.webp";
import icSupabase from "../assets/ic-supabase.webp";
import instagramIcon from "../assets/ic-instagram.webp";
import githubIcon from "../assets/ic-github.webp";
import linkedinIcon from "../assets/ic-linkedin.webp";
import contactMe from "../assets/ic-contactme.webp";

export const myData = {
  available: "Para proyectos freelance y oportunidades de tiempo completo.",
  devName: "JM Dev",
  fullName: "Juan Manuel Velázquez",
  headerDescription: "Desarrollador Android y Web Full Stack en crecimiento.",
  profilePhoto:
    "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
  location: "Ciudad de Limpio, Paraguay",
  aboutMeDescription:
    "Estudiante de Ingeniería Informática con experiencia en desarrollo Android y Web. Me apasiona aprender nuevas tecnologías y trabajar con herramientas modernas para diseñar soluciones eficientes que marcan la diferencia.",
  myStack: [
    { name: "Jetpack Compose", icon: composeIcon },
    { name: "React", icon: reactIcon },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "TypeScript", icon: tsIcon },
    { name: "Supabase", icon: icSupabase },
  ],
  know: [
    { name: "ASP.NET Core", icon: aspnetIcon },
    { name: "Docker", icon: dockerIcon },
    { name: "Astro", icon: "https://img.icons8.com/nolan/50/astro-js.png" },
    { name: "Flutter", icon: flutterIcon },
    { name: "Python", icon: "https://img.icons8.com/color/48/python--v1.png" },
  ],
  myProyects: [
    {
      name: "Este portafolio",
      description: "Hecho con React y TailwindCSS.",
      icon: icReact,
      link: "https://github.com/juanmadev5/me",
    },
    {
      name: "API de Sistema de Inventario",
      description: "Una API de control de inventario sencilla desarrollado con ExpressJS.",
      icon: "https://img.icons8.com/fluency/50/node-js.png",
      link: "https://github.com/juanmadev5/randominfo",
    },
    {
      name: "Random Info",
      description: "Una API simple que devuelve información aleatoria. Desarrollado con ASP.NET Core y listo para usar en Docker.",
      icon: aspnetIcon,
      link: "https://github.com/juanmadev5/randominfo",
    },
    {
      name: "LearnWithMe",
      description: "Un ejemplo de un blog, desarrollado con AstroJS.",
      icon: "https://img.icons8.com/nolan/50/astro-js.png",
      link: "https://github.com/juanmadev5/learn-with-me",
    },
    {
      name: "Imagify",
      description: "App para buscar imágenes de Unsplash con Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      name: "Weather",
      description:
        "Una simple aplicación del clima que usa la API de openweathermap.",
      icon: flutterIcon,
      link: "https://github.com/juanmadev5/weather",
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
};
export const appStrings = {
  title: `Portafolio de ${myData.devName}`,
  landingTitle: "Servicios",
  aboutMeDesc: "Acerca de mi",
  technologiesDesc: "Tecnologías que más utilizo",
  know: "Tecnologías que utilizo a veces",
  proyectsDesc: "Proyectos destacados",
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
    "Si tienes un proyecto en mente o necesitas asesoría, ¡hablemos! Estoy listo para escuchar tus ideas y ayudarte a llevarlas al siguiente nivel.",
  formName: "Nombre",
  formNamePH: "Tu nombre",
  formEmail: "Correo Electrónico",
  formEmailPH: "Tu correo",
  formMSJ: "Mensaje",
  formMSJPH: "Tu mensaje",
  sendBtn: "Enviar",
};
