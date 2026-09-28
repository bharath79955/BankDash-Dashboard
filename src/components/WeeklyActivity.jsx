const data = [
  {
    day: "Sat",
    deposit: 420,
    withdraw: 280,
  },
  {
    day: "Sun",
    deposit: 300,
    withdraw: 220,
  },
  {
    day: "Mon",
    deposit: 450,
    withdraw: 350,
  },
  {
    day: "Tue",
    deposit: 370,
    withdraw: 260,
  },
  {
    day: "Wed",
    deposit: 480,
    withdraw: 300,
  },
  {
    day: "Thu",
    deposit: 330,
    withdraw: 240,
  },
  {
    day: "Fri",
    deposit: 400,
    withdraw: 310,
  },
];

function WeeklyActivity() {
  return (
    <div className="rounded-[20px] bg-white p-5">

      <div className="mb-8 flex items-center justify-between">
        <h3 className="text-[20px] font-semibold">
          Weekly Activity
        </h3>

        <div className="flex gap-4 text-xs">
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#1814f3]" />
            Deposit
          </span>

          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#fa00ff]" />
            Withdraw
          </span>
        </div>
      </div>

      <div className="flex h-[250px] items-end justify-between gap-3">

        {data.map((item) => (
          <div
            key={item.day}
            className="flex h-full flex-1 flex-col items-center justify-end"
          >
            <div className="flex h-[210px] items-end gap-1">

              <div
                className="w-2 rounded-full bg-[#1814f3] sm:w-3"
                style={{
                  height: '${item.deposit / 2}px',
                }}
              />

              <div
                className="w-2 rounded-full bg-[#fa00ff] sm:w-3"
                style={{
                  height: '${item.withdraw / 2}px',
                }}
              />

            </div>

            <span className="mt-4 text-xs text-[#718096]">
              {item.day}
            </span>
          </div>
        ))}

      </div>
    </div>
  );
}

export default WeeklyActivity;