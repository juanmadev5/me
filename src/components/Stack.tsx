import CustomSection from "./CustomSection";
import composeIcon from "../assets/ic-compose.webp";
import flutterIcon from "../assets/ic-flutter.webp";
import reactIcon from "../assets/ic-react.webp";
import tsIcon from "../assets/ic-ts.webp";
import tailwindIcon from "../assets/ic-tailwindcss.webp";
import kotlinIcon from "../assets/ic-kotlin.webp";
import dartIcon from "../assets/ic-dart.webp";
import sqlIcon from "../assets/ic-sql.webp";

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
    composeIcon,
    flutterIcon,
    reactIcon,
    tsIcon,
    tailwindIcon,
    kotlinIcon,
    dartIcon,
    sqlIcon,
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
