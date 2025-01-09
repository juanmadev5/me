import { myData } from "../data/Data";

export default function Social() {
  return (
    <div className="h-12 mt-2 mx-3 flex flex-row items-center gap-1">
      {myData.socialLinks.map((item, index) => (
        <a className="p-1 rounded-xl" key={index} href={item.link} rel="noopener noreferrer">
          <img
            src={item.icon}
            alt={item.name}
            className="w-6 h-6 transition-transform duration-300 transform hover:scale-[1.1] invert"
          />
        </a>
      ))}
      <a href="https://1drv.ms/b/c/db6bb5dd184712e5/EUUAcccBBmdNkg8njIeF-hoBS1QMENlYO9MzV5xKJmTxdw?e=5fjm0W" className="ml-4 text-xs text-sky-500">Mi CV</a>
    </div>
  );
}
