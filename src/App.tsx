import icInfo from "./assets/ic-info.webp";
import icDev from "./assets/ic-dev.webp";
import icProyects from "./assets/ic-proyects.webp";
import icEmail from "./assets/ic-email.webp";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfileHeader from "./components/ProfileHeader";
import Proyects from "./components/Proyects";
import Social from "./components/Social";
import Stack from "./components/Stack";
import TitleComponent from "./components/TitleComponent";

export default function App() {
  return (
    <main className="overflow-x-hidden w-full flex flex-col items-center justify-center antialiased font-comfortaa bg-gradient-to-tr from-neutral-900 to-cyan-900">
      <div className="w-[700px] max-md:w-full p-2">
        <ProfileHeader />
        <TitleComponent icon={icInfo} title="Acerca de mi" />
        <AboutMe />
        <TitleComponent icon={icDev} title="Tecnologías que utilizo" />
        <Stack />
        <TitleComponent icon={icProyects} title="Mis Proyectos" />
        <Proyects />
        <TitleComponent icon={icEmail} title="Contáctame" />
        <Contact />
        <Social />
      </div>
    </main>
  );
}
