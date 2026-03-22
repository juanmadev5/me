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
      <p className="text-center text-on-surface opacity-90 mt-4">
        {headerDescription}
      </p>
      <div className="flex flex-row justify-center items-center gap-2 border border-primary rounded-xl p-2 mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="rgb(177, 209, 138)"
          className="size-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
          />
        </svg>

        <p className="text-center text-on-surface opacity-90 text-xs">
          Desarrollador Flutter en CLT S.A
        </p>
      </div>

      <footer className="mt-2 flex text-xs text-on-surface opacity-80 justify-center items-center flex-col">
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
