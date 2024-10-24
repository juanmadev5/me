interface TitleParams {
  icon: string;
  title: string;
}
export default function TitleComponent({ icon, title }: TitleParams) {
  return (
    <div className="overflow-x-hidden w-full h-auto flex flex-row px-4 mt-6 max-md:w-full items-center">
      <img src={icon} alt="Icono de titulo" className="invert w-6 h-6" />
      <p className="text-white ml-3 text-xl font-bold tracking-wider">
        {title}
      </p>
    </div>
  );
}
