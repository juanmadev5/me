import CustomSection from "./CustomSection";

export default function Stack() {
  const stackNames = [
    "Android Jetpack Compose",
    "Flutter",
    "React",
    "TypeScript",
    "TailwindCSS",
    "Kotlin",
    "Dart",
    "MySQL",
  ];
  const stackIcons = [
    "src/assets/ic-compose.webp",
    "src/assets/ic-flutter.webp",
    "src/assets/ic-react.webp",
    "src/assets/ic-ts.webp",
    "src/assets/ic-tailwindcss.webp",
    "src/assets/ic-kotlin.webp",
    "src/assets/ic-dart.webp",
    "src/assets/ic-sql.webp",
  ];
  return (
    <CustomSection>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 w-full">
        {stackIcons.map((icon, index) => (
          <div
            key={index}
            className="h-16 p-2 my-2 flex flex-row items-center border-[1px] rounded-2xl transition-transform duration-300 transform hover:scale-[1.03] hover:border-[2px] hover:border-cyan-300 border-cyan-800 hover:text-cyan-300"
          >
            <img
              src={icon}
              className="w-6 h-6 max-md:w-8 max-md:h-8"
              alt={stackNames[index]}
            />
            <p className="text-sm ml-3">{stackNames[index]}</p>
          </div>
        ))}
      </div>
    </CustomSection>
  );
}
