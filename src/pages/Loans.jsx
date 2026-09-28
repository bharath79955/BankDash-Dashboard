import React from "react";
import {
  UserRound,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  Wrench,
  HandCoins,
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

const loans = [
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

function Loans() {
  const handleRepay = (loan) => {
    alert(
      `Repayment selected for Loan ${loan.id}\nInstallment: ${loan.installment}`
    );
  };

  return (
    <div className="min-h-full bg-[#f5f6fa] p-5 sm:p-6 lg:p-7">
      {/* Loan Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {loanTypes.map((loan) => {
          const Icon = loan.icon;

          return (
            <div
              key={loan.title}
              className="flex min-h-[94px] items-center rounded-[20px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
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
                <p className="truncate text-[13px] font-normal text-[#8a96ad]">
                  {loan.title}
                </p>

                <p className="mt-1 truncate text-[17px] font-semibold text-[#343c63]">
                  {loan.amount}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Title */}
      <div className="mt-5">
        <h2 className="text-[18px] font-semibold text-[#343b63]">
          Active Loans Overview
        </h2>
      </div>

      {/* Loans Table */}
      <div className="mt-3 overflow-hidden rounded-[20px] bg-white px-4 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:px-5">
        {/* Desktop Header */}
        <div className="hidden grid-cols-[0.55fr_1.1fr_1.1fr_1.2fr_1fr_1.35fr_0.8fr] items-center border-b border-[#edf0f5] px-2 py-3 text-[12px] font-normal text-[#8190ad] md:grid">
          <div>SL No</div>
          <div>Loan Money</div>
          <div>Left to repay</div>
          <div>Duration</div>
          <div>Interest rate</div>
          <div>Installment</div>
          <div>Repay</div>
        </div>

        {/* Rows */}
        {loans.map((loan) => (
          <div
            key={loan.id}
            className="grid grid-cols-1 gap-3 border-b border-[#edf0f5] px-2 py-4 last:border-b-0 md:grid-cols-[0.55fr_1.1fr_1.1fr_1.2fr_1fr_1.35fr_0.8fr] md:items-center md:gap-0"
          >
            {/* Mobile labels */}
            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                SL No
              </span>
              <span className="text-[13px] text-[#20263d]">
                {loan.id}
              </span>
            </div>

            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                Loan Money
              </span>
              <span className="text-[13px] text-[#20263d]">
                {loan.loanMoney}
              </span>
            </div>

            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                Left to repay
              </span>
              <span className="text-[13px] text-[#20263d]">
                {loan.left}
              </span>
            </div>

            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                Duration
              </span>
              <span className="text-[13px] text-[#20263d]">
                {loan.duration}
              </span>
            </div>

            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                Interest rate
              </span>
              <span className="text-[13px] text-[#20263d]">
                {loan.interest}
              </span>
            </div>

            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                Installment
              </span>
              <span className="text-[13px] text-[#20263d]">
                {loan.installment}
              </span>
            </div>

            <div className="flex items-center justify-between md:block">
              <span className="text-[12px] text-[#8190ad] md:hidden">
                Action
              </span>

              <button
                type="button"
                onClick={() => handleRepay(loan)}
                className="rounded-full border border-[#3434e8] bg-white px-5 py-[6px] text-[12px] font-medium text-[#3434e8] transition hover:bg-[#3434e8] hover:text-white"
              >
                Repay
              </button>
            </div>
          </div>
        ))}

        {/* Total Row */}
        <div className="hidden grid-cols-[0.55fr_1.1fr_1.1fr_1.2fr_1fr_1.35fr_0.8fr] items-center px-2 pt-3 md:grid">
          <div className="text-[13px] font-medium text-[#f05d7e]">
            Total
          </div>

          <div className="text-[13px] font-medium text-[#f05d7e]">
            $125,000
          </div>

          <div className="text-[13px] font-medium text-[#f05d7e]">
            $750,000
          </div>

          <div></div>

          <div></div>

          <div className="text-[13px] font-medium text-[#f05d7e]">
            $50,000 / month
          </div>

          <div></div>
        </div>

        {/* Mobile Total */}
        <div className="mt-3 rounded-xl bg-[#fff5f7] px-4 py-3 md:hidden">
          <div className="flex justify-between">
            <span className="text-[13px] font-medium text-[#f05d7e]">
              Total Loan
            </span>

            <span className="text-[13px] font-medium text-[#f05d7e]">
              $125,000
            </span>
          </div>

          <div className="mt-2 flex justify-between">
            <span className="text-[13px] font-medium text-[#f05d7e]">
              Total Repay
            </span>

            <span className="text-[13px] font-medium text-[#f05d7e]">
              $750,000
            </span>
          </div>

          <div className="mt-2 flex justify-between">
            <span className="text-[13px] font-medium text-[#f05d7e]">
              Monthly
            </span>

            <span className="text-[13px] font-medium text-[#f05d7e]">
              $50,000 / month
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loans;