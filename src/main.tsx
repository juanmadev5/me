import { createRoot } from 'react-dom/client'
import './index.css'
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
import { strings } from "./app/Strings";

createRoot(document.getElementById('root')!).render(<Home />)
export default function Home() {
    document.title = strings.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute("content", strings.title);
    return (
        <main className="flex flex-col items-center justify-center antialiased tracking-wide font-comfortaa bg-gradient-to-br from-gray-900 to-zinc-900 text-white">
            <div className="w-[700px] max-md:w-full p-2 max-md:p-0">
                <ProfileHeader />
                <TitleComponent icon={icInfo} title={strings.aboutMeDesc} />
                <AboutMe />
                <TitleComponent icon={icDev} title={strings.technologiesDesc} />
                <Stack />
                <TitleComponent icon={icProyects} title={strings.proyectsDesc} />
                <Proyects />
                <TitleComponent icon={icEmail} title={strings.contactMeDesc} />
                <Contact />
            </div>
        </main>
    )
}