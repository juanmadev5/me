import locationIcon from "/ic-location.svg";
import Social from "./Social";
import { data } from "../app/Data";
import { strings } from "../app/Strings";
import HorizontalDivider from "./HorizontalDivider";

export default function ProfileHeader() {
  return (
    <div className="tracking-wide flex flex-col h-auto py-2">
      <div className="w-full h-auto flex flex-col py-2 items-center gap-2">
        <img
          className="ml-4 mt-8 border-4 border-primary rounded-full max-md:h-36 max-lg:h-40 xl:h-40"
          alt={data.devName}
          src={data.profilePhoto}
        />
        <p className="ml-4 mt-6 text-2xl text-primary">{data.fullName}</p>
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
      <HorizontalDivider />
      <div className="w-full flex flex-col items-center">
        <h2 className="mx-4 mt-2 flex-wrap text-primary">
          {strings.available}
        </h2>
        <ul className="mx-4 mt-4 max-md:text-sm text-xs flex flex-wrap gap-2 justify-center">
          {Object.values(strings.availability)
            .slice(0, 3)
            .map((item, index) => (
              <li
                key={index}
                className="flex items-center rounded-2xl bg-onSecondary"
              >
                <span className="m-2">{item}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
