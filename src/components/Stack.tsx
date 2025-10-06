import { PortfolioDataModel } from "../model/PortfolioDataModel";

type StackProps = Pick<PortfolioDataModel, "myStack">;

export default function Stack({ myStack }: StackProps) {
  return (
    <div className="w-full h-auto flex items-center justify-center p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {myStack.map((item, index) => (
          <div
            key={index}
            className="p-2 flex flex-row justify-between items-center rounded-2xl bg-onSecondary gap-2"
          >
            <img
              src={item.icon_url}
              className="w-[26px] h-[26px]"
              alt={item.name}
            />
            <p className="text-xs">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
