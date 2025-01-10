import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
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

createRoot(document.getElementById('root')!).render(<Home />);
export default function Home() {
    document.title = strings.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute("content", strings.title);

    const [visibleIndex, setVisibleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prev) => prev + 1);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    const components = [
        <ProfileHeader key="header" />,
        <TitleComponent key="about" icon={icInfo} title={strings.aboutMeDesc} />,
        <AboutMe key="aboutme" />,
        <TitleComponent key="stack" icon={icDev} title={strings.technologiesDesc} />,
        <Stack key="technologies" />,
        <TitleComponent key="projects" icon={icProyects} title={strings.proyectsDesc} />,
        <Proyects key="projectsList" />,
        <TitleComponent key="contact" icon={icEmail} title={strings.contactMeDesc} />,
        <Contact key="contactMe" />,
    ];

    return (
        <main className="flex flex-col items-center justify-center antialiased tracking-wide font-comfortaa bg-gradient-to-br from-gray-900 to-zinc-900 text-white">
            {components.map((component, index) => (
                <div
                    key={index}
                    className={`w-[700px] max-md:w-full p-2 max-md:p-0 transition-opacity duration-500 transform ${visibleIndex >= index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
                >
                    {component}
                </div>
            ))}
        </main>
    );
}