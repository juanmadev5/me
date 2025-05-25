import composeIcon from "/ic-compose.webp";
import reactIcon from "/ic-react.webp";
import tailwindIcon from "/ic-tailwindcss.webp";
import icAndroid from "/ic-android.webp";
import icAstro from "/ic-astro.webp";
import icPython from "/ic-python.webp";
import icCode from "/ic-code.webp";
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
    {
      name: "Android Jetpack Compose",
      icon: composeIcon,
      moreInfo: "https://developer.android.com/compose",
    },
    { name: "Kotlin", icon: icKotlin, moreInfo: "https://kotlinlang.org/" },
    { name: "React", icon: reactIcon, moreInfo: "https://react.dev/" },
    { name: "AstroJS", icon: icAstro, moreInfo: "https://astro.build/" },
    {
      name: "TailwindCSS",
      icon: tailwindIcon,
      moreInfo: "https://tailwindcss.com/",
    },
    { name: "Python", icon: icPython, moreInfo: "https://www.python.org/" },
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
      name: "Simple WordToPDF (From CodeCollection)",
      description:
        "Script de Python que convierte archivos Word a PDF en segundos.",
      icon: icPython,
      link: "https://github.com/juanmadev5/CodeCollection/blob/main/Python/WordToPDF.py",
    },
    {
      name: "Imagify",
      description:
        "Aplicación Android avanzada para búsqueda y descarga de imágenes desde unsplash.com, desarrollado Jetpack Compose.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      name: "TicTacToe",
      description:
        "Mini juego de TicTacToe desarrollado con Jetpack Compose",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/TicTacToe",
    },
    {
      name: "Este portafolio",
      description:
        "Este portafolio es una muestra de mis habilidades como desarrollador, incluyendo mis proyectos y experiencias. Desarrollado con React, TailwindCSS y TypeScript. Diseño: Material You.",
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
      link: "#form",
    },
  ],
};
