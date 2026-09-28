import { useMemo, useState } from "react";
import {
  UserRound,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Wrench,
  Search,
  X,
  IndianRupee,
  CalendarDays,
  Percent,
  WalletCards,
} from "lucide-react";

const loanTypes = [
  {
    title: "Personal Loans",
    amount: "$50,000",
    icon: UserRound,
    bg: "bg-[#e9efff]",
    iconColor: "text-[#3967e8]",
  },
  {
    title: "Corporate Loans",
    amount: "$100,000",
    icon: BriefcaseBusiness,
    bg: "bg-[#fff5d9]",
    iconColor: "text-[#f4b52c]",
  },
  {
    title: "Business Loans",
    amount: "$500,000",
    icon: ChartColumnIncreasing,
    bg: "bg-[#ffe7f0]",
    iconColor: "text-[#ed5d92]",
  },
  {
    title: "Custom Loans",
    amount: "Choose Money",
    icon: Wrench,
    bg: "bg-[#dcfaf6]",
    iconColor: "text-[#40cfc2]",
  },
];

const initialLoans = [
  {
    id: "01.",
    loanMoney: "$100,000",
    left: "$40,500",
    duration: "8 Months",
    interest: "12%",
    installment: "$2,000 / month",
  },
  {
    id: "02.",
    loanMoney: "$500,000",
    left: "$250,000",
    duration: "36 Months",
    interest: "10%",
    installment: "$8,000 / month",
  },
  {
    id: "03.",
    loanMoney: "$900,000",
    left: "$40,500",
    duration: "12 Months",
    interest: "12%",
    installment: "$5,000 / month",
  },
  {
    id: "04.",
    loanMoney: "$50,000",
    left: "$40,500",
    duration: "25 Months",
    interest: "5%",
    installment: "$2,000 / month",
  },
  {
    id: "05.",
    loanMoney: "$50,000",
    left: "$40,500",
    duration: "5 Months",
    interest: "16%",
    installment: "$10,000 / month",
  },
  {
    id: "06.",
    loanMoney: "$80,000",
    left: "$25,500",
    duration: "14 Months",
    interest: "8%",
    installment: "$2,000 / month",
  },
  {
    id: "07.",
    loanMoney: "$12,000",
    left: "$5,500",
    duration: "9 Months",
    interest: "13%",
    installment: "$500 / month",
  },
  {
    id: "08.",
    loanMoney: "$160,000",
    left: "$100,800",
    duration: "3 Months",
    interest: "12%",
    installment: "$900 / month",
  },
];

function LoanTypeCard({ loan }) {
  const Icon = loan.icon;

  return (
    <button
      type="button"
      className="group flex min-h-[94px] w-full items-center rounded-[20px] bg-white px-5 py-4 text-left shadow-[0_2px_12px_rgba(0,0,0,0.025)] transition duration-200 hover:-translate-y-1 hover:shadow-lg"
    >
      <div
        className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full ${loan.bg}`}
      >
        <Icon
          size={25}
          strokeWidth={2}
          className={loan.iconColor}
        />
      </div>

      <div className="ml-4 min-w-0">
        <p className="truncate text-[13px] text-[#8a96ad]">
          {loan.title}
        </p>

        <p className="mt-1 truncate text-[17px] font-semibold text-[#343c63]">
          {loan.amount}
        </p>
      </div>
    </button>
  );
}

function LoanInfo({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-[#f8f9fc] p-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#3434e8] shadow-sm">
        <Icon size={17} />
      </div>

      <div>
        <p className="text-[10px] text-[#91a0ba]">
          {label}
        </p>

        <p className="mt-1 text-[12px] font-medium text-[#20263d]">
          {value}
        </p>
      </div>
    </div>
  );
}

function RepayModal({ loan, onClose, onConfirm }) {
  const [amount, setAmount] = useState("");

  if (!loan) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]">
      <div className="w-full max-w-[430px] rounded-[24px] bg-white p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-[19px] font-semibold text-[#343c63]">
              Repay Loan
            </h3>

            <p className="mt-1 text-[11px] text-[#91a0ba]">
              Loan {loan.id}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f7fb] text-[#7d879c] transition hover:bg-[#eceff5]"
          >
            <X size={17} />
          </button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <LoanInfo
            icon={WalletCards}
            label="Loan Amount"
            value={loan.loanMoney}
          />

          <LoanInfo
            icon={IndianRupee}
            label="Remaining"
            value={loan.left}
          />

          <LoanInfo
            icon={CalendarDays}
            label="Duration"
            value={loan.duration}
          />

          <LoanInfo
            icon={Percent}
            label="Interest"
            value={loan.interest}
          />
        </div>

        <div className="mt-5">
          <label className="mb-2 block text-[12px] font-medium text-[#343c63]">
            Repayment Amount
          </label>

          <input
            type="text"
            value={amount}
            onChange={(e) =>
              setAmount(e.target.value.replace(/[^\d.]/g, ""))
            }
            placeholder={loan.installment.replace(" / month", "")}
            className="h-[44px] w-full rounded-xl border border-[#e5e8ef] px-4 text-[13px] outline-none transition focus:border-[#3434e8]"
          />
        </div>

        <div className="mt-5 flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-xl border border-[#e3e6ee] py-3 text-[12px] font-medium text-[#65718a] transition hover:bg-[#f8f9fc]"
          >
            Cancel
          </button>

          <button
            type="button"
            onClick={() => onConfirm(loan, amount)}
            className="flex-1 rounded-xl bg-[#3434e8] py-3 text-[12px] font-medium text-white transition hover:bg-[#2525ca]"
          >
            Confirm Repayment
          </button>
        </div>
      </div>
    </div>
  );
}

function Loans() {
  const [loans] = useState(initialLoans);
  const [search, setSearch] = useState("");
  const [selectedLoan, setSelectedLoan] = useState(null);
  const [message, setMessage] = useState("");

  const filteredLoans = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) return loans;

    return loans.filter((loan) =>
      `${loan.id} ${loan.loanMoney} ${loan.left} ${loan.duration} ${loan.interest} ${loan.installment}`
        .toLowerCase()
        .includes(query)
    );
  }, [loans, search]);

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleRepayment = (loan, amount) => {
    setSelectedLoan(null);

    showMessage(
      amount
        ? `Repayment of $${amount} submitted successfully.`
        : `Repayment request for Loan ${loan.id} submitted successfully.`
    );
  };

  return (
    <div className="min-h-full bg-[#f5f6fa] p-4 sm:p-5 md:p-6 lg:p-7">

      {/* Toast */}
      {message && (
        <div className="fixed right-4 top-4 z-[60] max-w-[330px] rounded-xl bg-[#3434e8] px-5 py-3 text-[12px] font-medium text-white shadow-xl">
          {message}
        </div>
      )}

      {/* Loan Type Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {loanTypes.map((loan) => (
          <LoanTypeCard
            key={loan.title}
            loan={loan}
          />
        ))}
      </div>

      {/* Header */}
      <div className="mt-7 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-[18px] font-semibold text-[#343b63]">
            Active Loans Overview
          </h2>

          <p className="mt-1 text-[11px] text-[#91a0ba]">
            Track your active loans, repayments and interest rates.
          </p>
        </div>

        {/* Search */}
        <div className="flex h-[40px] w-full items-center gap-2 rounded-full bg-white px-4 shadow-sm md:w-[250px]">
          <Search
            size={16}
            className="shrink-0 text-[#8994aa]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search loans..."
            className="w-full bg-transparent text-[11px] outline-none placeholder:text-[#9ba5b8]"
          />
        </div>
      </div>

      {/* Desktop Table */}
      <div className="mt-4 hidden overflow-hidden rounded-[20px] bg-white px-5 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] md:block">

        <div className="grid grid-cols-[0.55fr_1.1fr_1.1fr_1.2fr_1fr_1.35fr_0.8fr] items-center border-b border-[#edf0f5] px-2 py-3 text-[11px] text-[#8190ad]">
          <div>SL No</div>
          <div>Loan Money</div>
          <div>Left to repay</div>
          <div>Duration</div>
          <div>Interest rate</div>
          <div>Installment</div>
          <div>Repay</div>
        </div>

        {filteredLoans.map((loan) => (
          <div
            key={loan.id}
            className="grid grid-cols-[0.55fr_1.1fr_1.1fr_1.2fr_1fr_1.35fr_0.8fr] items-center border-b border-[#edf0f5] px-2 py-4 last:border-b-0"
          >
            <span className="text-[13px] text-[#20263d]">
              {loan.id}
            </span>

            <span className="text-[13px] text-[#20263d]">
              {loan.loanMoney}
            </span>

            <span className="text-[13px] text-[#20263d]">
              {loan.left}
            </span>

            <span className="text-[13px] text-[#20263d]">
              {loan.duration}
            </span>

            <span className="text-[13px] text-[#20263d]">
              {loan.interest}
            </span>

            <span className="text-[13px] text-[#20263d]">
              {loan.installment}
            </span>

            <button
              type="button"
              onClick={() => setSelectedLoan(loan)}
              className="w-fit rounded-full border border-[#3434e8] bg-white px-5 py-[6px] text-[11px] font-medium text-[#3434e8] transition hover:bg-[#3434e8] hover:text-white"
            >
              Repay
            </button>
          </div>
        ))}

        {filteredLoans.length === 0 && (
          <div className="py-10 text-center text-[12px] text-[#91a0ba]">
            No loans found.
          </div>
        )}

        {/* Total */}
        <div className="grid grid-cols-[0.55fr_1.1fr_1.1fr_1.2fr_1fr_1.35fr_0.8fr] items-center px-2 py-4">
          <div className="text-[13px] font-medium text-[#f05d7e]">
            Total
          </div>

          <div className="text-[13px] font-medium text-[#f05d7e]">
            $125,000
          </div>

          <div className="text-[13px] font-medium text-[#f05d7e]">
            $750,000
          </div>

          <div />

          <div />

          <div className="text-[13px] font-medium text-[#f05d7e]">
            $50,000 / month
          </div>

          <div />
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="mt-4 space-y-3 md:hidden">
        {filteredLoans.map((loan) => (
          <div
            key={loan.id}
            className="rounded-[18px] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.025)]"
          >
            <div className="flex items-center justify-between border-b border-[#edf0f5] pb-3">
              <div>
                <p className="text-[10px] text-[#91a0ba]">
                  Loan
                </p>

                <p className="mt-1 text-[14px] font-semibold text-[#343c63]">
                  {loan.id}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedLoan(loan)}
                className="rounded-full border border-[#3434e8] px-4 py-2 text-[11px] font-medium text-[#3434e8]"
              >
                Repay
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <LoanInfo
                icon={WalletCards}
                label="Loan Money"
                value={loan.loanMoney}
              />

              <LoanInfo
                icon={IndianRupee}
                label="Left to Repay"
                value={loan.left}
              />

              <LoanInfo
                icon={CalendarDays}
                label="Duration"
                value={loan.duration}
              />

              <LoanInfo
                icon={Percent}
                label="Interest"
                value={loan.interest}
              />
            </div>

            <div className="mt-3 flex items-center justify-between rounded-xl bg-[#f8f9fc] px-4 py-3">
              <span className="text-[11px] text-[#91a0ba]">
                Monthly Installment
              </span>

              <span className="text-[12px] font-semibold text-[#343c63]">
                {loan.installment}
              </span>
            </div>
          </div>
        ))}

        {filteredLoans.length === 0 && (
          <div className="rounded-[18px] bg-white py-10 text-center text-[12px] text-[#91a0ba]">
            No loans found.
          </div>
        )}
      </div>

      {/* Mobile Total */}
      <div className="mt-4 rounded-[18px] bg-[#fff5f7] p-4 md:hidden">
        <div className="flex justify-between">
          <span className="text-[12px] font-medium text-[#f05d7e]">
            Total Loan
          </span>

          <span className="text-[12px] font-medium text-[#f05d7e]">
            $125,000
          </span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="text-[12px] font-medium text-[#f05d7e]">
            Total Repay
          </span>

          <span className="text-[12px] font-medium text-[#f05d7e]">
            $750,000
          </span>
        </div>

        <div className="mt-2 flex justify-between">
          <span className="text-[12px] font-medium text-[#f05d7e]">
            Monthly
          </span>

          <span className="text-[12px] font-medium text-[#f05d7e]">
            $50,000 / month
          </span>
        </div>
      </div>

      {/* Repay Modal */}
      <RepayModal
        loan={selectedLoan}
        onClose={() => setSelectedLoan(null)}
        onConfirm={handleRepayment}
      />
    </div>
  );
}

export default Loans;