import locationIcon from "/ic-location.svg";
import Social from "./Social";
import { strings } from "../app/Strings";
import { PortfolioDataModel } from "../model/PortfolioDataModel";

type ProfileHeaderProps = Pick<
  PortfolioDataModel,
  | "devName"
  | "fullName"
  | "headerDescription"
  | "profilePhoto"
  | "location"
  | "socialLinks"
  | "cvlink"
>;

export default function ProfileHeader({
  devName,
  fullName,
  headerDescription,
  profilePhoto,
  location,
  socialLinks,
  cvlink,
}: ProfileHeaderProps) {
  return (
    <article className="flex flex-col items-center text-center gap-2">
      <img
        className="mt-8 border-4 border-primary rounded-full h-32"
        alt={devName}
        src={profilePhoto}
      />
      <p className="mt-6 text-2xl text-primary text-center">{fullName}</p>
      <p className="text-center text-onSurface opacity-90 mt-4">
        {headerDescription}
      </p>
      <footer className="mt-2 flex text-xs text-onSurface opacity-80 justify-center items-center flex-col">
        <img
          width="20px"
          height="20px"
          src={locationIcon}
          alt={strings.iconLocationAlt}
        />
        <p className="text-center mt-2" translate="no">
          {location}
        </p>
      </footer>
      <Social socialLinks={socialLinks} cvlink={cvlink} />
    </article>
  );
}
