import { PortfolioDataModel } from "../model/PortfolioDataModel";
import { ProjectModel } from "../model/ProjectModel";
import { SocialLinksModel } from "../model/SocialLinksModel";
import { StackModel } from "../model/StackModel";

export async function getPortfolioData(): Promise<PortfolioDataModel> {
  const myStack: StackModel[] = [
    {
      name: "Kotlin / Android Jetpack Compose",
      icon_url: "https://skillicons.dev/icons?i=kotlin",
    },
    { name: "HTML", icon_url: "https://skillicons.dev/icons?i=html" },
    { name: "React", icon_url: "https://skillicons.dev/icons?i=react" },
    {
      name: "TailwindCSS",
      icon_url: "https://skillicons.dev/icons?i=tailwind",
    },
    { name: "JS", icon_url: "https://skillicons.dev/icons?i=js" },
    { name: "Node.js", icon_url: "https://skillicons.dev/icons?i=nodejs" },
    { name: "Supabase", icon_url: "https://skillicons.dev/icons?i=supabase" },
    { name: "Firebase", icon_url: "https://skillicons.dev/icons?i=firebase" },
  ];

  const myProjects: ProjectModel[] = [
    {
      icon_url: "https://skillicons.dev/icons?i=kotlin",
      name: "Imagify: Aplicación de búsqueda y descarga de imágenes",
      description:
        "Desarrollada de forma nativa para Android utilizando Jetpack Compose para la interfaz de usuario. Conectada a la API de Unsplash, esta app permite a los usuarios buscar y descargar imágenes de alta calidad de forma eficiente, demostrando experiencia en el consumo de APIs y desarrollo moderno de UI en Android.",
      link: "https://github.com/juanmadev5/Imagify",
    },
    {
      icon_url: "https://skillicons.dev/icons?i=kotlin",
      name: "Flashcards: Tu Ayudante de Estudio Personal",
      description:
        "¡Una sencilla pero poderosa aplicación de tarjetas de memoria (flashcards) para Android, diseñada para ayudarte a estudiar y memorizar cualquier cosa que necesites! Creada desde cero utilizando las tecnologías más modernas del ecosistema de Android, guarda los datos localmente en un archivo JSON",
      link: "https://github.com/juanmadev5/flashcards",
    },
    {
      icon_url: "https://skillicons.dev/icons?i=cs",
      name: "Control de Inventarios en Consola con C#",
      description:
        "Este proyecto utiliza JSON para guardar y cargar datos, e implementa el patrón Singleton para la gestión centralizada de la información. El uso de ConcurrentDictionary asegura un manejo de datos seguro y eficiente.",
      link: "https://github.com/juanmadev5/InventorySystem",
    },
    {
      icon_url: "https://skillicons.dev/icons?i=nodejs",
      name: "E-commerce Backend & Admin Panel con Supabase",
      description:
        "Solución completa de gestión de productos para pequeños negocios, compuesta por dos partes clave: 1) Una API RESTful robusta (Node.js/JavaScript) para el manejo de inventario y catálogo, que usa Supabase (Base de Datos y Storage) para la persistencia. 2) Un Panel de Control totalmente funcional, que permite al usuario administrar el stock, crear, editar y eliminar productos, y gestionar sus imágenes. Este diseño desacoplado asegura que la API pueda alimentar tanto el panel de administración como cualquier otro frontend de ventas (web o móvil) personalizado.",
      link: "https://github.com/juanmadev5/GestorDeProductos",
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
      "Soy un desarrollador apasionado por crear aplicaciones móviles, intuitivos y funcionales. Mi objetivo es combinar diseño atractivo con tecnología para brindar experiencias excepcionales a los usuarios.",
    cvlink:
      "https://drive.google.com/file/d/10u5nQp08dynd3C_7DuViF8Vq-jBoK-Cv/view?usp=drive_link",
  };

  return {
    ...profileData,
    myStack,
    myProjects,
    socialLinks,
  };
}
