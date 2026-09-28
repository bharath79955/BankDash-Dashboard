import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  CreditCard as CardIcon,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  X,
  CheckCircle,
} from "lucide-react";

const PROFILE_IMAGE = "https://i.pravatar.cc/100?img=32";

const transactions = [
  {
    name: "Spotify Subscription",
    id: "#12548796",
    type: "Shopping",
    card: "1234 **",
    date: "28 Jan, 12.30 AM",
    amount: "-$2,500",
    positive: false,
    direction: "up",
  },
  {
    name: "Freepik Sales",
    id: "#12548797",
    type: "Transfer",
    card: "1234 **",
    date: "25 Jan, 10.40 PM",
    amount: "+$750",
    positive: true,
    direction: "down",
  },
  {
    name: "Mobile Service",
    id: "#12548798",
    type: "Service",
    card: "1234 **",
    date: "20 Jan, 10.40 PM",
    amount: "-$150",
    positive: false,
    direction: "up",
  },
  {
    name: "Wilson",
    id: "#12548799",
    type: "Transfer",
    card: "1234 **",
    date: "15 Jan, 03.29 PM",
    amount: "-$1050",
    positive: false,
    direction: "up",
  },
  {
    name: "Emily",
    id: "#12548800",
    type: "Transfer",
    card: "1234 **",
    date: "14 Jan, 10.40 PM",
    amount: "+$840",
    positive: true,
    direction: "down",
  },
  {
    name: "Apple Store",
    id: "#12548801",
    type: "Shopping",
    card: "5678 **",
    date: "12 Jan, 02.15 PM",
    amount: "-$450",
    positive: false,
    direction: "up",
  },
  {
    name: "Salary",
    id: "#12548802",
    type: "Income",
    card: "5678 **",
    date: "10 Jan, 09.00 AM",
    amount: "+$3,500",
    positive: true,
    direction: "down",
  },
  {
    name: "Netflix Subscription",
    id: "#12548803",
    type: "Service",
    card: "1234 **",
    date: "08 Jan, 08.30 PM",
    amount: "-$25",
    positive: false,
    direction: "up",
  },
];

const months = [
  { month: "Aug", height: 55 },
  { month: "Sep", height: 82 },
  { month: "Oct", height: 58 },
  { month: "Nov", height: 38 },
  { month: "Dec", height: 92, active: true },
  { month: "Jan", height: 65 },
];

function BankCard({ primary = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -3 }}
      className={`relative h-[174px] w-full max-w-[270px] overflow-hidden rounded-[20px] ${
        primary
          ? "bg-gradient-to-br from-[#4b4cff] via-[#3638f5] to-[#1717e8] text-white"
          : "border border-[#e5e7ef] bg-white text-[#343c6a]"
      }`}
    >
      <div className="flex h-full flex-col justify-between p-5">

        <div className="flex items-start justify-between">
          <div>
            <p
              className={`text-[10px] ${
                primary ? "text-white/70" : "text-[#718096]"
              }`}
            >
              Balance
            </p>

            <p className="text-[16px] font-semibold">
              $5,756
            </p>
          </div>

          <CardIcon
            size={29}
            strokeWidth={1.5}
            className={primary ? "text-white" : "text-[#777b86]"}
          />
        </div>

        <div className="flex gap-10">
          <div>
            <p
              className={`text-[9px] ${
                primary ? "text-white/70" : "text-[#718096]"
              }`}
            >
              CARD HOLDER
            </p>

            <p className="text-[11px] font-medium">
              Eddy Cusuma
            </p>
          </div>

          <div>
            <p
              className={`text-[9px] ${
                primary ? "text-white/70" : "text-[#718096]"
              }`}
            >
              VALID THRU
            </p>

            <p className="text-[11px] font-medium">
              12/22
            </p>
          </div>
        </div>

        <div
          className={`-mx-5 -mb-5 flex items-center justify-between px-5 py-3 ${
            primary
              ? "bg-white/10"
              : "border-t border-[#edf0f5]"
          }`}
        >
          <span className="text-[16px] font-medium tracking-wide">
            3778 ** ** 1234
          </span>

          <div className="flex">
            <span
              className={`h-7 w-7 rounded-full ${
                primary ? "bg-white/50" : "bg-[#d8dbe5]"
              }`}
            />

            <span
              className={`-ml-3 h-7 w-7 rounded-full ${
                primary ? "bg-white/30" : "bg-[#bfc3d0]"
              }`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ExpenseChart() {
  return (
    <div className="h-[174px] rounded-[20px] bg-white px-5 py-4">
      <div className="flex justify-end">
        <span className="text-[12px] font-medium text-[#343c6a]">
          $12,500
        </span>
      </div>

      <div className="mt-1 flex h-[105px] items-end justify-between gap-3">
        {months.map((item) => (
          <div
            key={item.month}
            className="flex h-full flex-1 flex-col items-center justify-end gap-2"
          >
            <div
              className={`w-[27px] rounded-t-[7px] ${
                item.active ? "bg-[#20d6c5]" : "bg-[#eef0f5]"
              }`}
              style={{
                height: `${item.height}px`,
              }}
            />

            <span className="text-[10px] text-[#8993aa]">
              {item.month}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Transactions() {
  const [activeTab, setActiveTab] = useState("All Transactions");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [showAddCard, setShowAddCard] = useState(false);
  const [message, setMessage] = useState("");

  const itemsPerPage = 5;

  const filteredTransactions = useMemo(() => {
    let result = transactions;

    if (activeTab === "Income") {
      result = result.filter((item) => item.positive);
    }

    if (activeTab === "Expense") {
      result = result.filter((item) => !item.positive);
    }

    if (search.trim()) {
      const keyword = search.toLowerCase();

      result = result.filter(
        (item) =>
          item.name.toLowerCase().includes(keyword) ||
          item.type.toLowerCase().includes(keyword) ||
          item.id.toLowerCase().includes(keyword)
      );
    }

    return result;
  }, [activeTab, search]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTransactions.length / itemsPerPage)
  );

  const currentTransactions = filteredTransactions.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  const changeTab = (tab) => {
    setActiveTab(tab);
    setPage(1);
  };

  const handleDownload = (transaction) => {
    const receipt = `
BankDash Transaction Receipt

Description: ${transaction.name}
Transaction ID: ${transaction.id}
Type: ${transaction.type}
Card: ${transaction.card}
Date: ${transaction.date}
Amount: ${transaction.amount}
`;

    const blob = new Blob([receipt], {
      type: "text/plain",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `${transaction.name.replaceAll(" ", "_")}_receipt.txt`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(url);

    setMessage("Receipt downloaded successfully.");
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    setShowAddCard(false);
    setMessage("New card added successfully.");
  };

  return (
    <div className="min-h-full bg-[#f5f7fb] px-5 py-5 md:px-7">

      {/* Cards + Expense */}
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_270px]">

        {/* My Cards */}
        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#343c6a]">
              My Cards
            </h2>

            <button
              onClick={() => setShowAddCard(true)}
              className="text-[14px] font-semibold text-[#343c6a] transition hover:text-[#1814f3]"
            >
              + Add Card
            </button>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <BankCard primary />
            <BankCard />
          </div>
        </section>

        {/* My Expense */}
        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
            My Expense
          </h2>

          <ExpenseChart />
        </section>
      </div>

      {/* Success Message */}
      {message && (
        <div className="fixed right-6 top-24 z-50 flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg">
          <CheckCircle size={18} className="text-[#20c9a3]" />

          <span className="text-[12px] font-medium text-[#343c6a]">
            {message}
          </span>

          <button
            onClick={() => setMessage("")}
            className="ml-2 text-gray-400 hover:text-gray-700"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* Recent Transactions */}
      <section className="mt-5">

        <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
          Recent Transactions
        </h2>

        {/* Search */}
        <div className="mb-4 flex h-[42px] max-w-[350px] items-center gap-2 rounded-full bg-white px-4">
          <Search size={17} className="text-[#8993aa]" />

          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1);
            }}
            type="text"
            placeholder="Search transactions..."
            className="w-full bg-transparent text-[12px] outline-none placeholder:text-[#9aa3b8]"
          />
        </div>

        {/* Tabs */}
        <div className="flex gap-10 border-b border-[#e2e5ec] md:gap-12">

          {["All Transactions", "Income", "Expense"].map((tab) => (
            <button
              key={tab}
              onClick={() => changeTab(tab)}
              className={`relative pb-3 text-[13px] font-medium ${
                activeTab === tab
                  ? "text-[#1814f3]"
                  : "text-[#8993aa]"
              }`}
            >
              {tab}

              {activeTab === tab && (
                <span className="absolute bottom-[-1px] left-0 right-0 h-[2px] bg-[#1814f3]" />
              )}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="mt-5 overflow-x-auto rounded-[20px] bg-white">

          <table className="w-full min-w-[850px] border-collapse">

            <thead>
              <tr className="border-b border-[#edf0f5] text-left text-[11px] text-[#8190aa]">

                <th className="px-5 py-4 font-medium">
                  Description
                </th>

                <th className="px-4 py-4 font-medium">
                  Transaction ID
                </th>

                <th className="px-4 py-4 font-medium">
                  Type
                </th>

                <th className="px-4 py-4 font-medium">
                  Card
                </th>

                <th className="px-4 py-4 font-medium">
                  Date
                </th>

                <th className="px-4 py-4 font-medium">
                  Amount
                </th>

                <th className="px-4 py-4 font-medium">
                  Receipt
                </th>
              </tr>
            </thead>

            <tbody>
              {currentTransactions.length > 0 ? (
                currentTransactions.map((transaction, index) => (
                  <motion.tr
                    key={transaction.id}
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-[#edf0f5] last:border-0"
                  >
                    {/* Description */}
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">

                        <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full border border-[#a8b6d2] text-[#657ba7]">
                          {transaction.direction === "up" ? (
                            <ArrowUp size={13} />
                          ) : (
                            <ArrowDown size={13} />
                          )}
                        </span>

                        <span className="whitespace-nowrap text-[12px] text-[#343c6a]">
                          {transaction.name}
                        </span>
                      </div>
                    </td>

                    {/* ID */}
                    <td className="px-4 py-4 text-[12px] text-[#343c6a]">
                      {transaction.id}
                    </td>

                    {/* Type */}
                    <td className="px-4 py-4 text-[12px] text-[#343c6a]">
                      {transaction.type}
                    </td>

                    {/* Card */}
                    <td className="px-4 py-4 text-[12px] text-[#343c6a]">
                      {transaction.card}
                    </td>

                    {/* Date */}
                    <td className="whitespace-nowrap px-4 py-4 text-[12px] text-[#343c6a]">
                      {transaction.date}
                    </td>

                    {/* Amount */}
                    <td
                      className={`px-4 py-4 text-[12px] font-medium ${
                        transaction.positive
                          ? "text-[#16c79a]"
                          : "text-[#ff4b7d]"
                      }`}
                    >
                      {transaction.amount}
                    </td>

                    {/* Download */}
                    <td className="px-4 py-4">
                      <button
                        onClick={() =>
                          handleDownload(transaction)
                        }
                        className="rounded-full border border-[#293a8f] px-4 py-1.5 text-[11px] text-[#293a8f] transition hover:bg-[#293a8f] hover:text-white"
                      >
                        Download
                      </button>
                    </td>
                  </motion.tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="7"
                    className="py-10 text-center text-[13px] text-gray-400"
                  >
                    No transactions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-5 flex items-center justify-end gap-2 pb-4">

          <button
            disabled={page === 1}
            onClick={() =>
              setPage((current) => Math.max(1, current - 1))
            }
            className={`mr-2 flex items-center gap-1 text-[12px] ${
              page === 1
                ? "cursor-not-allowed text-gray-300"
                : "text-[#1814f3]"
            }`}
          >
            <ChevronLeft size={15} />
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => index + 1
          ).map((number) => (
            <button
              key={number}
              onClick={() => setPage(number)}
              className={`h-[32px] w-[32px] rounded-lg text-[12px] ${
                page === number
                  ? "bg-[#1814f3] text-white"
                  : "text-[#1814f3] hover:bg-[#eef0ff]"
              }`}
            >
              {number}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() =>
              setPage((current) =>
                Math.min(totalPages, current + 1)
              )
            }
            className={`ml-2 flex items-center gap-1 text-[12px] ${
              page === totalPages
                ? "cursor-not-allowed text-gray-300"
                : "text-[#1814f3]"
            }`}
          >
            Next
            <ChevronRight size={15} />
          </button>
        </div>
      </section>

      {/* Add Card Modal */}
      {showAddCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">

          <div className="w-full max-w-[420px] rounded-[20px] bg-white p-6 shadow-xl">

            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-[18px] font-semibold text-[#343c6a]">
                Add New Card
              </h2>

              <button
                onClick={() => setShowAddCard(false)}
                className="rounded-full p-2 text-gray-400 hover:bg-gray-100"
              >
                <X size={18} />
              </button>
            </div>

            <form onSubmit={handleAddCard}>

              <label className="mb-2 block text-[11px] text-gray-500">
                Card Holder Name
              </label>

              <input
                required
                type="text"
                placeholder="Enter card holder name"
                className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3 text-[12px] outline-none focus:border-[#1814f3]"
              />

              <label className="mb-2 block text-[11px] text-gray-500">
                Card Number
              </label>

              <input
                required
                type="text"
                placeholder="1234 5678 9012 3456"
                maxLength="19"
                className="mb-4 w-full rounded-xl border border-gray-200 px-4 py-3 text-[12px] outline-none focus:border-[#1814f3]"
              />

              <div className="grid grid-cols-2 gap-4">

                <div>
                  <label className="mb-2 block text-[11px] text-gray-500">
                    Expiry Date
                  </label>

                  <input
                    required
                    type="text"
                    placeholder="12/28"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[12px] outline-none focus:border-[#1814f3]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] text-gray-500">
                    CVV
                  </label>

                  <input
                    required
                    type="password"
                    placeholder="***"
                    maxLength="3"
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-[12px] outline-none focus:border-[#1814f3]"
                  />
                </div>

              </div>

              <button
                type="submit"
                className="mt-6 w-full rounded-xl bg-[#1814f3] py-3 text-[12px] font-medium text-white transition hover:bg-[#100de0]"
              >
                Add Card
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}