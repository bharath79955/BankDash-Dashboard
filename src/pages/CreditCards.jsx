import { useState } from "react";
import {
  CreditCard,
  Lock,
  Smartphone,
  Apple,
  ChevronDown,
  X,
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
    blue: "bg-gradient-to-br from-[#3d7cff] to-[#4d91ed] text-white",
    purple: "bg-gradient-to-br from-[#4438ef] to-[#1712e8] text-white",
    white: "bg-white text-[#343c6a] border border-[#e5e7eb]",
  };

  return (
    <div
      className={`relative h-[174px] overflow-hidden rounded-[19px] ${styles[card.type]}`}
    >
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <p
              className={`text-[9px] ${
                card.type === "white" ? "text-[#9aa4b8]" : "text-white/80"
              }`}
            >
              Balance
            </p>

            <p className="text-[16px] font-medium">{card.balance}</p>
          </div>

          <CreditCard
            size={27}
            strokeWidth={1.7}
            className={
              card.type === "white" ? "text-[#b8bbc5]" : "text-white"
            }
          />
        </div>

        <div className="mt-5 flex gap-12">
          <div>
            <p
              className={`text-[9px] ${
                card.type === "white" ? "text-[#9aa4b8]" : "text-white/70"
              }`}
            >
              CARD HOLDER
            </p>

            <p className="text-[11px]">{card.holder}</p>
          </div>

          <div>
            <p
              className={`text-[9px] ${
                card.type === "white" ? "text-[#9aa4b8]" : "text-white/70"
              }`}
            >
              VALID THRU
            </p>

            <p className="text-[11px]">{card.valid}</p>
          </div>
        </div>
      </div>

      <div
        className={`absolute bottom-0 left-0 right-0 h-[55px] flex items-center justify-between px-5 ${
          card.type === "white" ? "bg-[#fafafa]" : "bg-white/10"
        }`}
      >
        <span className="text-[16px] tracking-wide">{card.number}</span>

        <div className="flex -space-x-2">
          <div
            className={`h-[23px] w-[23px] rounded-full ${
              card.type === "white" ? "bg-[#c7cad4]" : "bg-white/60"
            }`}
          />

          <div
            className={`h-[23px] w-[23px] rounded-full ${
              card.type === "white" ? "bg-[#aeb2bf]" : "bg-white/40"
            }`}
          />
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
    <div className="h-[69px] bg-white rounded-[17px] px-3 flex items-center">
      <div
        className={`w-[46px] h-[46px] rounded-[15px] flex items-center justify-center ${colors[item.color]}`}
      >
        <CreditCard size={20} />
      </div>

      <div className="grid grid-cols-5 flex-1 items-center ml-3">
        <div>
          <p className="text-[12px] font-medium text-[#20232d]">
            Card Type
          </p>
          <p className="text-[11px] text-[#91a0ba]">Secondary</p>
        </div>

        <div>
          <p className="text-[12px] font-medium text-[#20232d]">
            Bank
          </p>
          <p className="text-[11px] text-[#91a0ba]">{item.bank}</p>
        </div>

        <div>
          <p className="text-[12px] font-medium text-[#20232d]">
            Card Number
          </p>
          <p className="text-[11px] text-[#91a0ba]">{item.number}</p>
        </div>

        <div>
          <p className="text-[12px] font-medium text-[#20232d]">
            Main Card
          </p>
          <p className="text-[11px] text-[#91a0ba]">{item.name}</p>
        </div>

        <button
          onClick={() => onView(item)}
          className="text-[12px] font-medium text-[#1712e8] text-right hover:underline"
        >
          View Details
        </button>
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
      className="w-full flex items-center gap-4 text-left hover:bg-[#f8f9fc] rounded-xl p-2 transition"
    >
      <div
        className={`w-[46px] h-[46px] rounded-[15px] flex items-center justify-center ${bg} ${color}`}
      >
        {icon}
      </div>

      <div className="flex-1">
        <p className="text-[12px] font-medium text-[#20232d]">
          {title}
        </p>

        <p className="text-[11px] text-[#91a0ba] mt-1">
          {active ? "Card is currently blocked" : subtitle}
        </p>
      </div>

      {active && (
        <span className="text-[10px] text-red-500 font-medium">
          Blocked
        </span>
      )}
    </button>
  );
}

function CreditCards() {
  const [cardList, setCardList] = useState(initialCardList);

  const [cardType, setCardType] = useState("Classic");
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("25 January 2025");

  const [blocked, setBlocked] = useState(false);

  const [message, setMessage] = useState("");

  const [selectedCard, setSelectedCard] = useState(null);

  const [showPinModal, setShowPinModal] = useState(false);
  const [newPin, setNewPin] = useState("");

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const handleAddCard = () => {
    if (!cardName || !cardNumber) {
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

  return (
    <div className="min-h-[calc(100vh-76px)] bg-[#f5f7fb] px-8 py-5">

      {/* SUCCESS / ERROR MESSAGE */}
      {message && (
        <div className="fixed top-5 right-5 z-50 bg-[#1712e8] text-white px-5 py-3 rounded-xl shadow-lg text-[13px]">
          {message}
        </div>
      )}

      {/* My Cards */}
      <section>
        <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
          My Cards
        </h2>

        <div className="grid grid-cols-3 gap-5">
          {initialCards.map((card, index) => (
            <CreditCardView key={index} card={card} />
          ))}
        </div>
      </section>

      {/* Middle Section */}
      <div className="grid grid-cols-[270px_1fr] gap-5 mt-4">

        {/* Expense Statistics */}
        <section>
          <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
            Card Expense Statistics
          </h2>

          <div className="h-[240px] bg-white rounded-[20px] flex flex-col items-center justify-center">

            <div className="relative w-[140px] h-[140px]">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background:
                    "conic-gradient(#27d1c3 0deg 90deg, #f54291 90deg 180deg, #ffb62d 180deg 270deg, #4775ed 270deg 360deg)",
                }}
              />

              <div className="absolute inset-[42px] bg-white rounded-full" />
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-2 mt-4 text-[11px] text-[#7d8ba6]">
              <span>
                <i className="inline-block w-3 h-3 rounded-full bg-[#4775ed] mr-2" />
                DBL Bank
              </span>

              <span>
                <i className="inline-block w-3 h-3 rounded-full bg-[#f54291] mr-2" />
                BRC Bank
              </span>

              <span>
                <i className="inline-block w-3 h-3 rounded-full bg-[#27d1c3] mr-2" />
                ABM Bank
              </span>

              <span>
                <i className="inline-block w-3 h-3 rounded-full bg-[#ffb62d] mr-2" />
                MCP Bank
              </span>
            </div>
          </div>
        </section>

        {/* Card List */}
        <section>
          <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
            Card List
          </h2>

          <div className="space-y-4">
            {cardList.map((item, index) => (
              <CardListItem
                key={index}
                item={item}
                onView={setSelectedCard}
              />
            ))}
          </div>
        </section>
      </div>

      {/* Bottom Section */}
      <div className="grid grid-cols-[1fr_270px] gap-5 mt-4">

        {/* Add New Card */}
        <section>
          <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
            Add New Card
          </h2>

          <div className="bg-white rounded-[20px] p-6">

            <p className="text-[13px] leading-5 text-[#8392ad] max-w-[700px]">
              Credit Card generally means a plastic card issued by
              Scheduled Commercial Banks assigned to a Cardholder, with a
              credit limit, that can be used to purchase goods and services
              on credit or obtain cash advances.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-5">

              {/* Card Type */}
              <div>
                <label className="block text-[12px] mb-2 text-[#20232d]">
                  Card Type
                </label>

                <select
                  value={cardType}
                  onChange={(e) => setCardType(e.target.value)}
                  className="w-full h-[40px] border border-[#e5e8ef] rounded-[12px] px-4 text-[12px] text-[#91a0ba] outline-none"
                >
                  <option>Classic</option>
                  <option>Gold</option>
                  <option>Platinum</option>
                </select>
              </div>

              {/* Name */}
              <div>
                <label className="block text-[12px] mb-2 text-[#20232d]">
                  Name On Card
                </label>

                <input
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  placeholder="Enter name"
                  className="w-full h-[40px] border border-[#e5e8ef] rounded-[12px] px-4 text-[12px] outline-none"
                />
              </div>

              {/* Card Number */}
              <div>
                <label className="block text-[12px] mb-2 text-[#20232d]">
                  Card Number
                </label>

                <input
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="**** **** **** ****"
                  className="w-full h-[40px] border border-[#e5e8ef] rounded-[12px] px-4 text-[12px] outline-none"
                />
              </div>

              {/* Expiration */}
              <div>
                <label className="block text-[12px] mb-2 text-[#20232d]">
                  Expiration Date
                </label>

                <div className="relative">
                  <select
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    className="w-full h-[40px] border border-[#e5e8ef] rounded-[12px] px-4 text-[12px] text-[#91a0ba] outline-none appearance-none"
                  >
                    <option>25 January 2025</option>
                    <option>25 January 2026</option>
                    <option>25 January 2027</option>
                    <option>25 January 2028</option>
                  </select>

                  <ChevronDown
                    size={15}
                    className="absolute right-4 top-3 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleAddCard}
              className="mt-5 bg-[#1712e8] hover:bg-[#100dbd] text-white rounded-[8px] px-8 py-3 text-[13px] transition"
            >
              Add Card
            </button>
          </div>
        </section>

        {/* Card Setting */}
        <section>
          <h2 className="text-[18px] font-semibold text-[#343c6a] mb-3">
            Card Setting
          </h2>

          <div className="bg-white rounded-[20px] p-5 space-y-3">

            {/* Block Card */}
            <SettingItem
              icon={<Lock size={20} />}
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

            {/* Change PIN */}
            <SettingItem
              icon={<Lock size={20} />}
              title="Change Pin Code"
              subtitle="Choose another pin code"
              bg="bg-[#e9efff]"
              color="text-[#4775ed]"
              onClick={() => setShowPinModal(true)}
            />

            {/* Google Pay */}
            <SettingItem
              icon={<Smartphone size={20} />}
              title="Add to Google Pay"
              subtitle="Withdraw without any card"
              bg="bg-[#ffe8f0]"
              color="text-[#ed6b9a]"
              onClick={() => handlePaymentApp("Google Pay")}
            />

            {/* Apple Pay */}
            <SettingItem
              icon={<Apple size={20} />}
              title="Add to Apple Pay"
              subtitle="Withdraw without any card"
              bg="bg-[#dffaf6]"
              color="text-[#35cfc1]"
              onClick={() => handlePaymentApp("Apple Pay")}
            />

            {/* Apple Store */}
            <SettingItem
              icon={<Apple size={20} />}
              title="Add to Apple Store"
              subtitle="Withdraw without any card"
              bg="bg-[#dffaf6]"
              color="text-[#35cfc1]"
              onClick={() => handlePaymentApp("Apple Store")}
            />

          </div>
        </section>
      </div>

      {/* VIEW DETAILS MODAL */}
      {selectedCard && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[380px] rounded-[20px] p-6 shadow-xl">

            <div className="flex justify-between items-center mb-5">
              <h3 className="text-[18px] font-semibold text-[#343c6a]">
                Card Details
              </h3>

              <button
                onClick={() => setSelectedCard(null)}
                className="w-8 h-8 rounded-full bg-[#f5f7fb] flex items-center justify-center"
              >
                <X size={17} />
              </button>
            </div>

            <div className="space-y-4 text-[13px]">

              <div>
                <p className="text-[#91a0ba]">Bank</p>
                <p className="font-medium text-[#20232d]">
                  {selectedCard.bank}
                </p>
              </div>

              <div>
                <p className="text-[#91a0ba]">Card Number</p>
                <p className="font-medium text-[#20232d]">
                  {selectedCard.number}
                </p>
              </div>

              <div>
                <p className="text-[#91a0ba]">Card Holder</p>
                <p className="font-medium text-[#20232d]">
                  {selectedCard.name}
                </p>
              </div>

              <div>
                <p className="text-[#91a0ba]">Card Type</p>
                <p className="font-medium text-[#20232d]">
                  Secondary
                </p>
              </div>

            </div>

            <button
              onClick={() => setSelectedCard(null)}
              className="mt-6 w-full bg-[#1712e8] text-white py-3 rounded-lg text-[13px]"
            >
              Close
            </button>

          </div>
        </div>
      )}

      {/* CHANGE PIN MODAL */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

          <div className="bg-white w-[350px] rounded-[20px] p-6">

            <div className="flex justify-between items-center">
              <h3 className="text-[18px] font-semibold text-[#343c6a]">
                Change PIN
              </h3>

              <button
                onClick={() => setShowPinModal(false)}
                className="w-8 h-8 rounded-full bg-[#f5f7fb] flex items-center justify-center"
              >
                <X size={17} />
              </button>
            </div>

            <p className="text-[12px] text-[#91a0ba] mt-2">
              Enter your new 4-digit PIN.
            </p>

            <input
              type="password"
              maxLength={4}
              inputMode="numeric"
              value={newPin}
              onChange={(e) =>
                setNewPin(e.target.value.replace(/\D/g, ""))
              }
              placeholder="Enter 4-digit PIN"
              className="w-full h-[42px] border border-[#e5e8ef] rounded-xl px-4 mt-5 outline-none"
            />

            <button
              onClick={handleChangePin}
              className="w-full bg-[#1712e8] text-white py-3 rounded-lg mt-4 text-[13px]"
            >
              Change PIN
            </button>

          </div>
        </div>
      )}
    </div>
  );
}

export default CreditCards;