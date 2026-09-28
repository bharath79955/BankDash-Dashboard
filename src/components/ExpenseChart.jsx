import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "Entertainment",
    value: 30,
  },
  {
    name: "Bill Expense",
    value: 15,
  },
  {
    name: "Investment",
    value: 20,
  },
  {
    name: "Others",
    value: 35,
  },
];

const colors = [
  "#1814f3",
  "#fa00ff",
  "#343c6a",
  "#ffbb38",
];

function ExpenseChart() {
  return (
    <div className="rounded-[20px] bg-white p-5">

      <h3 className="mb-5 text-[20px] font-semibold">
        Expense Statistics
      </h3>

      <div className="relative h-[250px]">

        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={65}
              outerRadius={95}
              paddingAngle={3}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={entry.name}
                  fill={colors[index]}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="text-2xl font-bold">
              100%
            </p>

            <p className="text-xs text-[#718096]">
              Expenses
            </p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-3">

        {data.map((item, index) => (
          <div
            key={item.name}
            className="flex items-center gap-2"
          >
            <span
              className="h-2.5 w-2.5 rounded-full"
              style={{
                backgroundColor: colors[index],
              }}
            />

            <span className="text-xs text-[#718096]">
              {item.name}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ExpenseChart;