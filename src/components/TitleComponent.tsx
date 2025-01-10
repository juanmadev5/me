interface TitleParams {
  icon: string;
  title: string;
}
export default function TitleComponent({ icon, title }: TitleParams) {
  return (
    <div className="flex flex-row px-4 mt-6 items-center justify-center">
      <img src={icon} alt="Icono de titulo" className="w-6 h-6 mb-1" />
      <h2 className="ml-3 text-xl tracking-wider text-primary">
        {title}
      </h2>
    </div>
  );
}
