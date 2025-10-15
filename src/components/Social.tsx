import { PortfolioDataModel } from "../model/PortfolioDataModel";

type SocialProps = Pick<PortfolioDataModel, "socialLinks" | "cvlink">;

export default function Social({ socialLinks, cvlink }: SocialProps) {
  return (
    <>
      <div className="h-12 mt-2 mx-3 flex flex-row items-center gap-1">
        {socialLinks.map((item, index) => (
          <a
            className="p-1 rounded-xl"
            key={index}
            href={item.link}
            rel="noopener noreferrer"
          >
            <img
              src={item.icon_url}
              alt={item.name}
              className="w-6 h-6 transition-transform duration-300 transform hover:scale-[1.1]"
            />
          </a>
        ))}
      </div>
      <a href={cvlink} className="text-primary font-bold text-sm">Obtén mi CV</a>
    </>
  );
}
