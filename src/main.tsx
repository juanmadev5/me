import { createRoot } from "react-dom/client";
import "./index.css";
import icInfo from "/ic-info.svg";
import icTech from "/ic-tech.svg";
import icProyects from "/ic-project.svg";
import icEmail from "/ic-mail.svg";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfileHeader from "./components/ProfileHeader";
import Projects from "./components/Projects";
import Stack from "./components/Stack";
import TitleComponent from "./components/TitleComponent";
import { strings } from "./app/Strings";
import HorizontalDivider from "./components/HorizontalDivider";

document.title = strings.title;
const metaDesc = document.querySelector('meta[name="description"]');
metaDesc?.setAttribute("content", strings.title);

createRoot(document.getElementById("root")!).render(
  <main className="bg-background flex flex-col items-center justify-center antialiased tracking-wide font-comfortaa text-white">
      <div className="w-[700px] max-md:w-full p-2 max-md:p-0">
        <ProfileHeader />
        <HorizontalDivider />
        <TitleComponent icon={icInfo} title={strings.aboutMeDesc} />
        <AboutMe />
        <HorizontalDivider />
        <TitleComponent icon={icTech} title={strings.technologiesDesc} />
        <Stack />
        <HorizontalDivider />
        <TitleComponent icon={icProyects} title={strings.proyectsDesc} />
        <Projects />
        <HorizontalDivider />
        <TitleComponent icon={icEmail} title={strings.contactMeDesc} />
        <Contact />
      </div>
    </main>
);