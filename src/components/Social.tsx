import instagramIcon from "../assets/ic-instagram.webp";
import githubIcon from "../assets/ic-github.webp";
import linkedinIcon from "../assets/ic-linkedin.webp";
import contactMe from "../assets/ic-contactme.webp";

export default function Social() {
  const socialItems = [
    {
      name: "Instagram",
      icon: instagramIcon,
      link: "https://www.instagram.com/itz_juanmaa?igsh=MXBsY3B1c3NqbjV6NQ==",
    },
    {
      name: "GitHub",
      icon: githubIcon,
      link: "https://github.com/juanmadev5",
    },
    {
      name: "LinkedIn",
      icon: linkedinIcon,
      link: "https://www.linkedin.com/in/juan-manuel-vel%C3%A1zquez-ba8a342ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "Contactame",
      icon: contactMe,
      link: "#contact_section",
    },
  ];

  return (
    <div className="overflow-x-hidden w-auto h-8 mt-6 mx-2 flex flex-row">
      {socialItems.map((item, index) => (
        <a key={index} href={item.link} rel="noopener noreferrer">
          <img
            src={item.icon}
            alt={item.name}
            className="w-6 h-6 mx-2 invert transition-transform duration-300 transform hover:scale-[1.3]"
          />
        </a>
      ))}
    </div>
  );
}
