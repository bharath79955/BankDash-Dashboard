import React from "react";
import {
  HeartPulse,
  ShoppingBag,
  ShieldCheck,
  HandCoins,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  UserRound,
  CreditCard,
  Wrench,
} from "lucide-react";

const topServices = [
  {
    title: "Life Insurance",
    subtitle: "Unlimited protection",
    icon: HeartPulse,
    iconBg: "bg-[#e9efff]",
    iconColor: "text-[#4269e8]",
  },
  {
    title: "Shopping",
    subtitle: "Buy. Think. Grow.",
    icon: ShoppingBag,
    iconBg: "bg-[#fff3d7]",
    iconColor: "text-[#f4b62e]",
  },
  {
    title: "Safety",
    subtitle: "We are your allies",
    icon: ShieldCheck,
    iconBg: "bg-[#ddfaf7]",
    iconColor: "text-[#36cdbf]",
  },
];

const services = [
  {
    title: "Business loans",
    subtitle: "It is a long established",
    icon: HandCoins,
    iconBg: "bg-[#ffe5ef]",
    iconColor: "text-[#ed6095]",
  },
  {
    title: "Checking accounts",
    subtitle: "It is a long established",
    icon: BriefcaseBusiness,
    iconBg: "bg-[#fff2d3]",
    iconColor: "text-[#f5b52d]",
  },
  {
    title: "Savings accounts",
    subtitle: "It is a long established",
    icon: ChartColumnIncreasing,
    iconBg: "bg-[#ffe5ef]",
    iconColor: "text-[#ed6095]",
  },
  {
    title: "Debit and credit cards",
    subtitle: "It is a long established",
    icon: UserRound,
    iconBg: "bg-[#e8efff]",
    iconColor: "text-[#4169e8]",
  },
  {
    title: "Life Insurance",
    subtitle: "It is a long established",
    icon: ShieldCheck,
    iconBg: "bg-[#ddfaf7]",
    iconColor: "text-[#36cdbf]",
  },
  {
    title: "Business loans",
    subtitle: "It is a long established",
    icon: HandCoins,
    iconBg: "bg-[#ffe5ef]",
    iconColor: "text-[#ed6095]",
  },
];

function Services() {
  const handleDetails = (serviceName) => {
    alert(`Viewing details for ${serviceName}`);
  };

  return (
    <div className="min-h-full bg-[#f5f6fa] p-5 sm:p-6 lg:p-7">
      {/* Top Services */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {topServices.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.title}
              className="flex min-h-[92px] items-center rounded-[20px] bg-white px-5 py-4"
            >
              <div
                className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full ${service.iconBg}`}
              >
                <Icon
                  size={26}
                  strokeWidth={2}
                  className={service.iconColor}
                />
              </div>

              <div className="ml-4">
                <h3 className="text-[16px] font-semibold text-[#252b3d]">
                  {service.title}
                </h3>

                <p className="mt-1 text-[12px] text-[#8290ab]">
                  {service.subtitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Section Heading */}
      <h2 className="mt-5 text-[18px] font-semibold text-[#343b63]">
        Bank Services List
      </h2>

      {/* Services List */}
      <div className="mt-4 space-y-4">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={`${service.title}-${index}`}
              className="rounded-[20px] bg-white px-3 py-3 sm:px-4"
            >
              {/* Desktop / Tablet */}
              <div className="hidden items-center gap-4 md:grid md:grid-cols-[2.1fr_1fr_1fr_1fr_auto]">
                {/* Service Name */}
                <div className="flex items-center min-w-0">
                  <div
                    className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] ${service.iconBg}`}
                  >
                    <Icon
                      size={23}
                      strokeWidth={2}
                      className={service.iconColor}
                    />
                  </div>

                  <div className="ml-4 min-w-0">
                    <p className="truncate text-[13px] font-medium text-[#20263b]">
                      {service.title}
                    </p>

                    <p className="mt-1 truncate text-[12px] text-[#8290ab]">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Column 1 */}
                <div>
                  <p className="text-[13px] font-medium text-[#252b3d]">
                    Lorem Ipsum
                  </p>

                  <p className="mt-1 text-[12px] text-[#8290ab]">
                    Many publishing
                  </p>
                </div>

                {/* Column 2 */}
                <div>
                  <p className="text-[13px] font-medium text-[#252b3d]">
                    Lorem Ipsum
                  </p>

                  <p className="mt-1 text-[12px] text-[#8290ab]">
                    Many publishing
                  </p>
                </div>

                {/* Column 3 */}
                <div>
                  <p className="text-[13px] font-medium text-[#252b3d]">
                    Lorem Ipsum
                  </p>

                  <p className="mt-1 text-[12px] text-[#8290ab]">
                    Many publishing
                  </p>
                </div>

                {/* Button */}
                <button
                  type="button"
                  onClick={() => handleDetails(service.title)}
                  className="min-w-[116px] rounded-full border border-[#aebbd0] bg-white px-4 py-[6px] text-[12px] font-medium text-[#7383a2] transition hover:border-[#3636df] hover:bg-[#3636df] hover:text-white"
                >
                  View Details
                </button>
              </div>

              {/* Mobile */}
              <div className="md:hidden">
                <div className="flex items-center">
                  <div
                    className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] ${service.iconBg}`}
                  >
                    <Icon
                      size={23}
                      strokeWidth={2}
                      className={service.iconColor}
                    />
                  </div>

                  <div className="ml-4 min-w-0">
                    <p className="truncate text-[13px] font-medium text-[#20263b]">
                      {service.title}
                    </p>

                    <p className="mt-1 text-[12px] text-[#8290ab]">
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#f0f2f6] pt-3">
                  <div>
                    <p className="text-[12px] text-[#8290ab]">
                      Service
                    </p>

                    <p className="mt-1 text-[12px] font-medium text-[#252b3d]">
                      Lorem Ipsum
                    </p>
                  </div>

                  <div>
                    <p className="text-[12px] text-[#8290ab]">
                      Details
                    </p>

                    <p className="mt-1 text-[12px] font-medium text-[#252b3d]">
                      Many publishing
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleDetails(service.title)}
                  className="mt-4 w-full rounded-full border border-[#aebbd0] bg-white py-2 text-[12px] font-medium text-[#7383a2] transition hover:border-[#3636df] hover:bg-[#3636df] hover:text-white"
                >
                  View Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Services;