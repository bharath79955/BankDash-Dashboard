import {
  ShoppingBag,
  UserRound,
  Laptop,
} from "lucide-react";

const transactions = [
  {
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: "+$850",
    type: "income",
    icon: CreditIcon,
  },
  {
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: "+$2,500",
    type: "income",
    icon: UserRound,
  },
  {
    title: "Food Delivery",
    date: "21 January 2021",
    amount: "-$150",
    type: "expense",
    icon: ShoppingBag,
  },
  {
    title: "Shopping",
    date: "20 January 2021",
    amount: "-$850",
    type: "expense",
    icon: Laptop,
  },
];

function CreditIcon() {
  return <CreditCardIcon />;
}

function CreditCardIcon() {
  return (
    <div className="h-10 w-10 rounded-full bg-[#e8f1ff]" />
  );
}

function RecentTransactions() {
  return (
    <div className="rounded-[20px] bg-white p-5">

      <h3 className="mb-5 text-[20px] font-semibold">
        Recent Transaction
      </h3>

      <div className="space-y-5">

        {transactions.map((transaction) => {
          const Icon = transaction.icon;

          return (
            <div
              key={transaction.title}
              className="flex items-center justify-between gap-4"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5f7fb]">
                  <Icon size={19} className="text-[#1814f3]" />
                </div>

                <div>
                  <p className="text-sm font-medium text-[#343c6a]">
                    {transaction.title}
                  </p>

                  <p className="mt-1 text-xs text-[#718096]">
                    {transaction.date}
                  </p>
                </div>

              </div>

              <p
                className={`text-sm font-semibold ${
                  transaction.type === "income"
                    ? "text-[#16a34a]"
                    : "text-[#ef4444]"
                }`}
              >
                {transaction.amount}
              </p>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default RecentTransactions;