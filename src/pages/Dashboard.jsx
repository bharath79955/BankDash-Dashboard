import { motion } from "framer-motion";
import {
  Search,
  Settings,
  Bell,
  ChevronRight,
  Send,
  CreditCard,
} from "lucide-react";

const cards = [
  {
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 ** ** 1234",
    active: true,
  },
  {
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 ** ** 1234",
    active: false,
  },
];

const transactions = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "-$850",
    type: "card",
    negative: true,
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    type: "paypal",
    negative: false,
  },
  {
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: "+$5,400",
    type: "person",
    negative: false,
  },
];

const weeklyData = [
  { day: "Sat", deposit: 470, withdraw: 240 },
  { day: "Sun", deposit: 350, withdraw: 130 },
  { day: "Mon", deposit: 330, withdraw: 260 },
  { day: "Tue", deposit: 470, withdraw: 370 },
  { day: "Wed", deposit: 150, withdraw: 240 },
  { day: "Thu", deposit: 390, withdraw: 250 },
  { day: "Fri", deposit: 400, withdraw: 340 },
];

const people = [
  {
    name: "Livia Bator",
    role: "CEO",
    image: "https://i.pravatar.cc/100?img=47",
  },
  {
    name: "Randy Press",
    role: "Director",
    image: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Workman",
    role: "Designer",
    image: "https://i.pravatar.cc/100?img=33",
  },
];

function BankCard({ card }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`relative h-[180px] w-full max-w-[270px] overflow-hidden rounded-[22px] p-5 shadow-sm ${
        card.active
          ? "bg-gradient-to-br from-[#4b49f5] via-[#3734ed] to-[#211fe7] text-white"
          : "border border-gray-200 bg-white text-[#343b63]"
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p
            className={`text-[10px] ${
              card.active ? "text-white/70" : "text-gray-400"
            }`}
          >
            Balance
          </p>

          <p className="mt-0.5 text-[16px] font-semibold">
            {card.balance}
          </p>
        </div>

        <CreditCard
          size={27}
          strokeWidth={1.5}
          className={card.active ? "text-white" : "text-gray-700"}
        />
      </div>

      <div className="mt-6 flex gap-12">
        <div>
          <p
            className={`text-[9px] ${
              card.active ? "text-white/60" : "text-gray-400"
            }`}
          >
            CARD HOLDER
          </p>
          <p className="mt-1 text-[11px] font-medium">
            {card.holder}
          </p>
        </div>

        <div>
          <p
            className={`text-[9px] ${
              card.active ? "text-white/60" : "text-gray-400"
            }`}
          >
            VALID THRU
          </p>
          <p className="mt-1 text-[11px] font-medium">
            {card.valid}
          </p>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 py-4 ${
          card.active
            ? "bg-white/10"
            : "border-t border-gray-100 bg-white"
        }`}
      >
        <span className="text-[15px] font-medium tracking-wide">
          {card.number}
        </span>

        <div
          className={`flex -space-x-2 ${
            card.active ? "text-white" : "text-gray-300"
          }`}
        >
          <span className="h-6 w-6 rounded-full bg-current opacity-70" />
          <span className="h-6 w-6 rounded-full bg-current opacity-50" />
        </div>
      </div>
    </motion.div>
  );
}

function RecentTransactions() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-[17px] font-semibold text-[#343b63]">
          Recent Transaction
        </h2>
      </div>

      <div className="rounded-[18px] bg-white px-5 py-3 shadow-sm">
        {transactions.map((item, index) => (
          <motion.div
            key={item.title}
            whileHover={{ x: 3 }}
            className={`flex items-center justify-between py-3 ${
              index !== transactions.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full ${
                  item.type === "card"
                    ? "bg-yellow-50 text-yellow-500"
                    : item.type === "paypal"
                    ? "bg-blue-50 text-blue-500"
                    : "bg-teal-50 text-teal-500"
                }`}
              >
                {item.type === "card" && <CreditCard size={18} />}
                {item.type === "paypal" && (
                  <span className="text-lg font-bold">P</span>
                )}
                {item.type === "person" && (
                  <span className="text-lg">◎</span>
                )}
              </div>

              <div>
                <p className="text-[12px] font-semibold text-[#343b63]">
                  {item.title}
                </p>
                <p className="mt-1 text-[10px] text-gray-400">
                  {item.date}
                </p>
              </div>
            </div>

            <span
              className={`text-[12px] font-medium ${
                item.negative ? "text-red-400" : "text-teal-400"
              }`}
            >
              {item.amount}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function WeeklyActivity() {
  const bars = [
    { day: "Sat", blue: 130, green: 70 },
    { day: "Sun", blue: 100, green: 40 },
    { day: "Mon", blue: 95, green: 78 },
    { day: "Tue", blue: 130, green: 105 },
    { day: "Wed", blue: 45, green: 70 },
    { day: "Thu", blue: 108, green: 70 },
    { day: "Fri", blue: 112, green: 95 },
  ];

  return (
    <div className="w-full">
      
      {/* Heading */}
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-[18px] font-semibold text-[#20284d]">
          Weekly Activity
        </h2>
      </div>

      {/* Chart Card */}
      <div className="w-full rounded-[20px] bg-white p-5">

        {/* Legend */}
        <div className="mb-4 flex justify-end gap-6">
          
          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className="h-3 w-3 rounded-full bg-[#20c9b3]" />
            Deposit
          </div>

          <div className="flex items-center gap-2 text-[11px] text-gray-400">
            <span className="h-3 w-3 rounded-full bg-[#f27ba7]" />
            Withdraw
          </div>

        </div>

        {/* Chart */}
        <div className="relative h-[190px] w-full">

          {/* Horizontal grid lines */}
          <div className="absolute left-0 right-0 top-0 border-t border-gray-100" />
          <div className="absolute left-0 right-0 top-[25%] border-t border-gray-100" />
          <div className="absolute left-0 right-0 top-[50%] border-t border-gray-100" />
          <div className="absolute left-0 right-0 top-[75%] border-t border-gray-100" />
          <div className="absolute bottom-0 left-0 right-0 border-t border-gray-100" />

          {/* Bars */}
          <div className="absolute inset-0 flex items-end justify-between px-4">

            {bars.map((item) => (
              <div
                key={item.day}
                className="flex h-full flex-1 items-end justify-center"
              >
                <div className="flex items-end gap-[6px]">

                  {/* Deposit */}
                  <div
                    className="w-[10px] rounded-full bg-[#2925e9]"
                    style={{
                      height: `${item.blue}px`,
                    }}
                  />

                  {/* Withdraw */}
                  <div
                    className="w-[10px] rounded-full bg-[#20c9b3]"
                    style={{
                      height: `${item.green}px`,
                    }}
                  />

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* Days */}
        <div className="mt-3 flex justify-between px-4">
          {bars.map((item) => (
            <span
              key={item.day}
              className="flex-1 text-center text-[10px] text-gray-400"
            >
              {item.day}
            </span>
          ))}
        </div>

      </div>
    </div>
  );
}

function ExpenseStatistics() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[17px] font-semibold text-[#343b63]">
          Expense Statistics
        </h2>
      </div>

      <div className="flex h-[245px] items-center justify-center rounded-[18px] bg-white shadow-sm">
        <div
          className="relative h-[185px] w-[185px] rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, #2926e8 0deg 126deg, white 126deg 132deg, #fa08c9 132deg 204deg, white 204deg 210deg, #343966 210deg 318deg, white 318deg 324deg, #ff7900 324deg 360deg)",
          }}
        >
          <div className="absolute inset-[3px] rounded-full bg-transparent" />

          <div className="absolute left-[50%] top-[28%] -translate-x-1/2 text-center text-white">
            <p className="text-[12px] font-bold">30%</p>
            <p className="text-[9px] font-medium">Entertainment</p>
          </div>

          <div className="absolute left-[25%] top-[55%] text-center text-white">
            <p className="text-[12px] font-bold">20%</p>
            <p className="text-[9px] font-medium">Investment</p>
          </div>

          <div className="absolute bottom-[22%] right-[15%] text-center text-white">
            <p className="text-[12px] font-bold">35%</p>
            <p className="text-[9px] font-medium">Others</p>
          </div>

          <div className="absolute right-[5%] top-[44%] text-center text-white">
            <p className="text-[11px] font-bold">15%</p>
            <p className="text-[8px] font-medium">Bill Expense</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuickTransfer() {
  const [first, second, third] = people;

  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[17px] font-semibold text-[#343b63]">
          Quick Transfer
        </h2>
      </div>

      <div className="h-[210px] rounded-[18px] bg-white p-5 shadow-sm">
        <div className="flex items-center justify-between">
          {[first, second, third].map((person) => (
            <div
              key={person.name}
              className="text-center"
            >
              <img
                src={person.image}
                alt={person.name}
                className="mx-auto h-12 w-12 rounded-full object-cover"
              />

              <p className="mt-2 text-[10px] font-semibold text-[#343b63]">
                {person.name}
              </p>

              <p className="mt-1 text-[9px] text-gray-400">
                {person.role}
              </p>
            </div>
          ))}

          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md">
            <ChevronRight size={18} className="text-gray-500" />
          </button>
        </div>

        <div className="mt-7 flex items-center gap-3">
          <span className="text-[10px] text-gray-400">
            Write Amount
          </span>

          <div className="flex flex-1 overflow-hidden rounded-full bg-[#f1f4fa]">
            <input
              type="text"
              defaultValue="525.50"
              className="min-w-0 flex-1 bg-transparent px-5 py-3 text-[11px] text-gray-500 outline-none"
            />

            <button className="flex items-center gap-2 rounded-full bg-[#2825e8] px-5 py-3 text-[11px] font-medium text-white">
              Send
              <Send size={13} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BalanceHistory() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-[17px] font-semibold text-[#343b63]">
          Balance History
        </h2>
      </div>

      <div className="h-[210px] rounded-[18px] bg-white p-5 shadow-sm">
        <svg
          viewBox="0 0 600 180"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="balanceFill"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#3d3bea"
                stopOpacity="0.25"
              />
              <stop
                offset="100%"
                stopColor="#3d3bea"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          {[30, 70, 110, 150].map((y) => (
            <line
              key={y}
              x1="20"
              x2="580"
              y1={y}
              y2={y}
              stroke="#edf0f6"
              strokeDasharray="4 4"
            />
          ))}

          <path
            d="M20 145
              C55 80 80 100 110 115
              C135 128 150 60 180 65
              C215 70 220 35 250 38
              C280 40 275 125 310 132
              C345 140 340 65 375 75
              C410 85 405 130 440 138
              C475 146 475 45 510 55
              C535 62 555 78 580 70
              L580 170
              L20 170 Z"
            fill="url(#balanceFill)"
          />

          <path
            d="M20 145
              C55 80 80 100 110 115
              C135 128 150 60 180 65
              C215 70 220 35 250 38
              C280 40 275 125 310 132
              C345 140 340 65 375 75
              C410 85 405 130 440 138
              C475 146 475 45 510 55
              C535 62 555 78 580 70"
            fill="none"
            stroke="#2825e8"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {[
            ["Jul", 20],
            ["Aug", 105],
            ["Sep", 185],
            ["Oct", 265],
            ["Nov", 350],
            ["Dec", 430],
            ["Jan", 510],
          ].map(([month, x]) => (
            <text
              key={month}
              x={x}
              y="178"
              fontSize="10"
              fill="#9aa3b7"
            >
              {month}
            </text>
          ))}
        </svg>
      </div>
    </section>
  );
}

export default function Dashboard() {
  return (
    <div className="min-h-full bg-[#f5f7fb]">
     

      {/* Main */}
      <main className="p-5 md:p-7">
        {/* Cards + Transactions */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.65fr_0.75fr]">
          <section>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[17px] font-semibold text-[#343b63]">
                My Cards
              </h2>

              <button className="text-[11px] font-medium text-[#343b63] hover:text-[#2825e8]">
                See All
              </button>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {cards.map((card, index) => (
                <BankCard key={index} card={card} />
              ))}
            </div>
          </section>

          <RecentTransactions />
        </div>

        {/* Weekly + Expense */}
        <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-[1.65fr_0.75fr]">
          <WeeklyActivity />
          <ExpenseStatistics />
        </div>

        {/* Quick Transfer + Balance */}
        <div className="mt-7 grid grid-cols-1 gap-6 xl:grid-cols-[0.85fr_1.35fr]">
          <QuickTransfer />
          <BalanceHistory />
        </div>
      </main>
    </div>
  );
}