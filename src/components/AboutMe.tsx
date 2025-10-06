import { PortfolioDataModel } from "../model/PortfolioDataModel";

type AboutMeProps = Pick<PortfolioDataModel, "aboutMeDescription">;

export default function AboutMe({ aboutMeDescription }: AboutMeProps) {
  return <p className="p-4 text-center text-onSurface">{aboutMeDescription}</p>;
}
