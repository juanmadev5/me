import composeIcon from "/ic-compose.webp";
import flutterIcon from "/ic-flutter.webp";
import reactIcon from "/ic-react.webp";
import tailwindIcon from "/ic-tailwindcss.webp";
import aspnetIcon from "/ic-dotnet.webp";
import icAndroid from "/ic-android.webp";
import icNode from "/ic-node.webp";
import icAstro from "/ic-astro.webp";
import icExpress from "/ic-express.webp";
import icPython from "/ic-python.webp";
import icCode from "/ic-code.webp";
import icJs from "/ic-js.webp";
import icKotlin from "/ic-kotlin.webp";
import instagramIcon from "/ic-instagram.webp";
import githubIcon from "/ic-github.webp";
import linkedinIcon from "/ic-linkedin.webp";
import contactMe from "/ic-contactme.webp";

export const data = {
  devName: "JM Dev",
  fullName: "Juan Manuel Velázquez",
  headerDescription: "Técnico Informático | Desarrollador Android | Desarrollador Web Frontend",
  profilePhoto:
    "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
  location: "Ciudad de Limpio, Paraguay",
  aboutMeDescription:
    "Apasionado por crear soluciones digitales funcionales y atractivas. Transformo ideas en aplicaciones y sitios web que destacan por su diseño y rendimiento. 🚀",
  myStack: [
    { name: "Android Jetpack Compose", icon: composeIcon },
    { name: "Kotlin", icon: icKotlin },
    { name: "Node.js", icon: icNode },
    { name: "React", icon: reactIcon },
    { name: "AstroJS", icon: icAstro },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "JS", icon: icJs },
    { name: "Python", icon: icPython },
  ],
  myProyects: [
    {
      name: "CodeCollection",
      description: "Repositorio donde voy dejando codigos de demostración y scripts en diferentes lenguajes de programación que pueden ayudar a solucionar algún problema o aprender algo nuevo.",
      icon: icCode,
      link: "https://github.com/juanmadev5/CodeCollection",
    },
    {
      name: "Este portafolio",
      description: "Desarrollado con Vite + React, TailwindCSS y TypeScript.",
      icon: reactIcon,
      link: "https://github.com/juanmadev5/me",
    },
    {
      name: "API de Sistema de Inventario",
      description: "Una API de control de inventario sencilla desarrollado con ExpressJS.",
      icon: icExpress,
      link: "https://github.com/juanmadev5/inventory-system-api",
    },
    {
      name: "API de Información Aleatoria",
      description: "Una API simple que devuelve información aleatoria. Desarrollado con ASP.NET Core y listo para usar en Docker.",
      icon: aspnetIcon,
      link: "https://github.com/juanmadev5/randominfo",
    },
    {
      name: "LearnWithMe",
      description: "Un ejemplo de un blog, desarrollado con AstroJS y TailwindCSS.",
      icon: icAstro,
      link: "https://github.com/juanmadev5/learn-with-me",
    },
    {
      name: "Imagify",
      description: "Aplicación Android para buscar imágenes de Unsplash usando su API, desarrollado con Kotlin y Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      name: "Weather",
      description:
        "Una simple aplicación multiplataforma del clima que usa la API de openweathermap, desarrollado con Flutter.",
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