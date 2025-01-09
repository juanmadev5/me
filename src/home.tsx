import icInfo from "/ic-info.webp";
import icDev from "/ic-dev.webp";
import icProyects from "/ic-proyects.webp";
import icEmail from "/ic-email.webp";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import ProfileHeader from "./components/ProfileHeader";
import Proyects from "./components/Proyects";
import Stack from "./components/Stack";
import TitleComponent from "./components/TitleComponent";
import { appStrings } from "./data/Data";

export default function Home() {
    document.title = appStrings.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute("content", appStrings.title);
    return (
        <main className="w-full flex flex-col items-center justify-center antialiased tracking-wide font-comfortaa bg-gradient-to-br from-gray-900 to-zinc-900 text-white">
            <div className="w-[700px] max-md:w-full p-2 max-md:p-0">
                <ProfileHeader />
                <TitleComponent icon={icInfo} title={appStrings.aboutMeDesc} />
                <AboutMe />
                <TitleComponent icon={icDev} title={appStrings.technologiesDesc} />
                <Stack />
                <TitleComponent icon={icProyects} title={appStrings.proyectsDesc} />
                <Proyects />
                <TitleComponent icon={icEmail} title={appStrings.contactMeDesc} />
                <Contact />
            </div>
        </main>
    )
}