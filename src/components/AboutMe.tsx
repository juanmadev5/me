import { PortfolioDataModel } from "../model/PortfolioDataModel";

type AboutMeProps = Pick<PortfolioDataModel, "aboutMeDescription">;

export default function AboutMe({ aboutMeDescription }: AboutMeProps) {
  return <p className="text-pretty text-center text-on-surface px-4 sm:px-16 lg:px-24">{aboutMeDescription}</p>;
}
