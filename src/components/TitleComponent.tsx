interface TitleParams {
  icon: string;
  title: string;
}
export default function TitleComponent({ icon, title }: TitleParams) {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img src={icon} alt="Icono de titulo" className="w-6 h-6" />
      <h2 className="text-xl  text-primary">{title}</h2>
    </div>
  );
}
