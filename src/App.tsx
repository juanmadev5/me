import icInfo from "/ic-info.svg";
import icProyects from "/ic-project.svg";
import icEmail from "/ic-mail.svg";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import TitleComponent from "./components/TitleComponent";
import { strings } from "./app/Strings";
import HorizontalDivider from "./components/HorizontalDivider";
import { useState, useEffect } from "react";
import { getPortfolioData } from "./app/Data";
import { PortfolioDataModel } from "./model/PortfolioDataModel";

export function App() {
  const [data, setData] = useState<PortfolioDataModel | null>(null);
  const [showContent, setShowContent] = useState(false);

  document.title = data ? data.devName : "Portafolio";
  const metaDesc = document.querySelector('meta[name="description"]');
  metaDesc?.setAttribute("content", data ? data.devName : "Portafolio");

  useEffect(() => {
    (async () => {
      try {
        const fetchedData: PortfolioDataModel = await getPortfolioData();
        setData(fetchedData);
      } catch (err) {
        console.error("Error cargando datos:", err);
      }
    })();
  }, []);

  useEffect(() => {
    if (data) {
      const timer = setTimeout(() => setShowContent(true), 100);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (!data) {
    return (
      <main className="flex h-screen items-center justify-center bg-background text-red-400 font-comfortaa"></main>
    );
  }

  return (
    <main className="bg-background flex flex-col items-center justify-center antialiased tracking-wide font-comfortaa text-white">
      <div
        className={`w-[700px] max-md:w-full p-2 max-md:p-0 transition-opacity duration-1000 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <ProfileHeader
          devName={data.devName}
          fullName={data.fullName}
          headerDescription={data.headerDescription}
          profilePhoto={data.profilePhoto}
          location={data.location}
          socialLinks={data.socialLinks}
          cvlink={data.cvlink}
        />
        <HorizontalDivider />
        <TitleComponent icon={icInfo} title={strings.aboutMeDesc} />
        <AboutMe aboutMeDescription={data.aboutMeDescription} />
        <HorizontalDivider />
        <TitleComponent icon={icProyects} title={strings.proyectsDesc} />
        <Projects myProjects={data.myProjects} />
        <HorizontalDivider />
        <TitleComponent icon={icEmail} title={strings.contactMeDesc} />
        <Contact />
      </div>
    </main>
  );
}
