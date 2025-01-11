import composeIcon from "/ic-compose.webp";
import reactIcon from "/ic-react.webp";
import tailwindIcon from "/ic-tailwindcss.webp";
import icAndroid from "/ic-android.webp";
import icAstro from "/ic-astro.webp";
import icPython from "/ic-python.webp";
import icCode from "/ic-code.webp";
import icJs from "/ic-js.webp";
import icKotlin from "/ic-kotlin.webp";
import githubIcon from "/ic-github.webp";
import linkedinIcon from "/ic-linkedin.webp";
import contactMe from "/ic-contactme.webp";

export const data = {
  devName: "JM Dev",
  fullName: "Juan Manuel Velázquez",
  headerDescription:
    "Técnico Informático | Desarrollador Android | Desarrollador Web Frontend",
  profilePhoto:
    "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
  location: "Ciudad de Limpio, Paraguay",
  aboutMeDescription:
    "Soy un desarrollador apasionado por crear aplicaciones y sitios web modernos, intuitivos y funcionales. Mi objetivo es combinar diseño atractivo con tecnología para brindar experiencias excepcionales a los usuarios.",
  myStack: [
    { name: "Android Jetpack Compose", icon: composeIcon },
    { name: "Kotlin", icon: icKotlin },
    { name: "React", icon: reactIcon },
    { name: "AstroJS", icon: icAstro },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "JS", icon: icJs },
    { name: "Python", icon: icPython },
  ],
  myProyects: [
    {
      name: "CodeCollection",
      description:
        "Repositorio con una colección de scripts y soluciones en varios lenguajes, ideales para aprender y mejorar tus habilidades de programación.",
      icon: icCode,
      link: "https://github.com/juanmadev5/CodeCollection",
    },
    {
      name: "Imagify",
      description:
        "Aplicación Android avanzada para búsqueda y descarga de imágenes desde unsplash.com, desarrollado con Kotlin y Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      name: "Este portafolio",
      description:
        "Este portafolio es una muestra de mis habilidades como desarrollador, incluyendo mis proyectos y experiencias. Desarrollado con React, TailwindCSS y TypeScript. Diseño: Material You",
      icon: reactIcon,
      link: "https://github.com/juanmadev5/me",
    },
    {
      name: "LearnWithMe",
      description:
        "Blog desarrollado con AstroJS, demostrando mis habilidades en el desarrollo de aplicaciones modernas y optimizadas con una arquitectura sin servidor.",
      icon: icAstro,
      link: "https://github.com/juanmadev5/learn-with-me",
    },
  ],
  socialLinks: [
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
