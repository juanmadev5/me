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
    <div className="font-comfortaa w-full bg-gradient-to-tr from-neutral-900 to-cyan-900">
      <main className="flex flex-col items-center justify-center antialiased">
        <div className="w-[700px] max-md:w-10/12">
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
    </div>
  );
}
