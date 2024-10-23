import instagramIcon from "../assets/ic-instagram.webp";
import githubIcon from "../assets/ic-github.webp";
import linkedinIcon from "../assets/ic-linkedin.webp";

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
  ];

  return (
    <div className="w-full my-4 flex flex-row items-center justify-center">
      {socialItems.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={item.icon}
            alt={item.name}
            className="w-10 h-10 mx-2 border-[1px] border-black invert rounded-full p-2 transition-transform duration-300 transform hover:scale-[1.03] hover:border-orange-800 hover:border-[2px]"
          />
        </a>
      ))}
    </div>
  );
}
