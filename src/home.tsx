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
import { appStrings } from "./data/Data";
import Know from "./components/Know";

export default function Home() {
    document.title = appStrings.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute("content", appStrings.title);
    return (
        <main className="overflow-x-hidden w-full flex flex-col items-center justify-center antialiased font-comfortaa bg-gradient-to-br from-gray-900 to-zinc-900 text-white">
            <div className="w-[700px] max-md:w-full p-2 max-md:p-0">
                <ProfileHeader />
                <TitleComponent icon={icInfo} title={appStrings.aboutMeDesc} />
                <AboutMe />
                <TitleComponent icon={icDev} title={appStrings.technologiesDesc} />
                <Stack />
                <TitleComponent icon={icDev} title={appStrings.know} />
                <Know />
                <TitleComponent icon={icProyects} title={appStrings.proyectsDesc} />
                <Proyects />
                <TitleComponent icon={icEmail} title={appStrings.contactMeDesc} />
                <Contact />
            </div>
        </main>
    )
}