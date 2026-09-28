import { useMemo, useState } from "react";
import {
  DollarSign,
  TrendingUp,
  RefreshCw,
  Apple,
  Smartphone,
  Car,
  Search,
  X,
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
} from "lucide-react";

const investments = [
  {
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    returnValue: "+16%",
    icon: Apple,
    iconBg: "bg-[#ffe5ef]",
    iconColor: "text-[#ef76aa]",
    positive: true,
  },
  {
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    returnValue: "-4%",
    icon: Smartphone,
    iconBg: "bg-[#e6edff]",
    iconColor: "text-[#4774e9]",
    positive: false,
  },
  {
    name: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    returnValue: "+25%",
    icon: Car,
    iconBg: "bg-[#fff3d4]",
    iconColor: "text-[#f2ad2f]",
    positive: true,
  },
];

const stocks = [
  {
    number: "01.",
    name: "Trivago",
    price: "$520",
    returnValue: "+5%",
  },
  {
    number: "02.",
    name: "Canon",
    price: "$480",
    returnValue: "+10%",
  },
  {
    number: "03.",
    name: "Uber Food",
    price: "$350",
    returnValue: "-3%",
  },
  {
    number: "04.",
    name: "Nokia",
    price: "$940",
    returnValue: "+2%",
  },
  {
    number: "05.",
    name: "Tiktok",
    price: "$670",
    returnValue: "-12%",
  },
];

const yearlyPoints = [
  { year: "2016", value: 155 },
  { year: "2017", value: 90 },
  { year: "2018", value: 118 },
  { year: "2019", value: 42 },
  { year: "2020", value: 102 },
  { year: "2021", value: 68 },
];

const monthlyPoints = [
  { month: "Jan", value: 108 },
  { month: "Feb", value: 95 },
  { month: "Mar", value: 75 },
  { month: "Apr", value: 120 },
  { month: "May", value: 62 },
  { month: "Jun", value: 35 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 90 },
  { month: "Sep", value: 50 },
  { month: "Oct", value: 78 },
  { month: "Nov", value: 82 },
  { month: "Dec", value: 25 },
];

function StatCard({
  title,
  amount,
  icon: Icon,
  background,
  iconColor,
}) {
  return (
    <div className="flex h-[92px] items-center gap-4 rounded-[18px] bg-white px-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: background }}
      >
        <Icon
          size={23}
          strokeWidth={1.7}
          style={{ color: iconColor }}
        />
      </div>

      <div>
        <p className="text-[12px] text-[#8994aa]">{title}</p>

        <p className="mt-1 text-[20px] font-semibold text-[#252b4a]">
          {amount}
        </p>
      </div>
    </div>
  );
}

function YearlyChart() {
  const [selected, setSelected] = useState(null);

  const points = [
    [35, 155],
    [105, 90],
    [175, 118],
    [245, 42],
    [315, 102],
    [385, 68],
  ];

  const path = points
    .map(
      ([x, y], index) =>
        `${index === 0 ? "M" : "L"} ${x} ${y}`
    )
    .join(" ");

  return (
    <div>
      {selected && (
        <div className="mb-3 rounded-xl bg-[#f7f9fc] px-4 py-2 text-[11px] text-[#343b63]">
          <b>{selected.year}</b> — Investment value:{" "}
          <b>${selected.value.toLocaleString()}</b>
        </div>
      )}

      <div className="relative h-[205px] w-full">
        <div className="absolute left-0 top-0 flex h-[175px] flex-col justify-between text-[10px] text-[#91a0be]">
          <span>$40,000</span>
          <span>$30,000</span>
          <span>$20,000</span>
          <span>$10,000</span>
          <span>$0</span>
        </div>

        <svg
          viewBox="0 0 410 175"
          className="ml-12 h-[175px] w-[calc(100%-48px)]"
          preserveAspectRatio="none"
        >
          {[5, 40, 75, 110, 145].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="410"
              y2={y}
              stroke="#edf0f6"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          ))}

          <path
            d={path}
            fill="none"
            stroke="#f2ad2f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {points.map(([x, y], index) => (
            <circle
              key={index}
              cx={x}
              cy={y}
              r="5"
              fill="white"
              stroke="#f2ad2f"
              strokeWidth="2"
              className="cursor-pointer"
              onClick={() => setSelected(yearlyPoints[index])}
            />
          ))}
        </svg>

        <div className="ml-12 flex justify-between text-[10px] text-[#91a0be]">
          {yearlyPoints.map((item) => (
            <span key={item.year}>{item.year}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function MonthlyChart() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      {selected && (
        <div className="mb-3 rounded-xl bg-[#f7f9fc] px-4 py-2 text-[11px] text-[#343b63]">
          <b>{selected.month}</b> — Revenue:{" "}
          <b>${selected.value.toLocaleString()}</b>
        </div>
      )}

      <div className="relative h-[205px] w-full">
        <div className="absolute left-0 top-0 flex h-[175px] flex-col justify-between text-[10px] text-[#91a0be]">
          <span>$40,000</span>
          <span>$30,000</span>
          <span>$20,000</span>
          <span>$10,000</span>
          <span>$0</span>
        </div>

        <svg
          viewBox="0 0 410 175"
          className="ml-12 h-[175px] w-[calc(100%-48px)]"
          preserveAspectRatio="none"
        >
          {[5, 40, 75, 110, 145].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="410"
              y2={y}
              stroke="#edf0f6"
              strokeWidth="1"
              strokeDasharray="3 3"
            />
          ))}

          <path
            d="
              M 0 108
              C 15 95, 25 105, 38 90
              C 52 75, 65 82, 76 105
              C 90 132, 101 120, 112 90
              C 125 55, 138 62, 151 48
              C 165 33, 178 42, 190 27
              C 204 10, 220 42, 231 72
              C 243 100, 255 90, 267 68
              C 279 45, 291 50, 305 59
              C 320 68, 330 57, 344 78
              C 357 99, 369 100, 380 82
              C 393 62, 401 75, 410 25
            "
            fill="none"
            stroke="#4bd1c7"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {monthlyPoints.map((item, index) => {
            const x = (410 / (monthlyPoints.length - 1)) * index;

            return (
              <circle
                key={item.month}
                cx={x}
                cy={item.value}
                r="4"
                fill="white"
                stroke="#4bd1c7"
                strokeWidth="2"
                className="cursor-pointer"
                onClick={() => setSelected(item)}
              />
            );
          })}
        </svg>

        <div className="ml-12 flex justify-between text-[9px] text-[#91a0be]">
          {monthlyPoints.map((item) => (
            <span key={item.month}>{item.month}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InvestmentDetails({ item, onClose }) {
  if (!item) return null;

  const Icon = item.icon;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
      <div className="w-full max-w-[420px] rounded-[22px] bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="text-[18px] font-semibold text-[#343b63]">
            Investment Details
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[#f5f7fb] p-2 text-gray-500 hover:text-gray-800"
          >
            <X size={17} />
          </button>
        </div>

        <div className="mt-6 flex items-center gap-4 rounded-2xl bg-[#f7f9fc] p-4">
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-[15px] ${item.iconBg} ${item.iconColor}`}
          >
            <Icon size={26} />
          </div>

          <div>
            <p className="text-[15px] font-semibold text-[#252b43]">
              {item.name}
            </p>

            <p className="mt-1 text-[11px] text-[#91a0be]">
              {item.category}
            </p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-[#f7f9fc] p-4">
            <p className="text-[10px] text-[#91a0be]">
              Investment Value
            </p>

            <p className="mt-1 text-[16px] font-semibold text-[#252b43]">
              {item.value}
            </p>
          </div>

          <div className="rounded-xl bg-[#f7f9fc] p-4">
            <p className="text-[10px] text-[#91a0be]">
              Return Value
            </p>

            <p
              className={`mt-1 text-[16px] font-semibold ${
                item.positive
                  ? "text-[#20c9a3]"
                  : "text-[#ef718d]"
              }`}
            >
              {item.returnValue}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-[#1814f3] py-3 text-[12px] font-medium text-white transition hover:bg-[#100ce0]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Investments() {
  const [search, setSearch] = useState("");
  const [selectedInvestment, setSelectedInvestment] =
    useState(null);

  const filteredStocks = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return stocks;

    return stocks.filter((stock) =>
      `${stock.name} ${stock.price} ${stock.returnValue}`
        .toLowerCase()
        .includes(query)
    );
  }, [search]);

  return (
    <div className="min-h-full bg-[#f5f7fb] px-4 py-5 sm:px-6 lg:px-7">

      {/* Header */}
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-[21px] font-semibold text-[#343b63]">
            Investments
          </h1>

          <p className="mt-1 text-[11px] text-[#8994aa]">
            Track your investments and portfolio performance
          </p>
        </div>

        <div className="flex h-[40px] w-full max-w-[280px] items-center gap-2 rounded-full bg-white px-4 shadow-sm">
          <Search size={16} className="text-[#8994aa]" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stocks..."
            className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#9ba5b8]"
          />
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <StatCard
          icon={DollarSign}
          title="Total Invested Amount"
          amount="$150,000"
          background="#dff9f6"
          iconColor="#2fd0c4"
        />

        <StatCard
          icon={TrendingUp}
          title="Number of Investments"
          amount="1,250"
          background="#ffe3ef"
          iconColor="#ef76aa"
        />

        <StatCard
          icon={RefreshCw}
          title="Rate of Return"
          amount="+5.80%"
          background="#e6edff"
          iconColor="#4774e9"
        />
      </div>

      {/* Charts */}
      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-2">

        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343b5b]">
            Yearly Total Investment
          </h2>

          <div className="rounded-[18px] bg-white p-5 shadow-sm">
            <YearlyChart />
          </div>
        </section>

        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343b5b]">
            Monthly Revenue
          </h2>

          <div className="rounded-[18px] bg-white p-5 shadow-sm">
            <MonthlyChart />
          </div>
        </section>
      </div>

      {/* Investment + Stocks */}
      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.55fr_0.95fr]">

        {/* My Investment */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#343b5b]">
              My Investment
            </h2>

            <span className="text-[11px] text-[#8994aa]">
              3 Investments
            </span>
          </div>

          <div className="space-y-3">
            {investments.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  type="button"
                  key={item.name}
                  onClick={() => setSelectedInvestment(item)}
                  className="flex min-h-[75px] w-full items-center rounded-[17px] bg-white px-4 py-3 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div
                    className={`mr-4 flex h-12 w-12 shrink-0 items-center justify-center rounded-[13px] ${item.iconBg} ${item.iconColor}`}
                  >
                    <Icon size={23} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13px] font-medium text-[#252b43]">
                      {item.name}
                    </p>

                    <p className="mt-1 truncate text-[10px] text-[#91a0be]">
                      {item.category}
                    </p>
                  </div>

                  <div className="hidden w-[115px] text-left sm:block">
                    <p className="text-[13px] font-medium text-[#252b43]">
                      {item.value}
                    </p>

                    <p className="mt-1 text-[9px] text-[#91a0be]">
                      Investment Value
                    </p>
                  </div>

                  <div className="w-[65px] text-right">
                    <div
                      className={`flex items-center justify-end gap-1 text-[12px] font-medium ${
                        item.positive
                          ? "text-[#20c9a3]"
                          : "text-[#ef718d]"
                      }`}
                    >
                      {item.positive ? (
                        <ArrowUpRight size={13} />
                      ) : (
                        <ArrowDownRight size={13} />
                      )}

                      {item.returnValue}
                    </div>

                    <p className="mt-1 text-[9px] text-[#91a0be]">
                      Return
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Trending Stock */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#343b5b]">
              Trending Stock
            </h2>

            <BarChart3
              size={18}
              className="text-[#8994aa]"
            />
          </div>

          <div className="rounded-[18px] bg-white px-5 py-4 shadow-sm">

            <div className="grid grid-cols-[45px_1fr_65px_55px] border-b border-[#f0f1f5] pb-3 text-[10px] text-[#8b98b7]">
              <span>SL No</span>
              <span>Name</span>
              <span>Price</span>
              <span>Return</span>
            </div>

            {filteredStocks.length > 0 ? (
              filteredStocks.map((stock) => (
                <div
                  key={stock.number}
                  className="grid grid-cols-[45px_1fr_65px_55px] items-center border-b border-[#f5f6f8] py-3 text-[12px] last:border-0"
                >
                  <span className="text-[#252b43]">
                    {stock.number}
                  </span>

                  <span className="font-medium text-[#252b43]">
                    {stock.name}
                  </span>

                  <span className="text-[#252b43]">
                    {stock.price}
                  </span>

                  <span
                    className={
                      stock.returnValue.startsWith("+")
                        ? "text-[#35c6ad]"
                        : "text-[#ef718d]"
                    }
                  >
                    {stock.returnValue}
                  </span>
                </div>
              ))
            ) : (
              <div className="py-8 text-center text-[11px] text-[#9aa4b7]">
                No stocks found.
              </div>
            )}
          </div>
        </section>
      </div>

      {/* Modal */}
      <InvestmentDetails
        item={selectedInvestment}
        onClose={() => setSelectedInvestment(null)}
      />
    </div>
  );
}