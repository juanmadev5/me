import { PortfolioDataModel } from "../model/PortfolioDataModel";

type SocialProps = Pick<PortfolioDataModel, "socialLinks" | "cvLink">;

export default function Social({ socialLinks, cvLink }: SocialProps) {
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
              className="w-6 h-6 transition-transform duration-300 transform hover:scale-[1.1] invert"
            />
          </a>
        ))}
      </div>
      <a href={cvLink} className="text-primary">
        Mi CV
      </a>
    </>
  );
}
