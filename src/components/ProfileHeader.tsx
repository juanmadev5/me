import locationIcon from "/ic-location.webp";
import Social from "./Social";
import { data } from "../app/Data";
import { strings } from "../app/Strings";

export default function ProfileHeader() {
  return (
    <div className="tracking-wide flex flex-col h-auto py-2">
      <div className="w-full h-auto flex py-2">
        <img
          className="ml-4 rounded-full w-28 h-28"
          alt={data.devName}
          src={data.profilePhoto}
        />
      </div>
      <p className="ml-4 mt-2 text-2xl text-sky-500">
        {data.fullName}
      </p>
      <p className="mx-4 mt-3 max-md:text-sm">
        {data.headerDescription}
      </p>

      <div className="mt-4 ml-4 flex flex-row max-md:text-sm">
        <img
          className="max-md:w-5 max-md:h-5 w-5 h-5 invert"
          src={locationIcon}
          alt={strings.iconLocationAlt}
        />
        <p className="ml-2 " translate="no">
          {data.location}
        </p>
      </div>
      <Social />
      <p className="mx-4 mt-4 max-md:text-sm flex-wrap text-xs text-sky-500">
        {strings.available}
      </p>
      <ul className="mx-4 mt-4 max-md:text-sm text-xs flex flex-wrap gap-2">
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">{strings.availability[1]}</span>
        </li>
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">{strings.availability[2]}</span>
        </li>
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">{strings.availability[3]}</span>
        </li>
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">{strings.availability[4]}</span>
        </li>
      </ul>
    </div>
  );
}
