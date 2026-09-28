import CreditCard from "./CreditCard";

function BalanceCard() {
  return (
    <section>
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-[20px] font-semibold text-[#343c6a]">
          My Cards
        </h3>

        <button className="text-sm font-semibold text-[#343c6a]">
          See All
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <CreditCard type="primary" />

        <CreditCard
          name="Jackie Wilson"
          number="1234  **  **  5678"
          balance="$3,756"
        />
      </div>
    </section>
  );
}

export default BalanceCard;