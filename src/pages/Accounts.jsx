import { useMemo, useState } from "react";
import {
  Wallet,
  DollarSign,
  CreditCard,
  PiggyBank,
  Wrench,
  User,
  ShoppingBag,
  Gamepad2,
  Apple,
  Search,
  ChevronRight,
  X,
} from "lucide-react";

const PROFILE_IMAGE = "https://i.pravatar.cc/100?img=32";

const transactions = [
  {
    name: "Spotify Subscription",
    date: "25 Jan 2021",
    type: "Shopping",
    card: "1234 **",
    status: "Pending",
    amount: "-$150",
    icon: ShoppingBag,
    bg: "#dff9f5",
    color: "#20c9b3",
  },
  {
    name: "Mobile Service",
    date: "25 Jan 2021",
    type: "Service",
    card: "1234 **",
    status: "Completed",
    amount: "-$340",
    icon: Wrench,
    bg: "#e8edff",
    color: "#6178e8",
  },
  {
    name: "Emily Wilson",
    date: "25 Jan 2021",
    type: "Transfer",
    card: "1234 **",
    status: "Completed",
    amount: "+$780",
    icon: User,
    bg: "#ffe5ef",
    color: "#ef7da5",
  },
];

const invoices = [
  {
    name: "Apple Store",
    time: "5h ago",
    amount: "$450",
    icon: Apple,
    bg: "#dff9f5",
    color: "#20c9b3",
  },
  {
    name: "Michael",
    time: "2 days ago",
    amount: "$160",
    icon: User,
    bg: "#fff4d5",
    color: "#f3b52f",
  },
  {
    name: "Playstation",
    time: "5 days ago",
    amount: "$1085",
    icon: Gamepad2,
    bg: "#e7ecff",
    color: "#6178e8",
  },
  {
    name: "William",
    time: "10 days ago",
    amount: "$90",
    icon: User,
    bg: "#ffe5ef",
    color: "#ef7da5",
  },
];

const chartData = [
  { day: "Sat", debit: 105, credit: 180 },
  { day: "Sun", debit: 80, credit: 145 },
  { day: "Mon", debit: 75, credit: 100 },
  { day: "Tue", debit: 165, credit: 90 },
  { day: "Wed", debit: 120, credit: 170 },
  { day: "Thu", debit: 125, credit: 80 },
  { day: "Fri", debit: 140, credit: 175 },
];

function StatCard({
  title,
  amount,
  icon: Icon,
  background,
  iconColor,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[92px] w-full items-center gap-4 rounded-[18px] bg-white px-5 text-left transition hover:-translate-y-1 hover:shadow-md"
    >
      <div
        className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full"
        style={{ backgroundColor: background }}
      >
        <Icon
          size={22}
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
    </button>
  );
}

function MyCard({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="h-[182px] w-full overflow-hidden rounded-[20px] bg-gradient-to-br from-[#4c7cff] to-[#3568ed] text-left text-white transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] text-white/70">Balance</p>

            <p className="mt-1 text-[16px] font-medium">
              $5,756
            </p>
          </div>

          <CreditCard size={29} strokeWidth={1.5} />
        </div>

        <div className="mt-6 flex gap-12">
          <div>
            <p className="text-[8px] text-white/60">
              CARD HOLDER
            </p>

            <p className="mt-1 text-[11px]">
              Eddy Cusuma
            </p>
          </div>

          <div>
            <p className="text-[8px] text-white/60">
              VALID THRU
            </p>

            <p className="mt-1 text-[11px]">
              12/22
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-white/10 px-5 py-4">
        <span className="text-[15px] font-medium tracking-wide">
          3778 ** ** 1234
        </span>

        <div className="flex -space-x-3">
          <div className="h-7 w-7 rounded-full bg-white/60" />
          <div className="h-7 w-7 rounded-full bg-white/40" />
        </div>
      </div>
    </button>
  );
}

function LastTransaction({ onTransactionClick }) {
  return (
    <div>
      <h2 className="mb-4 text-[17px] font-semibold text-[#343b63]">
        Last Transaction
      </h2>

      <div className="rounded-[18px] bg-white px-5">
        {transactions.map((item, index) => {
          const Icon = item.icon;

          return (
            <button
              type="button"
              key={item.name}
              onClick={() => onTransactionClick(item)}
              className={`grid w-full grid-cols-[1.7fr_1fr_0.9fr_0.9fr_0.7fr] items-center py-3 text-left transition hover:bg-[#fafbff] ${
                index !== transactions.length - 1
                  ? "border-b border-[#f0f2f6]"
                  : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-[42px] w-[42px] items-center justify-center rounded-full"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon size={18} style={{ color: item.color }} />
                </div>

                <div>
                  <p className="text-[12px] font-medium text-[#343b63]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-[9px] text-[#9aa4b7]">
                    {item.date}
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-[#8995ad]">
                {item.type}
              </span>

              <span className="text-[11px] text-[#8995ad]">
                {item.card}
              </span>

              <span className="text-[11px] text-[#8995ad]">
                {item.status}
              </span>

              <span
                className={`text-right text-[12px] font-medium ${
                  item.amount.startsWith("-")
                    ? "text-[#ef7192]"
                    : "text-[#20c9a3]"
                }`}
              >
                {item.amount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function DebitCreditChart() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <h2 className="mb-4 text-[17px] font-semibold text-[#343b63]">
        Debit & Credit Overview
      </h2>

      <div className="rounded-[18px] bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[12px] text-[#8190aa]">
            <span className="font-medium text-[#4f5d7b]">
              $7,560
            </span>{" "}
            Debited &{" "}
            <span className="font-medium text-[#4f5d7b]">
              $5,420
            </span>{" "}
            Credited in this Week
          </p>

          <div className="flex gap-5">
            <div className="flex items-center gap-2 text-[10px] text-[#8994aa]">
              <span className="h-3 w-3 rounded-[3px] bg-[#3031e8]" />
              Debit
            </div>

            <div className="flex items-center gap-2 text-[10px] text-[#8994aa]">
              <span className="h-3 w-3 rounded-[3px] bg-[#f5a313]" />
              Credit
            </div>
          </div>
        </div>

        {selected && (
          <div className="mt-3 rounded-xl bg-[#f7f9fc] px-4 py-2 text-[11px] text-[#343b63]">
            <b>{selected.day}</b> — Debit: ${selected.debit} | Credit: $
            {selected.credit}
          </div>
        )}

        <div className="relative mt-4 h-[205px]">
          {[0, 25, 50, 75, 100].map((position) => (
            <div
              key={position}
              className="absolute left-0 right-0 border-t border-[#f0f2f6]"
              style={{ top: `${position}%` }}
            />
          ))}

          <div className="absolute inset-0 flex items-end justify-between px-2">
            {chartData.map((item) => (
              <button
                type="button"
                key={item.day}
                onClick={() => setSelected(item)}
                className="flex h-full flex-1 items-end justify-center"
              >
                <div className="flex items-end gap-[7px]">
                  <div
                    className="w-[22px] rounded-t-[8px] bg-[#3031e8] transition hover:opacity-70"
                    style={{ height: `${item.debit}px` }}
                  />

                  <div
                    className="w-[22px] rounded-t-[8px] bg-[#f5a313] transition hover:opacity-70"
                    style={{ height: `${item.credit}px` }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-2 flex">
          {chartData.map((item) => (
            <span
              key={item.day}
              className="flex-1 text-center text-[10px] text-[#8995ad]"
            >
              {item.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function InvoicesSent({ onInvoiceClick }) {
  return (
    <div>
      <h2 className="mb-4 text-[17px] font-semibold text-[#343b63]">
        Invoices Sent
      </h2>

      <div className="rounded-[18px] bg-white px-5 py-3">
        {invoices.map((item) => {
          const Icon = item.icon;

          return (
            <button
              type="button"
              key={item.name}
              onClick={() => onInvoiceClick(item)}
              className="flex w-full items-center justify-between rounded-xl py-3 text-left transition hover:bg-[#fafbff]"
            >
              <div className="flex items-center gap-3">
                <div
                  className="flex h-[45px] w-[45px] items-center justify-center rounded-full"
                  style={{ backgroundColor: item.bg }}
                >
                  <Icon size={20} style={{ color: item.color }} />
                </div>

                <div>
                  <p className="text-[12px] text-[#737e96]">
                    {item.name}
                  </p>

                  <p className="mt-1 text-[9px] text-[#a0a8b8]">
                    {item.time}
                  </p>
                </div>
              </div>

              <span className="text-[11px] text-[#8190aa]">
                {item.amount}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function Popup({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-5">
      <div className="w-full max-w-[380px] rounded-[22px] bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-[18px] font-semibold text-[#343b63]">
            Details
          </h3>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[#f5f7fb] p-2 text-gray-500 hover:text-gray-800"
          >
            <X size={17} />
          </button>
        </div>

        <div className="mt-5 rounded-2xl bg-[#f7f9fc] p-4">
          <p className="text-[14px] font-semibold text-[#343b63]">
            {data.name || data.title}
          </p>

          {data.date && (
            <p className="mt-2 text-[11px] text-gray-400">
              Date: {data.date}
            </p>
          )}

          {data.status && (
            <p className="mt-2 text-[11px] text-gray-400">
              Status: {data.status}
            </p>
          )}

          {data.amount && (
            <p className="mt-2 text-[14px] font-semibold text-[#343b63]">
              Amount: {data.amount}
            </p>
          )}

          {data.time && (
            <p className="mt-2 text-[11px] text-gray-400">
              {data.time}
            </p>
          )}
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-xl bg-[#1814f3] py-3 text-[12px] font-medium text-white hover:bg-[#100ce0]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default function Accounts() {
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const filteredTransactions = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return showAll ? [...transactions, ...transactions] : transactions;
    }

    return transactions.filter((item) =>
      `${item.name} ${item.type} ${item.card} ${item.status}`
        .toLowerCase()
        .includes(query)
    );
  }, [search, showAll]);

  const handleStatClick = (title, amount) => {
    setPopup({
      title,
      name: title,
      amount,
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      {/* MAIN */}

      <main className="p-5 md:p-7">

        {/* SEARCH */}

        <div className="mb-5 flex justify-end">
          <div className="flex h-[40px] w-full max-w-[280px] items-center gap-2 rounded-full bg-white px-4 shadow-sm">
            <Search size={17} className="text-[#8994aa]" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search accounts..."
              className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#9ba5b8]"
            />
          </div>
        </div>

        {/* TOP CARDS */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="My Balance"
            amount="$12,750"
            icon={Wallet}
            background="#fff3d4"
            iconColor="#f5b632"
            onClick={() =>
              handleStatClick("My Balance", "$12,750")
            }
          />

          <StatCard
            title="Income"
            amount="$5,600"
            icon={DollarSign}
            background="#e7edff"
            iconColor="#5570e8"
            onClick={() =>
              handleStatClick("Income", "$5,600")
            }
          />

          <StatCard
            title="Expense"
            amount="$3,460"
            icon={CreditCard}
            background="#ffe5ef"
            iconColor="#ed78a2"
            onClick={() =>
              handleStatClick("Expense", "$3,460")
            }
          />

          <StatCard
            title="Total Saving"
            amount="$7,920"
            icon={PiggyBank}
            background="#dcf9f5"
            iconColor="#20c9b3"
            onClick={() =>
              handleStatClick("Total Saving", "$7,920")
            }
          />
        </div>

        {/* LAST TRANSACTION + MY CARD */}

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_0.65fr]">
          <LastTransaction
            onTransactionClick={(item) => setPopup(item)}
          />

          <div>
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-[17px] font-semibold text-[#343b63]">
                My Card
              </h2>

              <button
                type="button"
                onClick={() =>
                  setPopup({
                    title: "My Card",
                    name: "Eddy Cusuma",
                    amount: "$5,756",
                    date: "Valid Thru: 12/22",
                  })
                }
                className="flex items-center gap-1 text-[11px] font-medium text-[#343b63] hover:text-[#1814f3]"
              >
                See All
                <ChevronRight size={14} />
              </button>
            </div>

            <MyCard
              onClick={() =>
                setPopup({
                  title: "My Card",
                  name: "Eddy Cusuma",
                  amount: "$5,756",
                  date: "Valid Thru: 12/22",
                })
              }
            />
          </div>
        </div>

        {/* CHART + INVOICES */}

        <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_0.65fr]">
          <DebitCreditChart />

          <InvoicesSent
            onInvoiceClick={(item) => setPopup(item)}
          />
        </div>

        {/* SHOW ALL */}

        <div className="mt-6 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="rounded-full border border-[#1814f3] px-6 py-2 text-[11px] font-medium text-[#1814f3] transition hover:bg-[#1814f3] hover:text-white"
          >
            {showAll ? "Show Less" : "Show All Transactions"}
          </button>
        </div>

        {/* Search result */}

        {search && (
          <div className="mt-4 rounded-xl bg-white p-4 text-center text-[12px] text-[#343b63]">
            {filteredTransactions.length > 0
              ? `${filteredTransactions.length} transaction(s) found`
              : "No transactions found"}
          </div>
        )}
      </main>

      {/* POPUP */}

      <Popup
        data={popup}
        onClose={() => setPopup(null)}
      />
    </div>
  );
}