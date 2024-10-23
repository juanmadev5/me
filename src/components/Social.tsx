export default function Social() {
  const socials = ["Instagram", "GitHub", "LinkedIn"];

  const socialIcons = [
    "src/assets/ic-instagram.webp",
    "src/assets/ic-github.webp",
    "src/assets/ic-linkedin.webp",
  ];

  const socialLinks = [
    "https://www.instagram.com/itz_juanmaa?igsh=MXBsY3B1c3NqbjV6NQ==",
    "https://github.com/juanmadev5",
    "https://www.linkedin.com/in/juan-manuel-vel%C3%A1zquez-ba8a342ba?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
  ];
  return (
    <div className="w-full my-4 flex flex-row items-center justify-center">
      {socials.map((name, index) => (
        <a key={index} href={socialLinks[index]} target="_blank">
          <img
            src={socialIcons[index]}
            alt={name}
            className="w-10 h-10 mx-2border-[1px] border-black invert rounded-full p-2 transition-transform duration-300 transform hover:scale-[1.03] hover:border-orange-800 hover:border-[2px]"
          />
        </a>
      ))}
    </div>
  );
}
