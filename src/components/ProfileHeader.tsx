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
    <div className="tracking-wide flex flex-col h-auto py-2">
      <div className="w-full h-auto flex flex-col py-2 items-center gap-2">
        <img
          className="mt-8 border-4 border-primary rounded-full h-36"
          alt={devName}
          src={profilePhoto}
        />
        <p className="mt-6 text-2xl text-primary text-center">{fullName}</p>
        <p className="text-pretty text-center text-onSurface opacity-90 mt-4 max-md:text-sm">
          {headerDescription}
        </p>
        <div className="mt-4 flex flex-row text-xs text-onSurface opacity-80">
          <img
            className="w-4 h-4 fill-primary"
            src={locationIcon}
            alt={strings.iconLocationAlt}
          />
          <p className="ml-2" translate="no">
            {location}
          </p>
        </div>
        <Social socialLinks={socialLinks} cvlink={cvlink} />
      </div>
    </div>
  );
}
