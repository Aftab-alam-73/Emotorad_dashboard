import { CardType } from "../types";
const Card = ({ data }: { data: CardType }) => {
  return (
    <div className="shadow border border-slate-300 min-w-[200px] p-4   rounded-xl flex flex-col gap-1">
      <div className="flex flex-col ">
        <span
          className={`w-[35px] h-[35px]  flex justify-center items-center rounded-full text-white`}
          style={{ backgroundColor: data.color }}
        >
          <data.icon />
        </span>

        <h5 className="font-bold">{data.title}</h5>
      </div>
      <div className="flex justify-between">
        <p className="font-extrabold text-2xl">{data.value}</p>
        <span className="bg-green-400 px-3 py-1 rounded-3xl">
          {data.percentage}
        </span>
      </div>
    </div>
  );
};

export default Card;
