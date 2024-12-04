import { myData } from "../data/Data";
import CustomSection from "./CustomSection";

export default function Stack() {

  return (
    <CustomSection>
      <div className="w-full h-auto flex items-center justify-center">
        <div className="flex flex-wrap justify-center gap-2">
          {myData.myStack.map((item, index) => (
            <div
              key={index}
              className="h-auto p-2 m-1 flex flex-row justify-between items-center border rounded-2xl border-sky-800"
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
