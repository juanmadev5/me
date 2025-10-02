import composeIcon from "/ic-compose.webp";
import reactIcon from "/ic-react.webp";
import tailwindIcon from "/ic-tailwindcss.webp";
import icAndroid from "/ic-android.webp";
import icKotlin from "/ic-kotlin.webp";
import icCsharp from "/ic-csharp.webp";
import icNodejs from "/ic-nodejs.webp";
import icJs from "/ic-js.webp";
import icAstro from "/ic-astro.webp";
import icSupabase from "/ic-supabase.webp";
import githubIcon from "/ic-github.webp";
import linkedinIcon from "/ic-linkedin.webp";
import contactMe from "/ic-contactme.webp";

export const data = {
  devName: "JM Dev",
  fullName: "Juan Manuel Velázquez",
  headerDescription:
    "Técnico Informático | Desarrollador web frontend",
  profilePhoto:
    "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
  location: "Ciudad de Limpio, Paraguay",
  aboutMeDescription:
    "Soy un desarrollador apasionado por crear aplicaciones y sitios web modernos, intuitivos y funcionales. Mi objetivo es combinar diseño atractivo con tecnología para brindar experiencias excepcionales a los usuarios.",
  myStack: [
    { name: "React", icon: reactIcon },
    {
      name: "TailwindCSS",
      icon: tailwindIcon
    },
    { name: "JS", icon: icJs },
    { name: "Supabase", icon: icSupabase },
    {
      name: "Android Jetpack Compose",
      icon: composeIcon
    },
    { name: "Kotlin", icon: icKotlin }
  ],
  myProyects: [
    {
      name: "E-commerce Backend & Admin Panel con Supabase",
      description:
        "Solución completa de gestión de productos para pequeños negocios, compuesta por dos partes clave: 1) Una API RESTful robusta (Node.js/JavaScript) para el manejo de inventario y catálogo, que usa Supabase (Base de Datos y Storage) para la persistencia. 2) Un Panel de Control totalmente funcional, que permite al usuario administrar el stock, crear, editar y eliminar productos, y gestionar sus imágenes. Este diseño desacoplado asegura que la API pueda alimentar tanto el panel de administración como cualquier otro frontend de ventas (web o móvil) personalizado.",
      icon: icNodejs,
      link: "https://github.com/juanmadev5/GestorDeProductos",
    },
    {
      name: "Control de Inventarios en Consola con C#",
      description:
        "Este proyecto utiliza JSON para guardar y cargar datos, e implementa el patrón Singleton para la gestión centralizada de la información. El uso de ConcurrentDictionary asegura un manejo de datos seguro y eficiente.",
      icon: icCsharp,
      link: "https://github.com/juanmadev5/InventorySystem",
    },
    {
      name: "Imagify: Aplicación de búsqueda y descarga de imágenes",
      description:
        "Desarrollada de forma nativa para Android utilizando Jetpack Compose para la interfaz de usuario. Conectada a la API de Unsplash, esta app permite a los usuarios buscar y descargar imágenes de alta calidad de forma eficiente, demostrando experiencia en el consumo de APIs y desarrollo moderno de UI en Android.",
      icon: icAndroid,
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      name: "LearnWithMe: Blog personal",
      description:
        "Un blog personal desarrollado con AstroJS para demostrar habilidades en la creación de sitios web modernos. Su arquitectura sin servidor garantiza un rendimiento y una optimización excepcionales, destacando mi experiencia en el desarrollo de aplicaciones web de alto rendimiento.",
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
