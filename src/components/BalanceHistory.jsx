import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jul", balance: 240 },
  { month: "Aug", balance: 300 },
  { month: "Sep", balance: 260 },
  { month: "Oct", balance: 380 },
  { month: "Nov", balance: 340 },
  { month: "Dec", balance: 450 },
];

function BalanceHistory() {
  return (
    <div className="rounded-[20px] bg-white p-5">

      <h3 className="mb-5 text-[20px] font-semibold">
        Balance History
      </h3>

      <div className="h-[270px]">

        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eeeeee"
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
            />

            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11 }}
            />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="balance"
              stroke="#1814f3"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>
    </div>
  );
}

export default BalanceHistory;