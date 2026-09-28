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

  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#f5f7fb] px-8 py-5">

      {/* Message */}
      {message && (
        <div className="fixed top-5 right-5 z-50 bg-[#3434eb] text-white px-5 py-3 rounded-xl shadow-lg text-sm">
          {message}
        </div>
      )}

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-[22px] font-semibold text-[#343c6a]">
            My Privileges
          </h2>

          <p className="text-[12px] text-[#91a0ba] mt-1">
            Enjoy exclusive rewards and benefits
          </p>
        </div>

        <div className="w-[48px] h-[48px] rounded-[15px] bg-[#e9efff] text-[#4775ed] flex items-center justify-center">
          <Gift size={23} />
        </div>
      </div>

      {/* Rewards Summary */}
      <div className="grid grid-cols-3 gap-5 mb-6">

        <SummaryCard
          icon={<Gift size={21} />}
          title="Available Rewards"
          value={`${privileges.length}`}
          bg="bg-[#e9efff]"
          color="text-[#4775ed]"
        />

        <SummaryCard
          icon={<CheckCircle size={21} />}
          title="Claimed Rewards"
          value={`${claimed.length}`}
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

      {/* Privileges */}
      <section>
        <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
          Available Privileges
        </h2>

        <div className="grid grid-cols-2 gap-5">

          {privileges.map((item) => {
            const Icon = item.icon;
            const isClaimed = claimed.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-white rounded-[20px] p-5"
              >
                <div className="flex items-start justify-between">

                  <div className="flex items-center gap-4">

                    <div
                      className={`w-[50px] h-[50px] rounded-[15px] flex items-center justify-center ${item.bg} ${item.color}`}
                    >
                      <Icon size={22} />
                    </div>

                    <div>
                      <p className="text-[14px] font-semibold text-[#343c6a]">
                        {item.title}
                      </p>

                      <p className="text-[11px] text-[#91a0ba] mt-1">
                        {item.description}
                      </p>
                    </div>

                  </div>

                  <span className="text-[11px] font-semibold text-[#3434eb]">
                    {item.value}
                  </span>

                </div>

                <div className="mt-5 flex items-center justify-between">

                  <button
                    onClick={() => setSelectedOffer(item)}
                    className="flex items-center gap-1 text-[11px] text-[#343c6a] hover:text-[#1712e8]"
                  >
                    View Details
                    <ChevronRight size={14} />
                  </button>

                  <button
                    onClick={() =>
                      handleClaim(item.id, item.title)
                    }
                    className={`px-5 py-2 rounded-lg text-[11px] transition ${
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

        <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
          Special Offers
        </h2>

        <div className="grid grid-cols-3 gap-5">

          {specialOffers.map((offer) => {
            const Icon = offer.icon;

            return (
              <div
                key={offer.id}
                className="bg-white rounded-[20px] p-5"
              >

                <div className="flex items-center justify-between">

                  <div className="w-[46px] h-[46px] rounded-[14px] bg-[#f0f4ff] text-[#4775ed] flex items-center justify-center">
                    <Icon size={21} />
                  </div>

                  <span className="text-[10px] font-semibold bg-[#ffe8f0] text-[#ed6b9a] px-3 py-1 rounded-full">
                    {offer.discount}
                  </span>

                </div>

                <h3 className="text-[14px] font-semibold text-[#343c6a] mt-4">
                  {offer.title}
                </h3>

                <p className="text-[11px] text-[#91a0ba] mt-1">
                  {offer.description}
                </p>

                <button
                  onClick={() => setSelectedOffer(offer)}
                  className="mt-4 w-full h-[38px] border border-[#e2e5ed] rounded-lg text-[11px] text-[#1712e8] font-medium hover:bg-[#f7f8fc]"
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
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center">

          <div className="bg-white w-[430px] rounded-[20px] p-6">

            <div className="flex items-center justify-between">

              <h2 className="text-[19px] font-semibold text-[#343c6a]">
                {selectedOffer.title}
              </h2>

              <button
                onClick={() => setSelectedOffer(null)}
              >
                <X
                  size={20}
                  className="text-[#91a0ba]"
                />
              </button>

            </div>

            <div className="mt-5 bg-[#f7f9fc] rounded-[15px] p-5">

              <p className="text-[12px] text-[#91a0ba]">
                Offer Details
              </p>

              <p className="text-[14px] text-[#343c6a] mt-2">
                {selectedOffer.description}
              </p>

              {selectedOffer.value && (
                <p className="text-[18px] font-semibold text-[#1712e8] mt-4">
                  {selectedOffer.value}
                </p>
              )}

              {selectedOffer.discount && (
                <p className="text-[18px] font-semibold text-[#1712e8] mt-4">
                  {selectedOffer.discount}
                </p>
              )}

            </div>

            <button
              onClick={() => {
                setSelectedOffer(null);
                showMessage("Offer selected successfully!");
              }}
              className="w-full mt-5 h-[42px] bg-[#1712e8] text-white rounded-xl text-[12px]"
            >
              Use Offer
            </button>

          </div>

        </div>
      )}

    </div>
  );
}

/* Summary Card */

function SummaryCard({
  icon,
  title,
  value,
  bg,
  color,
}) {
  return (
    <div className="bg-white rounded-[20px] p-5 flex items-center gap-4">

      <div
        className={`w-[48px] h-[48px] rounded-[15px] flex items-center justify-center ${bg} ${color}`}
      >
        {icon}
      </div>

      <div>
        <p className="text-[11px] text-[#91a0ba]">
          {title}
        </p>

        <p className="text-[20px] font-semibold text-[#343c6a] mt-1">
          {value}
        </p>
      </div>

    </div>
  );
}

export default MyPrivileges;