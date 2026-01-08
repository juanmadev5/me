import { PortfolioDataModel } from "../model/PortfolioDataModel";
import { ProjectModel } from "../model/ProjectModel";
import { SocialLinksModel } from "../model/SocialLinksModel";
import Sc1Imagify from "/screenshot1-imagify.webp";
import Sc2Imagify from "/screenshot2-imagify.webp";
import Sc3Imagify from "/screenshot3-imagify.webp";
import Sctjm from "/screenshot-tjm.webp";
import projectLensSc from "/project-lens-screenshot.webp"

export async function getPortfolioData(): Promise<PortfolioDataModel> {
  const myProjects: ProjectModel[] = [
    {
      name: "ProjectLens: CLI para administrar proyectos de programación",
      description:
        "Herramienta de CLI para administrar y clasificar proyectos de programación desde un solo lugar, además puedes abrir tus proyectos desde el mismo lugar en tu editor de código favorito gracias a que ProjectLens detecta los editores instalados en tu sistema.",
      link: "https://github.com/juanmadev5/ProjectLens",
      techList: "https://go-skill-icons.vercel.app/api/icons?i=c#,dotnet",
      screenshots: [projectLensSc],
    },
    {
      name: "TJM Business Platform: Sistema de gestión empresarial",
      description:
        "ERP/CRM ligero diseñado para ayudar a los administradores a llevar un control detallado de las operaciones de su negocio. Permite monitorear indicadores clave (ingresos, gastos, beneficio), gestionar clientes, y crear/visualizar/editar reportes y registrar compras.",
      link: "https://github.com/juanmadev5/tjm_business_platform",
      techList: "https://go-skill-icons.vercel.app/api/icons?i=flutter,dart,supabase",
      screenshots: [Sctjm],
    },
    {
      name: "Imagify: Aplicación de búsqueda y descarga de imágenes",
      description:
        "Desarrollada de forma nativa para Android utilizando Jetpack Compose para la interfaz de usuario. Conectada a la API de Unsplash, esta app permite a los usuarios buscar y descargar imágenes de alta calidad de forma eficiente, demostrando experiencia en el consumo de APIs y desarrollo moderno de UI en Android.",
      link: "https://github.com/juanmadev5/Imagify",
      techList:"https://go-skill-icons.vercel.app/api/icons?i=android,jetpackcompose,kotlin,firebase",
      screenshots: [Sc1Imagify, Sc2Imagify, Sc3Imagify],
    },
  ];

  const socialLinks: SocialLinksModel[] = [
    {
      name: "GitHub",
      link: "https://github.com/juanmadev5",
      icon_url: "https://go-skill-icons.vercel.app/api/icons?i=github",
    },
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jmdev365/",
      icon_url: "https://go-skill-icons.vercel.app/api/icons?i=linkedin",
    },
  ];

  const profileData: Omit<
    PortfolioDataModel,
    "myStack" | "myProjects" | "socialLinks"
  > = {
    devName: "JM Dev",
    fullName: "Juan Manuel Velázquez",
    headerDescription: "Web frontend / Mobile developer",
    profilePhoto:
      "https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4",
    location: "Ciudad de Limpio, Paraguay",
    aboutMeDescription:
      "Desarrollador web frontend con más de 2 años de experiencia y más de 1 año trabajando en el desarrollo de aplicaciones móviles nativas y multiplataforma.",
    cvlink:
      "https://drive.google.com/file/d/10u5nQp08dynd3C_7DuViF8Vq-jBoK-Cv/view?usp=drive_link",
  };

  return {
    ...profileData,
    myProjects,
    socialLinks,
  };
}



