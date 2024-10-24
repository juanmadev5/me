import ProvideData from "../data/Data";

export default function Social() {
  const data = ProvideData();

  return (
    <div className="overflow-x-hidden w-auto h-8 mt-6 mx-2 flex flex-row">
      {data.myData.socialLinks.map((item, index) => (
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
