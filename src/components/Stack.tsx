import { data } from "../app/Data";

export default function Stack() {

  return (
    <div className="w-full h-auto flex items-center justify-center p-4">
      <div className="flex flex-wrap justify-center gap-2">
        {data.myStack.map((item, index) => (
          <div
            key={index}
            className="p-2 m-1 flex flex-row justify-between items-center border rounded-2xl border-onBackground gap-2"
          >
            <img
              src={item.icon}
              className={item.name.toLowerCase() === "kotlin" ? "w-4 h-4 tracking-wider ml-1" : "w-6 h-6 tracking-wider ml-1"}
              alt={item.name}
            />
            <p className="text-xs mr-1">{item.name}</p>
          </div>
        ))}

      </div>
    </div>
  );
}
