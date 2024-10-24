import locationIcon from "../assets/ic-location.webp";
import Social from "./Social";

export default function ProfileHeader() {
  const name = "Juan Manuel Velázquez";
  const description = "Desarrollador Android y Web Full Stack";
  const location = "Ciudad de Limpio, Paraguay";
  return (
    <div className="overflow-x-hidden tracking-wide w-full flex flex-col h-auto py-8 bg-gradient-to-br from-sky-900 to-teal-600 rounded-xl max-md:rounded-none">
      <div className="w-full h-auto flex py-2">
        <img
          className="ml-4 rounded-full w-28 h-28"
          src="https://avatars.githubusercontent.com/u/115042535?s=400&u=62a596cea79ad50f38ed1e841b021acae7b7b79a&v=4"
        />
      </div>
      <p className="w-full ml-4 mt-2 text-xl text-white">{name}</p>
      <p className="w-full mx-4 mt-3 text-white max-md:text-sm flex-wrap">
        {description}
      </p>
      <div className="w-full mt-4 ml-3 flex flex-row max-md:text-sm">
        <img
          className="invert max-md:w-5 max-md:h-5 w-5 h-5"
          src={locationIcon}
          alt="Icono de ubicacion"
        />
        <p className="ml-2 text-white" translate="no">
          {location}
        </p>
      </div>
      <Social />
    </div>
  );
}
