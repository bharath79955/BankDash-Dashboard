import { useState } from "react";
import {
  Gift,
  Star,
  Percent,
  Plane,
  ShoppingBag,
  Coffee,
  Utensils,
  Ticket,
  ChevronRight,
  CheckCircle,
  X,
} from "lucide-react";

const privileges = [
  {
    id: 1,
    title: "Cashback Rewards",
    description: "Get cashback on selected purchases.",
    value: "10% Cashback",
    icon: Percent,
    bg: "bg-[#e9efff]",
    color: "text-[#4775ed]",
  },
  {
    id: 2,
    title: "Travel Benefits",
    description: "Enjoy exclusive travel discounts.",
    value: "20% Off Flights",
    icon: Plane,
    bg: "bg-[#dffaf6]",
    color: "text-[#35cfc1]",
  },
  {
    id: 3,
    title: "Shopping Rewards",
    description: "Special discounts on shopping.",
    value: "15% Discount",
    icon: ShoppingBag,
    bg: "bg-[#ffe8f0]",
    color: "text-[#ed6b9a]",
  },
  {
    id: 4,
    title: "Dining Offers",
    description: "Enjoy offers at selected restaurants.",
    value: "25% Off",
    icon: Utensils,
    bg: "bg-[#fff5d9]",
    color: "text-[#efb52f]",
  },
];

const specialOffers = [
  {
    id: 1,
    title: "Movie Tickets",
    description: "Get special discounts on movie tickets.",
    icon: Ticket,
    discount: "30% OFF",
  },
  {
    id: 2,
    title: "Coffee Offers",
    description: "Buy one coffee and get another free.",
    icon: Coffee,
    discount: "BUY 1 GET 1",
  },
  {
    id: 3,
    title: "Premium Rewards",
    description: "Unlock additional rewards with your card.",
    icon: Star,
    discount: "500 POINTS",
  },
];

function SummaryCard({ icon, title, value, bg, color }) {
  return (
    <div className="flex min-h-[88px] items-center gap-4 rounded-[18px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
      <div
        className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[15px] ${bg} ${color}`}
      >
        {icon}
      </div>

      <div className="min-w-0">
        <p className="truncate text-[11px] text-[#91a0ba]">{title}</p>

        <p className="mt-1 text-[20px] font-semibold text-[#343c6a]">
          {value}
        </p>
      </div>
    </div>
  );
}

function MyPrivileges() {
  const [claimed, setClaimed] = useState([]);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleClaim = (id, title) => {
    if (claimed.includes(id)) {
      showMessage(`${title} is already claimed.`);
      return;
    }

    setClaimed((prev) => [...prev, id]);
    showMessage(`${title} claimed successfully!`);
  };

  const handleUseOffer = () => {
    if (!selectedOffer) return;

    showMessage(`${selectedOffer.title} selected successfully!`);
    setSelectedOffer(null);
  };

  return (
    <div className="min-h-full bg-[#f5f6fa] p-4 sm:p-5 lg:p-6 xl:p-7">
      {/* Notification */}
      {message && (
        <div className="fixed right-4 top-4 z-[100] max-w-[calc(100vw-32px)] rounded-xl bg-[#3434eb] px-5 py-3 text-[12px] text-white shadow-xl sm:right-6 sm:top-6">
          {message}
        </div>
      )}

      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h1 className="text-[19px] font-semibold text-[#343c6a] sm:text-[21px]">
            My Privileges
          </h1>

          <p className="mt-1 text-[11px] text-[#91a0ba] sm:text-[12px]">
            Enjoy exclusive rewards and benefits
          </p>
        </div>

        <div className="flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-[14px] bg-[#e9efff] text-[#4775ed] sm:h-[48px] sm:w-[48px]">
          <Gift size={22} />
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <SummaryCard
          icon={<Gift size={21} />}
          title="Available Rewards"
          value={privileges.length}
          bg="bg-[#e9efff]"
          color="text-[#4775ed]"
        />

        <SummaryCard
          icon={<CheckCircle size={21} />}
          title="Claimed Rewards"
          value={claimed.length}
          bg="bg-[#dffaf6]"
          color="text-[#35cfc1]"
        />

        <SummaryCard
          icon={<Star size={21} />}
          title="Reward Points"
          value="2,450"
          bg="bg-[#fff5d9]"
          color="text-[#efb52f]"
        />
      </div>

      {/* Available Privileges */}
      <section className="mt-6">
        <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
          Available Privileges
        </h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {privileges.map((item) => {
            const Icon = item.icon;
            const isClaimed = claimed.includes(item.id);

            return (
              <div
                key={item.id}
                className="rounded-[19px] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:p-5"
              >
                {/* Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3 sm:gap-4">
                    <div
                      className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] ${item.bg} ${item.color}`}
                    >
                      <Icon size={21} />
                    </div>

                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-semibold text-[#343c6a] sm:text-[14px]">
                        {item.title}
                      </p>

                      <p className="mt-1 line-clamp-2 text-[10px] leading-4 text-[#91a0ba] sm:text-[11px]">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-[#f0f3ff] px-2.5 py-1 text-[9px] font-semibold text-[#3434eb] sm:px-3 sm:text-[10px]">
                    {item.value}
                  </span>
                </div>

                {/* Bottom */}
                <div className="mt-5 flex items-center justify-between border-t border-[#f0f2f6] pt-4">
                  <button
                    type="button"
                    onClick={() => setSelectedOffer(item)}
                    className="flex items-center gap-1 text-[10px] font-medium text-[#343c6a] transition hover:text-[#1712e8] sm:text-[11px]"
                  >
                    View Details
                    <ChevronRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleClaim(item.id, item.title)}
                    className={`rounded-lg px-4 py-2 text-[10px] font-medium transition sm:px-5 sm:text-[11px] ${
                      isClaimed
                        ? "bg-[#dffaf6] text-[#22b9a9]"
                        : "bg-[#1712e8] text-white hover:bg-[#100dc5]"
                    }`}
                  >
                    {isClaimed ? "Claimed" : "Claim Reward"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Special Offers */}
      <section className="mt-6">
        <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
          Special Offers
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {specialOffers.map((offer) => {
            const Icon = offer.icon;

            return (
              <div
                key={offer.id}
                className="rounded-[19px] bg-white p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px] bg-[#f0f4ff] text-[#4775ed]">
                    <Icon size={21} />
                  </div>

                  <span className="rounded-full bg-[#ffe8f0] px-3 py-1 text-[9px] font-semibold text-[#ed6b9a]">
                    {offer.discount}
                  </span>
                </div>

                <h3 className="mt-4 text-[14px] font-semibold text-[#343c6a]">
                  {offer.title}
                </h3>

                <p className="mt-1 min-h-[32px] text-[11px] leading-4 text-[#91a0ba]">
                  {offer.description}
                </p>

                <button
                  type="button"
                  onClick={() => setSelectedOffer(offer)}
                  className="mt-4 h-[38px] w-full rounded-lg border border-[#e2e5ed] text-[11px] font-medium text-[#1712e8] transition hover:bg-[#f7f8fc]"
                >
                  View Offer
                </button>
              </div>
            );
          })}
        </div>
      </section>

      {/* Modal */}
      {selectedOffer && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/30 p-4"
          onClick={() => setSelectedOffer(null)}
        >
          <div
            className="w-full max-w-[430px] rounded-[20px] bg-white p-5 shadow-2xl sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-[18px] font-semibold text-[#343c6a]">
                {selectedOffer.title}
              </h2>

              <button
                type="button"
                onClick={() => setSelectedOffer(null)}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f5f7fb]"
              >
                <X size={17} className="text-[#91a0ba]" />
              </button>
            </div>

            {/* Details */}
            <div className="mt-5 rounded-[15px] bg-[#f7f9fc] p-5">
              <p className="text-[11px] text-[#91a0ba]">
                Offer Details
              </p>

              <p className="mt-2 text-[13px] leading-5 text-[#343c6a]">
                {selectedOffer.description}
              </p>

              {selectedOffer.value && (
                <div className="mt-4 inline-flex rounded-full bg-[#e9efff] px-4 py-2">
                  <span className="text-[13px] font-semibold text-[#1712e8]">
                    {selectedOffer.value}
                  </span>
                </div>
              )}

              {selectedOffer.discount && (
                <div className="mt-4 inline-flex rounded-full bg-[#ffe8f0] px-4 py-2">
                  <span className="text-[13px] font-semibold text-[#ed6b9a]">
                    {selectedOffer.discount}
                  </span>
                </div>
              )}
            </div>

            {/* Modal Button */}
            <button
              type="button"
              onClick={handleUseOffer}
              className="mt-5 h-[42px] w-full rounded-xl bg-[#1712e8] text-[12px] font-medium text-white transition hover:bg-[#100dc5]"
            >
              Use Offer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MyPrivileges;