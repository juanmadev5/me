import { PortfolioDataModel } from "../model/PortfolioDataModel";

type SocialProps = Pick<PortfolioDataModel, "socialLinks" | "cvlink">;

export default function Social({ socialLinks, cvlink }: SocialProps) {
  return (
    <>
      <div className="h-12 mt-2 flex flex-row items-center gap-1">
        {socialLinks.map((item, index) => (
          <a
            className="p-1 rounded-xl"
            key={index}
            href={item.link}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={`${item.icon_url}&theme=dark`}
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
        className="border-[1px] border-primary rounded-2xl px-2 opacity-70 tracking-wider font-semibold hover:opacity-90"
        target="_blank"
      >
        <span className="text-primary text-xs">Descarga mi CV</span>
      </a>
    </>
  );
}
