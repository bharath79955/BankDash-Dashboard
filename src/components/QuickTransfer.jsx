import { Send } from "lucide-react";

const users = [
  {
    name: "Suresh",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Jessica",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Thomas",
    role: "Developer",
    image: "https://i.pravatar.cc/100?img=11",
  },
];

function QuickTransfer() {
  return (
    <div className="rounded-[20px] bg-white p-5">

      <h3 className="text-[20px] font-semibold">
        Quick Transfer
      </h3>

      <div className="mt-6 flex items-center gap-5 overflow-x-auto pb-2">

        {users.map((user) => (
          <div
            key={user.name}
            className="min-w-[75px] text-center"
          >
            <img
              src={user.image}
              alt={user.name}
              className="mx-auto h-12 w-12 rounded-full object-cover"
            />

            <p className="mt-2 text-xs font-medium">
              {user.name}
            </p>

            <p className="mt-1 text-[10px] text-[#718096]">
              {user.role}
            </p>
          </div>
        ))}

        <button className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#e5e7ef]">
          →
        </button>

      </div>

      <div className="mt-6 flex gap-3">

        <div className="flex flex-1 items-center rounded-full bg-[#f5f7fb] px-4">
          <input
            type="number"
            placeholder="Write Amount"
            className="w-full bg-transparent py-3 text-sm outline-none"
          />
        </div>

        <button className="flex items-center gap-2 rounded-full bg-[#1814f3] px-5 py-3 text-sm font-medium text-white">
          Send
          <Send size={15} />
        </button>

      </div>
    </div>
  );
}

export default QuickTransfer;