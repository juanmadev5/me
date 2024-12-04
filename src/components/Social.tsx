import { myData } from "../data/Data";

export default function Social() {
  return (
    <div className="overflow-x-hidden w-auto h-12 mt-6 mx-3 flex flex-row items-center gap-1">
      {myData.socialLinks.map((item, index) => (
        <a className="p-1 rounded-xl" key={index} href={item.link} rel="noopener noreferrer">
          <img
            src={item.icon}
            alt={item.name}
            className="w-6 h-6 transition-transform duration-300 transform hover:scale-[1.1] invert"
          />
        </a>
      ))}
    </div>
  );
}
