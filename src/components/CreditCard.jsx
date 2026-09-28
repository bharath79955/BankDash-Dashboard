import { Wifi } from "lucide-react";

export default function CreditCard({
  variant = "blue",
  balance = "$5,756",
  cardNumber = "3778",
  name = "Eddy Cusuma",
  expiry = "12/22",
}) {
  const isBlue = variant === "blue";

  return (
    <div
      className={`relative h-[190px] w-full overflow-hidden rounded-[22px] p-6 text-white shadow-sm ${
        isBlue
          ? "bg-gradient-to-br from-[#4c49ed] via-[#5754ee] to-[#6b68f3]"
          : "border border-[#e5e7eb] bg-white text-[#343b6b]"
      }`}
    >
      {/* Decorative circle */}
      {isBlue && (
        <>
          <div className="absolute -right-12 -top-16 h-40 w-40 rounded-full border-[35px] border-white/5" />
          <div className="absolute -right-5 -bottom-20 h-40 w-40 rounded-full border-[35px] border-white/5" />
        </>
      )}

      {/* Top */}
      <div className="relative z-10 flex items-start justify-between">
        <div>
          <p
            className={`text-[11px] ${
              isBlue ? "text-white/70" : "text-[#8d93a5]"
            }`}
          >
            Balance
          </p>

          <p className="mt-1 text-[20px] font-semibold">
            {balance}
          </p>
        </div>

        <div className="flex flex-col items-end">
          <div className="flex items-center gap-1">
            <span className="h-4 w-4 rounded-full bg-red-500/90" />
            <span className="h-4 w-4 -ml-2 rounded-full bg-yellow-400/90" />
          </div>

          <p
            className={`mt-1 text-[9px] ${
              isBlue ? "text-white/60" : "text-[#9ca3af]"
            }`}
          >
            Mastercard
          </p>
        </div>
      </div>

      {/* Middle */}
      <div className="relative z-10 mt-7 flex items-center justify-between">
        <div>
          <p
            className={`text-[9px] uppercase ${
              isBlue ? "text-white/60" : "text-[#9ca3af]"
            }`}
          >
            Card Holder
          </p>

          <p className="mt-1 text-[13px] font-medium">
            {name}
          </p>
        </div>

        <div>
          <p
            className={`text-[9px] uppercase ${
              isBlue ? "text-white/60" : "text-[#9ca3af]"
            }`}
          >
            Valid Thru
          </p>

          <p className="mt-1 text-[13px] font-medium">
            {expiry}
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="relative z-10 mt-5 flex items-center justify-between">
        <p className="text-[15px] tracking-[2px]">
          •••• •••• •••• {cardNumber}
        </p>

        <Wifi
          size={20}
          className="rotate-90 opacity-80"
        />
      </div>
    </div>
  );
}