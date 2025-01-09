import locationIcon from "/ic-location.webp";
import { appStrings, myData } from "../data/Data";
import Social from "./Social";

export default function ProfileHeader() {
  return (
    <div className="overflow-x-hidden tracking-wide w-full flex flex-col h-auto py-2">
      <div className="w-full h-auto flex py-2">
        <img
          className="ml-4 rounded-full w-28 h-28"
          src={myData.profilePhoto}
        />
      </div>
      <p className="ml-4 mt-2 text-2xl text-sky-500">
        {myData.fullName}
      </p>
      <p className="mx-4 mt-3 max-md:text-sm">
        {myData.headerDescription}
      </p>

      <div className="w-full mt-4 ml-4 flex flex-row max-md:text-sm">
        <img
          className="max-md:w-5 max-md:h-5 w-5 h-5 invert"
          src={locationIcon}
          alt={appStrings.iconLocationAlt}
        />
        <p className="ml-2 " translate="no">
          {myData.location}
        </p>
      </div>
      <Social />
      <p className="w-full mx-4 mt-4 max-md:text-sm flex-wrap text-xs text-sky-500">
        Disponibilidad:
      </p>
      <ul className="w-full mx-4 mt-4 max-md:text-sm text-xs flex flex-wrap gap-1 tracking-wider">
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">🕒 Hasta las 17:30 hs</span>
        </li>
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">🛠️ Proyectos freelance</span>
        </li>
        <li className="flex items-center border rounded-2xl border-sky-800">
          <span className="m-2">💼 Tiempo completo</span>
        </li>
      </ul>
    </div>
  );
}
