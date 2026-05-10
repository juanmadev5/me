import icInfo from "/ic-info.svg";
import icProyects from "/ic-project.svg";
import icEmail from "/ic-mail.svg";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import TitleComponent from "./components/TitleComponent";
import { strings } from "./app/Strings";
import { useState, useEffect } from "react";
import { getPortfolioData } from "./app/Data";
import { PortfolioDataModel } from "./model/PortfolioDataModel";

export function App() {
  const [data, setData] = useState<PortfolioDataModel | null>(null);
  const [showContent, setShowContent] = useState(false);

  // Update document title and meta description when data changes
  useEffect(() => {
    document.title = data ? data.devName : "Portafolio";
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute("content", data ? data.devName : "Portafolio");
  }, [data]);

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
      const timer = setTimeout(() => setShowContent(true), 400);
      return () => clearTimeout(timer);
    }
  }, [data]);

  if (data) {
    return (
      <main
        className={`bg-background flex flex-col gap-10 p-2 items-center justify-center antialiased font-comfortaa transition-opacity duration-1000 ease-in-out md:max-w-[540px] lg:max-w-[640px] mx-auto ${
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

        <section className="flex flex-col gap-4">
          <TitleComponent icon={icInfo} title={strings.aboutMeDesc} />
          <AboutMe aboutMeDescription={data.aboutMeDescription} />
        </section>

        <section className="flex flex-col gap-4">
          <TitleComponent icon={icProyects} title={strings.proyectsDesc} />
          <Projects myProjects={data.myProjects} />
        </section>

        <section className="flex flex-col gap-4">
          <TitleComponent icon={icEmail} title={strings.contactMeDesc} />
          <Contact />
        </section>
      </main>
    );
  }
}
