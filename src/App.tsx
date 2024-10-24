import icInfo from "./assets/ic-info.webp";
import icDev from "./assets/ic-dev.webp";
import icProyects from "./assets/ic-proyects.webp";
import icEmail from "./assets/ic-email.webp";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfileHeader from "./components/ProfileHeader";
import Proyects from "./components/Proyects";
import Stack from "./components/Stack";
import TitleComponent from "./components/TitleComponent";
import ProvideData from "./data/Data";

export default function App() {
  const data = ProvideData();
  document.title = data.title;
  const metaDesc = document.querySelector('meta[name="description"]');
  metaDesc?.setAttribute("content", data.title);

  return (
    <main className="overflow-x-hidden w-full flex flex-col items-center justify-center antialiased font-comfortaa bg-gradient-to-tr from-neutral-900 to-cyan-900">
      <div className="w-[700px] max-md:w-full p-2 max-md:p-0">
        <ProfileHeader />
        <TitleComponent icon={icInfo} title={data.aboutMeDesc} />
        <AboutMe />
        <TitleComponent icon={icDev} title={data.technologiesDesc} />
        <Stack />
        <TitleComponent icon={icProyects} title={data.proyectsDesc} />
        <Proyects />
        <TitleComponent icon={icEmail} title={data.contactMeDesc} />
        <Contact />
      </div>
    </main>
  );
}
