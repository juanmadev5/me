interface TitleParams {
  icon: string;
  title: string;
}
export default function TitleComponent({ icon, title }: TitleParams) {
  return (
    <div className="flex flex-col px-4 mt-4 items-center justify-center gap-3">
      <img src={icon} alt="Icono de titulo" className="w-6 h-6" />
      <h2 className="text-xl tracking-wider text-primary">
        {title}
      </h2>
    </div>
  );
}
