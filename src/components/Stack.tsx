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
  const stackItems = [
    { name: "Jetpack Compose", icon: composeIcon },
    { name: "Flutter", icon: flutterIcon },
    { name: "React", icon: reactIcon },
    { name: "TailwindCSS", icon: tailwindIcon },
    { name: "Dart", icon: dartIcon },
    { name: "Kotlin", icon: kotlinIcon },
    { name: "MySQL", icon: sqlIcon },
    { name: "TypeScript", icon: tsIcon }, 
  ];

  return (
    <CustomSection>
      <div className="flex-wrap w-full">
        {stackItems.map((item, index) => (
          <div
            key={index}
            className="h-auto p-2 m-1 inline-flex items-center border-[1px] rounded-2xl border-cyan-800"
          >
            <img src={item.icon} className="w-6 h-6" alt={item.name} />
            <p className="text-xs mx-2">{item.name}</p>
          </div>
        ))}
      </div>
    </CustomSection>
  );
}
