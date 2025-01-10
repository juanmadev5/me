import { data } from "../app/Data";

export default function Social() {
  return (
    <div className="h-12 mt-2 mx-3 flex flex-row items-center gap-1">
      {data.socialLinks.map((item, index) => (
        <a className="p-1 rounded-xl" key={index} href={item.link} rel="noopener noreferrer">
          <img
            src={item.icon}
            alt={item.name}
            className="w-6 h-6 transition-transform duration-300 transform hover:scale-[1.1] invert"
          />
        </a>
      ))}
      <a href="https://drive.google.com/file/d/10u5nQp08dynd3C_7DuViF8Vq-jBoK-Cv/view?usp=sharing" className="ml-4 text-xs text-sky-500">Mi CV</a>
    </div>
  );
}
