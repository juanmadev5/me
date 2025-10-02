import locationIcon from "/ic-location.svg";
import Social from "./Social";
import { data } from "../app/Data";
import { strings } from "../app/Strings";

export default function ProfileHeader() {
  return (
    <div className="tracking-wide flex flex-col h-auto py-2">
      <div className="w-full h-auto flex flex-col py-2 items-center gap-2">
        <img
          className="mt-8 border-4 border-primary rounded-full h-36"
          alt={data.devName}
          src={data.profilePhoto}
        />
        <p className="mt-6 text-2xl text-primary">{data.fullName}</p>
        <p className="text-pretty text-center text-onSurface mt-4 max-md:text-sm">
          {data.headerDescription}
        </p>
        <div className="mt-4 flex flex-row max-md:text-sm items-center">
          <img
            className="max-md:w-5 max-md:h-5 w-5 h-5 mb-1 fill-primary"
            src={locationIcon}
            alt={strings.iconLocationAlt}
          />
          <p className="ml-2 text-onSurface" translate="no">
            {data.location}
          </p>
        </div>
        <Social />
      </div>
    </div>
  );
}
