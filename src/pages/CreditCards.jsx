import { useState } from "react";
import {
  CreditCard,
  Lock,
  Smartphone,
  Apple,
  ChevronDown,
  X,
  CheckCircle,
  Eye,
  Plus,
} from "lucide-react";

const initialCards = [
  {
    type: "blue",
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 **** **** 1234",
  },
  {
    type: "purple",
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 **** **** 1234",
  },
  {
    type: "white",
    balance: "$5,756",
    holder: "Eddy Cusuma",
    valid: "12/22",
    number: "3778 **** **** 1234",
  },
];

const initialCardList = [
  {
    color: "blue",
    bank: "DBL Bank",
    number: "**** **** 5600",
    name: "William",
  },
  {
    color: "pink",
    bank: "BRC Bank",
    number: "**** **** 4300",
    name: "Michel",
  },
  {
    color: "yellow",
    bank: "ABM Bank",
    number: "**** **** 7560",
    name: "Edward",
  },
];

function CreditCardView({ card }) {
  const styles = {
    blue: "bg-gradient-to-br from-[#4b7cff] to-[#3568ed] text-white",
    purple: "bg-gradient-to-br from-[#4940ef] to-[#1712e8] text-white",
    white: "border border-[#e5e7ef] bg-white text-[#343c6a]",
  };

  const isWhite = card.type === "white";

  return (
    <div
      className={`relative h-[180px] w-full overflow-hidden rounded-[20px] shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${styles[card.type]}`}
    >
      <div className="flex h-full flex-col justify-between p-5">
        <div className="flex items-start justify-between">
          <div>
            <p
              className={`text-[9px] ${
                isWhite ? "text-[#9aa4b8]" : "text-white/70"
              }`}
            >
              Balance
            </p>

            <p className="mt-1 text-[17px] font-semibold">
              {card.balance}
            </p>
          </div>

          <CreditCard
            size={29}
            strokeWidth={1.6}
            className={isWhite ? "text-[#b5bac7]" : "text-white"}
          />
        </div>

        <div className="flex gap-8 sm:gap-12">
          <div>
            <p
              className={`text-[8px] ${
                isWhite ? "text-[#9aa4b8]" : "text-white/60"
              }`}
            >
              CARD HOLDER
            </p>

            <p className="mt-1 text-[11px] font-medium">
              {card.holder}
            </p>
          </div>

          <div>
            <p
              className={`text-[8px] ${
                isWhite ? "text-[#9aa4b8]" : "text-white/60"
              }`}
            >
              VALID THRU
            </p>

            <p className="mt-1 text-[11px] font-medium">
              {card.valid}
            </p>
          </div>
        </div>

        <div
          className={`-mx-5 -mb-5 flex items-center justify-between px-5 py-3 ${
            isWhite ? "border-t border-[#edf0f5] bg-[#fafafa]" : "bg-white/10"
          }`}
        >
          <span className="text-[14px] font-medium tracking-wide sm:text-[16px]">
            {card.number}
          </span>

          <div className="flex -space-x-2">
            <span
              className={`h-7 w-7 rounded-full ${
                isWhite ? "bg-[#c7cad4]" : "bg-white/55"
              }`}
            />

            <span
              className={`h-7 w-7 rounded-full ${
                isWhite ? "bg-[#aeb2bf]" : "bg-white/35"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function CardListItem({ item, onView }) {
  const colors = {
    blue: "bg-[#e9efff] text-[#4775e8]",
    pink: "bg-[#ffe8f0] text-[#ed6b9a]",
    yellow: "bg-[#fff5d9] text-[#efb52f]",
  };

  return (
    <div className="rounded-[17px] bg-white p-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] ${colors[item.color]}`}
        >
          <CreditCard size={20} />
        </div>

        <div className="grid min-w-0 flex-1 grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-4 lg:grid-cols-5 lg:items-center">
          <div>
            <p className="text-[10px] text-[#91a0ba]">Card Type</p>
            <p className="mt-1 text-[12px] font-medium text-[#20232d]">
              Secondary
            </p>
          </div>

          <div>
            <p className="text-[10px] text-[#91a0ba]">Bank</p>
            <p className="mt-1 text-[12px] font-medium text-[#20232d]">
              {item.bank}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-[#91a0ba]">Card Number</p>
            <p className="mt-1 text-[12px] font-medium text-[#20232d]">
              {item.number}
            </p>
          </div>

          <div>
            <p className="text-[10px] text-[#91a0ba]">Main Card</p>
            <p className="mt-1 text-[12px] font-medium text-[#20232d]">
              {item.name}
            </p>
          </div>

          <button
            type="button"
            onClick={() => onView(item)}
            className="text-left text-[11px] font-medium text-[#1712e8] hover:underline lg:text-right"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingItem({
  icon,
  title,
  subtitle,
  bg,
  color,
  onClick,
  active,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-3 rounded-xl p-2 text-left transition hover:bg-[#f8f9fc]"
    >
      <div
        className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[14px] ${bg} ${color}`}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <p className="text-[12px] font-medium text-[#20232d]">
          {title}
        </p>

        <p className="mt-1 truncate text-[10px] text-[#91a0ba]">
          {active ? "Card is currently blocked" : subtitle}
        </p>
      </div>

      {active && (
        <span className="text-[9px] font-medium text-red-500">
          Blocked
        </span>
      )}
    </button>
  );
}

function Modal({ children, onClose, width = "max-w-[400px]" }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4 backdrop-blur-[2px]"
      onClick={onClose}
    >
      <div
        className={`w-full ${width} rounded-[22px] bg-white p-6 shadow-2xl`}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export default function CreditCards() {
  const [cards] = useState(initialCards);
  const [cardList, setCardList] = useState(initialCardList);

  const [cardType, setCardType] = useState("Classic");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("25 January 2027");

  const [blocked, setBlocked] = useState(false);

  const [message, setMessage] = useState("");

  const [selectedCard, setSelectedCard] = useState(null);

  const [showPinModal, setShowPinModal] = useState(false);
  const [newPin, setNewPin] = useState("");

  const [showAllCards, setShowAllCards] = useState(false);

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleAddCard = (e) => {
    e.preventDefault();

    if (!cardName.trim() || !cardNumber.trim()) {
      showMessage("Please enter card name and card number.");
      return;
    }

    const newCard = {
      color: "blue",
      bank: "My Bank",
      number: cardNumber,
      name: cardName,
    };

    setCardList((prev) => [...prev, newCard]);

    setCardName("");
    setCardNumber("");

    showMessage("New card added successfully!");
  };

  const handleChangePin = () => {
    if (newPin.length !== 4) {
      showMessage("PIN must contain exactly 4 digits.");
      return;
    }

    setShowPinModal(false);
    setNewPin("");

    showMessage("PIN changed successfully!");
  };

  const handlePaymentApp = (appName) => {
    showMessage(`${appName} setup started successfully!`);
  };

  const visibleCards = showAllCards
    ? cardList
    : cardList.slice(0, 3);

  return (
    <div className="min-h-full bg-[#f5f7fb] px-4 py-5 sm:px-5 md:px-7 lg:px-8">

      {/* Toast */}
      {message && (
        <div className="fixed right-4 top-5 z-[60] flex max-w-[330px] items-center gap-3 rounded-xl bg-[#1712e8] px-4 py-3 text-white shadow-xl">
          <CheckCircle size={18} />

          <span className="text-[12px] font-medium">
            {message}
          </span>

          <button
            type="button"
            onClick={() => setMessage("")}
            className="ml-2 opacity-70 hover:opacity-100"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* ================= MY CARDS ================= */}

      <section>
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-[17px] font-semibold text-[#343c6a]">
            My Cards
          </h2>

          <span className="text-[10px] text-[#8994aa]">
            {cards.length} Cards
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {cards.map((card, index) => (
            <CreditCardView
              key={index}
              card={card}
            />
          ))}
        </div>
      </section>

      {/* ================= MIDDLE ================= */}

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">

        {/* Expense Statistics */}

        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
            Card Expense Statistics
          </h2>

          <div className="rounded-[20px] bg-white p-5 shadow-sm">
            <div className="flex justify-center">
              <div className="relative h-[145px] w-[145px]">
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background:
                      "conic-gradient(#27d1c3 0deg 90deg, #f54291 90deg 180deg, #ffb62d 180deg 270deg, #4775ed 270deg 360deg)",
                  }}
                />

                <div className="absolute inset-[40px] rounded-full bg-white" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[10px] text-[#91a0ba]">
                      Total
                    </p>
                    <p className="text-[15px] font-semibold text-[#343c6a]">
                      $5,756
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 text-[10px] text-[#7d8ba6]">
              <span>
                <i className="mr-2 inline-block h-3 w-3 rounded-full bg-[#4775ed]" />
                DBL Bank
              </span>

              <span>
                <i className="mr-2 inline-block h-3 w-3 rounded-full bg-[#f54291]" />
                BRC Bank
              </span>

              <span>
                <i className="mr-2 inline-block h-3 w-3 rounded-full bg-[#27d1c3]" />
                ABM Bank
              </span>

              <span>
                <i className="mr-2 inline-block h-3 w-3 rounded-full bg-[#ffb62d]" />
                MCP Bank
              </span>
            </div>
          </div>
        </section>

        {/* Card List */}

        <section>
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-[17px] font-semibold text-[#343c6a]">
              Card List
            </h2>

            <button
              type="button"
              onClick={() => setShowAllCards(!showAllCards)}
              className="flex items-center gap-1 text-[11px] font-medium text-[#1712e8]"
            >
              {showAllCards ? "Show Less" : "See All"}
            </button>
          </div>

          <div className="space-y-3">
            {visibleCards.map((item, index) => (
              <CardListItem
                key={`${item.bank}-${index}`}
                item={item}
                onView={setSelectedCard}
              />
            ))}
          </div>
        </section>
      </div>

      {/* ================= BOTTOM ================= */}

      <div className="mt-6 grid grid-cols-1 gap-5 xl:grid-cols-[minmax(0,1fr)_290px]">

        {/* Add New Card */}

        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
            Add New Card
          </h2>

          <div className="rounded-[20px] bg-white p-5 shadow-sm sm:p-6">

            <div className="mb-5 flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e9efff] text-[#4775ed]">
                <Plus size={19} />
              </div>

              <p className="max-w-[700px] text-[11px] leading-5 text-[#8392ad]">
                Credit Card generally means a plastic card issued by
                Scheduled Commercial Banks assigned to a Cardholder,
                with a credit limit, that can be used to purchase goods
                and services on credit or obtain cash advances.
              </p>
            </div>

            <form onSubmit={handleAddCard}>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

                {/* Card Type */}

                <div>
                  <label className="mb-2 block text-[11px] font-medium text-[#20232d]">
                    Card Type
                  </label>

                  <div className="relative">
                    <select
                      value={cardType}
                      onChange={(e) =>
                        setCardType(e.target.value)
                      }
                      className="h-[42px] w-full appearance-none rounded-xl border border-[#e5e8ef] bg-white px-4 pr-10 text-[11px] text-[#71809a] outline-none transition focus:border-[#1712e8]"
                    >
                      <option>Classic</option>
                      <option>Gold</option>
                      <option>Platinum</option>
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-3.5 text-[#8994aa]"
                    />
                  </div>
                </div>

                {/* Name */}

                <div>
                  <label className="mb-2 block text-[11px] font-medium text-[#20232d]">
                    Name On Card
                  </label>

                  <input
                    value={cardName}
                    onChange={(e) =>
                      setCardName(e.target.value)
                    }
                    placeholder="Enter name"
                    className="h-[42px] w-full rounded-xl border border-[#e5e8ef] px-4 text-[11px] outline-none transition focus:border-[#1712e8]"
                  />
                </div>

                {/* Card Number */}

                <div>
                  <label className="mb-2 block text-[11px] font-medium text-[#20232d]">
                    Card Number
                  </label>

                  <input
                    value={cardNumber}
                    onChange={(e) =>
                      setCardNumber(e.target.value)
                    }
                    placeholder="**** **** **** ****"
                    maxLength={19}
                    className="h-[42px] w-full rounded-xl border border-[#e5e8ef] px-4 text-[11px] outline-none transition focus:border-[#1712e8]"
                  />
                </div>

                {/* Expiry */}

                <div>
                  <label className="mb-2 block text-[11px] font-medium text-[#20232d]">
                    Expiration Date
                  </label>

                  <div className="relative">
                    <select
                      value={expiry}
                      onChange={(e) =>
                        setExpiry(e.target.value)
                      }
                      className="h-[42px] w-full appearance-none rounded-xl border border-[#e5e8ef] bg-white px-4 pr-10 text-[11px] text-[#71809a] outline-none focus:border-[#1712e8]"
                    >
                      <option>25 January 2027</option>
                      <option>25 January 2028</option>
                      <option>25 January 2029</option>
                      <option>25 January 2030</option>
                    </select>

                    <ChevronDown
                      size={15}
                      className="pointer-events-none absolute right-4 top-3.5 text-[#8994aa]"
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="mt-5 rounded-xl bg-[#1712e8] px-8 py-3 text-[11px] font-medium text-white transition hover:bg-[#100dbd] active:scale-[0.98]"
              >
                Add Card
              </button>
            </form>
          </div>
        </section>

        {/* Card Settings */}

        <section>
          <h2 className="mb-3 text-[17px] font-semibold text-[#343c6a]">
            Card Setting
          </h2>

          <div className="space-y-2 rounded-[20px] bg-white p-4 shadow-sm">

            <SettingItem
              icon={<Lock size={19} />}
              title={blocked ? "Unblock Card" : "Block Card"}
              subtitle="Instantly block your card"
              bg="bg-[#fff5d9]"
              color="text-[#f0b72d]"
              active={blocked}
              onClick={() => {
                setBlocked(!blocked);

                showMessage(
                  blocked
                    ? "Card unblocked successfully!"
                    : "Card blocked successfully!"
                );
              }}
            />

            <SettingItem
              icon={<Lock size={19} />}
              title="Change Pin Code"
              subtitle="Choose another pin code"
              bg="bg-[#e9efff]"
              color="text-[#4775ed]"
              onClick={() => setShowPinModal(true)}
            />

            <SettingItem
              icon={<Smartphone size={19} />}
              title="Add to Google Pay"
              subtitle="Use your card with Google Pay"
              bg="bg-[#ffe8f0]"
              color="text-[#ed6b9a]"
              onClick={() => handlePaymentApp("Google Pay")}
            />

            <SettingItem
              icon={<Apple size={19} />}
              title="Add to Apple Pay"
              subtitle="Use your card with Apple Pay"
              bg="bg-[#dffaf6]"
              color="text-[#35cfc1]"
              onClick={() => handlePaymentApp("Apple Pay")}
            />

            <SettingItem
              icon={<Apple size={19} />}
              title="Add to Apple Store"
              subtitle="Use your card for Apple purchases"
              bg="bg-[#dffaf6]"
              color="text-[#35cfc1]"
              onClick={() => handlePaymentApp("Apple Store")}
            />
          </div>
        </section>
      </div>

      {/* ================= CARD DETAILS MODAL ================= */}

      {selectedCard && (
        <Modal onClose={() => setSelectedCard(null)}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e9efff] text-[#4775ed]">
                <Eye size={18} />
              </div>

              <h3 className="text-[17px] font-semibold text-[#343c6a]">
                Card Details
              </h3>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] text-gray-500 hover:text-gray-800"
            >
              <X size={16} />
            </button>
          </div>

          <div className="mt-5 space-y-4 rounded-2xl bg-[#f7f9fc] p-5">
            <div>
              <p className="text-[10px] text-[#91a0ba]">
                Bank
              </p>

              <p className="mt-1 text-[13px] font-medium text-[#20232d]">
                {selectedCard.bank}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-[#91a0ba]">
                Card Number
              </p>

              <p className="mt-1 text-[13px] font-medium text-[#20232d]">
                {selectedCard.number}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-[#91a0ba]">
                Card Holder
              </p>

              <p className="mt-1 text-[13px] font-medium text-[#20232d]">
                {selectedCard.name}
              </p>
            </div>

            <div>
              <p className="text-[10px] text-[#91a0ba]">
                Card Type
              </p>

              <p className="mt-1 text-[13px] font-medium text-[#20232d]">
                Secondary
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setSelectedCard(null)}
            className="mt-5 w-full rounded-xl bg-[#1712e8] py-3 text-[11px] font-medium text-white hover:bg-[#100dbd]"
          >
            Close
          </button>
        </Modal>
      )}

      {/* ================= CHANGE PIN MODAL ================= */}

      {showPinModal && (
        <Modal onClose={() => setShowPinModal(false)} width="max-w-[350px]">
          <div className="flex items-center justify-between">
            <h3 className="text-[17px] font-semibold text-[#343c6a]">
              Change PIN
            </h3>

            <button
              type="button"
              onClick={() => setShowPinModal(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb]"
            >
              <X size={16} />
            </button>
          </div>

          <p className="mt-2 text-[11px] text-[#91a0ba]">
            Enter your new 4-digit PIN.
          </p>

          <input
            type="password"
            inputMode="numeric"
            maxLength={4}
            value={newPin}
            onChange={(e) =>
              setNewPin(e.target.value.replace(/\D/g, ""))
            }
            placeholder="Enter 4-digit PIN"
            className="mt-5 h-[43px] w-full rounded-xl border border-[#e5e8ef] px-4 text-[12px] outline-none focus:border-[#1712e8]"
          />

          <button
            type="button"
            onClick={handleChangePin}
            className="mt-4 w-full rounded-xl bg-[#1712e8] py-3 text-[11px] font-medium text-white hover:bg-[#100dbd]"
          >
            Change PIN
          </button>
        </Modal>
      )}
    </div>
  );
}