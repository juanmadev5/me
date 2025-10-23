import { PortfolioDataModel } from "../model/PortfolioDataModel";
import { ProjectModel } from "../model/ProjectModel";
import { SocialLinksModel } from "../model/SocialLinksModel";
import Sc1Imagify from "/screenshot1-imagify.webp";
import Sc2Imagify from "/screenshot2-imagify.webp";
import Sc3Imagify from "/screenshot3-imagify.webp";
import Sc1InvSys from "/screenshot2-inventorysystem.webp";
import Sc1ecommerce from "/screenshot1-ecommerce.webp";
import Sc2ecommerce from "/screenshot2-ecommerce.webp";
import Sc1flashcards from "/screenshot1-flashcards.webp";
import Sc2flashcards from "/screenshot2-flashcards.webp";
import Sc3flashcards from "/screenshot3-flashcards.webp";
import ScServicesfrom from"/screenshot-services.webp";

export async function getPortfolioData(): Promise<PortfolioDataModel> {

  const myProjects: ProjectModel[] = [
    {
      name: "Fastsites.jm: Mi servicio de desarrollo de sitios web",
      description:
        "Landing page para mi servicio de desarrollo de sitios web, construido con React y TailwindCSS para una experiencia rápida y responsiva.",
      link: "https://github.com/juanmadev5/fastsites",
      techList: [
        "https://skillicons.dev/icons?i=visualstudio",
        "https://skillicons.dev/icons?i=react",
        "https://skillicons.dev/icons?i=html",
        "https://skillicons.dev/icons?i=tailwindcss",
      ],
      screenshots:[ScServicesfrom]
    },
    {
      name: "Sistema de Control de Inventario",
      description:
        "Contiene dos modelos: API RESTful para gestión de inventarios, con operaciones CRUD y persistencia de datos con AzureDB.",
      link: "https://github.com/juanmadev5/InventorySystem",
      techList: [
        "https://skillicons.dev/icons?i=dotnet",
        "https://skillicons.dev/icons?i=cs",
        "https://skillicons.dev/icons?i=azure",
      ],
      screenshots:[Sc1InvSys]
    },
    {
      name: "Imagify: Aplicación de búsqueda y descarga de imágenes",
      description:
        "Desarrollada de forma nativa para Android utilizando Jetpack Compose para la interfaz de usuario. Conectada a la API de Unsplash, esta app permite a los usuarios buscar y descargar imágenes de alta calidad de forma eficiente, demostrando experiencia en el consumo de APIs y desarrollo moderno de UI en Android.",
      link: "https://github.com/juanmadev5/Imagify",
      techList: [
        "https://skillicons.dev/icons?i=androidstudio",
        "https://skillicons.dev/icons?i=kotlin",
        "https://skillicons.dev/icons?i=firebase",
      ],
      screenshots:[Sc1Imagify, Sc2Imagify, Sc3Imagify]
    },
    {
      name: "E-commerce Backend & Admin Panel con Supabase",
      description:
        "Solución completa de gestión de productos para pequeños negocios, compuesta por dos partes clave: 1) Una API RESTful robusta (Node.js/JavaScript) para el manejo de inventario y catálogo, que usa Supabase (Base de Datos y Storage) para la persistencia. 2) Un Panel de Control totalmente funcional, que permite al usuario administrar el stock, crear, editar y eliminar productos, y gestionar sus imágenes. Este diseño desacoplado asegura que la API pueda alimentar tanto el panel de administración como cualquier otro frontend de ventas (web o móvil) personalizado.",
      link: "https://github.com/juanmadev5/GestorDeProductos",
      techList: [
        "https://skillicons.dev/icons?i=nodejs",
        "https://skillicons.dev/icons?i=js",
        "https://skillicons.dev/icons?i=supabase",
        "https://skillicons.dev/icons?i=html",
        "https://skillicons.dev/icons?i=tailwind",
      ],
      screenshots:[Sc1ecommerce, Sc2ecommerce]
    },
    {
      name: "Flashcards: Tu Ayudante de Estudio Personal",
      description:
        "¡Una sencilla pero poderosa aplicación de tarjetas de memoria (flashcards) para Android, diseñada para ayudarte a estudiar y memorizar cualquier cosa que necesites! Creada desde cero utilizando las tecnologías más modernas del ecosistema de Android, guarda los datos localmente en un archivo JSON",
      link: "https://github.com/juanmadev5/flashcards",
      techList: [
        "https://skillicons.dev/icons?i=androidstudio",
        "https://skillicons.dev/icons?i=kotlin",
      ],
      screenshots:[Sc1flashcards, Sc2flashcards, Sc3flashcards]
    },
  ];

  const socialLinks: SocialLinksModel[] = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jmdev365/",
      icon_url: "https://skillicons.dev/icons?i=linkedin",
    },
    {
      name: "GitHub",
      link: "https://github.com/juanmadev5",
      icon_url: "https://skillicons.dev/icons?i=github",
    },
    {
      name: "Email",
      link: "#form",
      icon_url: "https://skillicons.dev/icons?i=gmail",
    },
  ];

  const profileData: Omit<
    PortfolioDataModel,
    "myStack" | "myProjects" | "socialLinks"
  > = {
    devName: "JM Dev",
    fullName: "Juan Manuel Velázquez",
    headerDescription: "Desarrollador Android / Web Frontend",
    profilePhoto:
      "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
    location: "Ciudad de Limpio, Paraguay",
    aboutMeDescription:
      "+2 años de experiencia como desarrollador web frontend y aplicaciones móviles Android, actualmente enfocandome en el desarrollo de sistemas backend.",
    cvlink:
      "https://drive.google.com/file/d/10u5nQp08dynd3C_7DuViF8Vq-jBoK-Cv/view?usp=drive_link",
  };

  return {
    ...profileData,
    myProjects,
    socialLinks,
  };
}
