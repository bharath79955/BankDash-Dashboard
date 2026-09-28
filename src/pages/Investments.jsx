import React from "react";
import {
  DollarSign,
  TrendingUp,
  RefreshCw,
  Apple,
  Smartphone,
  Car,
} from "lucide-react";

const investments = [
  {
    name: "Apple Store",
    category: "E-commerce, Marketplace",
    value: "$54,000",
    returnValue: "+16%",
    icon: Apple,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-500",
    returnColor: "text-teal-500",
  },
  {
    name: "Samsung Mobile",
    category: "E-commerce, Marketplace",
    value: "$25,300",
    returnValue: "-4%",
    icon: Smartphone,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    returnColor: "text-red-400",
  },
  {
    name: "Tesla Motors",
    category: "Electric Vehicles",
    value: "$8,200",
    returnValue: "+25%",
    icon: Car,
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    returnColor: "text-teal-500",
  },
];

const stocks = [
  ["01.", "Trivago", "$520", "+5%"],
  ["02.", "Canon", "$480", "+10%"],
  ["03.", "Uber Food", "$350", "-3%"],
  ["04.", "Nokia", "$940", "+2%"],
  ["05.", "Tiktok", "$670", "-12%"],
];

function InvestmentCard({ icon: Icon, title, value, color }) {
  return (
    <div className="flex items-center gap-4 rounded-2xl bg-white px-5 py-4 shadow-sm">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${color}`}
      >
        <Icon size={23} />
      </div>

      <div className="min-w-0">
        <p className="text-[13px] text-[#8b98b7]">{title}</p>
        <p className="mt-1 text-[16px] font-semibold text-[#242b49]">
          {value}
        </p>
      </div>
    </div>
  );
}

function YearlyChart() {
  const points = [
    [35, 155],
    [105, 90],
    [175, 118],
    [245, 42],
    [315, 102],
    [385, 68],
  ];

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"} ${point[0]} ${point[1]}`)
    .join(" ");

  return (
    <div className="relative h-[190px] w-full">
      <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px] text-[#91a0be]">
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
            r="4"
            fill="white"
            stroke="#f2ad2f"
            strokeWidth="2"
          />
        ))}
      </svg>

      <div className="ml-12 flex justify-between text-[10px] text-[#91a0be]">
        <span>2016</span>
        <span>2017</span>
        <span>2018</span>
        <span>2019</span>
        <span>2020</span>
        <span>2021</span>
      </div>
    </div>
  );
}

function MonthlyChart() {
  return (
    <div className="relative h-[190px] w-full">
      <div className="absolute left-0 top-0 flex h-full flex-col justify-between text-[10px] text-[#91a0be]">
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
      </svg>

      <div className="ml-12 flex justify-between text-[10px] text-[#91a0be]">
        <span>2016</span>
        <span>2017</span>
        <span>2018</span>
        <span>2019</span>
        <span>2020</span>
        <span>2021</span>
      </div>
    </div>
  );
}

function Investments() {
  return (
    <div className="min-h-full bg-[#f5f6fa] px-4 py-5 sm:px-6 lg:px-8">
      {/* Top Statistics */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <InvestmentCard
          icon={DollarSign}
          title="Total Invested Amount"
          value="$150,000"
          color="bg-[#dff9f6] text-[#2fd0c4]"
        />

        <InvestmentCard
          icon={TrendingUp}
          title="Number of Investments"
          value="1,250"
          color="bg-[#ffe3ef] text-[#ef76aa]"
        />

        <InvestmentCard
          icon={RefreshCw}
          title="Rate of Return"
          value="+5.80%"
          color="bg-[#e6edff] text-[#4774e9]"
        />
      </div>

      {/* Charts */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2">
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

      {/* Bottom Section */}
      <div className="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-[1.55fr_0.95fr]">
        {/* My Investment */}
        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343b5b]">
            My Investment
          </h2>

          <div className="space-y-3">
            {investments.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="flex min-h-[69px] items-center rounded-[17px] bg-white px-4 py-3 shadow-sm"
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
                    <p className="mt-1 truncate text-[11px] text-[#91a0be]">
                      {item.category}
                    </p>
                  </div>

                  <div className="w-[115px] text-left">
                    <p className="text-[13px] font-medium text-[#252b43]">
                      {item.value}
                    </p>
                    <p className="mt-1 text-[10px] text-[#91a0be]">
                      Investment Value
                    </p>
                  </div>

                  <div className="w-[70px] text-right">
                    <p
                      className={`text-[12px] font-medium ${item.returnColor}`}
                    >
                      {item.returnValue}
                    </p>
                    <p className="mt-1 text-[10px] text-[#91a0be]">
                      Return Value
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Trending Stock */}
        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343b5b]">
            Trending Stock
          </h2>

          <div className="rounded-[18px] bg-white px-5 py-4 shadow-sm">
            <div className="grid grid-cols-[45px_1fr_65px_55px] border-b border-[#f0f1f5] pb-3 text-[11px] text-[#8b98b7]">
              <span>SL No</span>
              <span>Name</span>
              <span>Price</span>
              <span>Return</span>
            </div>

            <div>
              {stocks.map(([number, name, price, returnValue]) => (
                <div
                  key={number}
                  className="grid grid-cols-[45px_1fr_65px_55px] items-center py-3 text-[12px]"
                >
                  <span className="text-[#252b43]">{number}</span>

                  <span className="text-[#252b43]">{name}</span>

                  <span className="text-[#252b43]">{price}</span>

                  <span
                    className={
                      returnValue.startsWith("+")
                        ? "text-[#35c6ad]"
                        : "text-[#ef718d]"
                    }
                  >
                    {returnValue}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Investments;