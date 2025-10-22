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
              width="28px"
              height="28px"
              className="transition-transform duration-300 transform hover:scale-[1.1]"
            />
          </a>
        ))}
      </div>
      <a
        href={cvlink}
        className="border-[1px] border-primary rounded-2xl p-2 opacity-70 mt-2"
      >
        <span className="text-primary text-xs">Descarga mi CV</span>
      </a>
    </>
  );
}
