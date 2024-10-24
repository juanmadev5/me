import CustomSection from "./CustomSection";
import ProvideData from "../data/Data";

export default function Stack() {
  const data = ProvideData();

  return (
    <CustomSection>
      <div className="w-full h-auto flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {data.myData.myStack.map((item, index) => (
            <div
              key={index}
              className="h-auto p-2 m-1 inline-flex items-center border-[1px] rounded-2xl border-cyan-800"
            >
              <img src={item.icon} className="w-6 h-6" alt={item.name} />
              <p className="text-xs mx-2">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </CustomSection>
  );
}
