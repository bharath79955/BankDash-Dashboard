import React, { useMemo, useState } from "react";
import {
  HeartPulse,
  ShoppingBag,
  ShieldCheck,
  HandCoins,
  BriefcaseBusiness,
  ChartColumnIncreasing,
  UserRound,
  CreditCard,
  Search,
  X,
  ArrowRight,
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
    title: "Business Loans",
    subtitle: "Flexible financing for your business",
    description:
      "Get access to flexible business financing designed to support your business growth and working capital needs.",
    icon: HandCoins,
    iconBg: "bg-[#ffe5ef]",
    iconColor: "text-[#ed6095]",
    category: "Loans",
    status: "Available",
  },
  {
    title: "Checking Accounts",
    subtitle: "Simple and convenient banking",
    description:
      "Manage your everyday transactions with a convenient checking account and easy access to your money.",
    icon: BriefcaseBusiness,
    iconBg: "bg-[#fff2d3]",
    iconColor: "text-[#f5b52d]",
    category: "Accounts",
    status: "Available",
  },
  {
    title: "Savings Accounts",
    subtitle: "Grow your savings securely",
    description:
      "Build your savings with flexible account options designed to help you reach your financial goals.",
    icon: ChartColumnIncreasing,
    iconBg: "bg-[#ffe5ef]",
    iconColor: "text-[#ed6095]",
    category: "Accounts",
    status: "Available",
  },
  {
    title: "Debit & Credit Cards",
    subtitle: "Secure payments everywhere",
    description:
      "Use your debit and credit cards for secure online and offline payments with convenient card management.",
    icon: CreditCard,
    iconBg: "bg-[#e8efff]",
    iconColor: "text-[#4169e8]",
    category: "Cards",
    status: "Available",
  },
  {
    title: "Life Insurance",
    subtitle: "Protection for your family",
    description:
      "Protect your loved ones with insurance solutions designed to provide financial security when it matters.",
    icon: ShieldCheck,
    iconBg: "bg-[#ddfaf7]",
    iconColor: "text-[#36cdbf]",
    category: "Insurance",
    status: "Available",
  },
  {
    title: "Personal Loans",
    subtitle: "Financial support when needed",
    description:
      "Personal loan options for planned expenses, emergencies, and other important financial requirements.",
    icon: UserRound,
    iconBg: "bg-[#e9efff]",
    iconColor: "text-[#4269e8]",
    category: "Loans",
    status: "Available",
  },
];

function ServiceIcon({ service, size = 23 }) {
  const Icon = service.icon;

  return (
    <div
      className={`flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] ${service.iconBg}`}
    >
      <Icon size={size} strokeWidth={2} className={service.iconColor} />
    </div>
  );
}

function TopServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group flex min-h-[94px] items-center rounded-[20px] bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition duration-200 hover:-translate-y-1 hover:shadow-md">
      <div
        className={`flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full ${service.iconBg}`}
      >
        <Icon
          size={26}
          strokeWidth={2}
          className={service.iconColor}
        />
      </div>

      <div className="ml-4 min-w-0">
        <h3 className="truncate text-[15px] font-semibold text-[#252b3d]">
          {service.title}
        </h3>

        <p className="mt-1 truncate text-[12px] text-[#8290ab]">
          {service.subtitle}
        </p>
      </div>
    </div>
  );
}

function ServiceDetailsModal({ service, onClose }) {
  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[430px] rounded-[22px] bg-white p-6 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ServiceIcon service={service} />

            <div>
              <h3 className="text-[17px] font-semibold text-[#343b63]">
                {service.title}
              </h3>

              <p className="mt-1 text-[11px] text-[#91a0ba]">
                {service.category}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] text-[#77839d] transition hover:bg-[#eef1f7]"
          >
            <X size={17} />
          </button>
        </div>

        <div className="mt-6 rounded-[16px] bg-[#f7f9fc] p-4">
          <p className="text-[12px] leading-6 text-[#7886a1]">
            {service.description}
          </p>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-[14px] border border-[#edf0f5] p-3">
            <p className="text-[10px] text-[#91a0ba]">
              Category
            </p>

            <p className="mt-1 text-[12px] font-medium text-[#252b3d]">
              {service.category}
            </p>
          </div>

          <div className="rounded-[14px] border border-[#edf0f5] p-3">
            <p className="text-[10px] text-[#91a0ba]">
              Status
            </p>

            <p className="mt-1 text-[12px] font-medium text-[#20b99f]">
              {service.status}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="mt-5 w-full rounded-[10px] bg-[#1814f3] py-3 text-[12px] font-medium text-white transition hover:bg-[#100ce0]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

function Services() {
  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState(null);
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Loans",
    "Accounts",
    "Cards",
    "Insurance",
  ];

  const filteredServices = useMemo(() => {
    const query = search.toLowerCase().trim();

    return services.filter((service) => {
      const matchesSearch =
        !query ||
        `${service.title} ${service.subtitle} ${service.category}`
          .toLowerCase()
          .includes(query);

      const matchesCategory =
        category === "All" || service.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  return (
    <div className="min-h-full bg-[#f5f6fa] p-4 sm:p-5 md:p-6 lg:p-7">
      {/* Top Services */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {topServices.map((service) => (
          <TopServiceCard
            key={service.title}
            service={service}
          />
        ))}
      </div>

      {/* Heading + Search */}
      <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="text-[18px] font-semibold text-[#343b63]">
            Bank Services List
          </h2>

          <p className="mt-1 text-[11px] text-[#91a0ba]">
            Explore banking services available to you
          </p>
        </div>

        <div className="flex h-[40px] w-full items-center gap-2 rounded-full bg-white px-4 shadow-sm lg:w-[260px]">
          <Search size={16} className="shrink-0 text-[#8994aa]" />

          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search services..."
            className="w-full bg-transparent text-[11px] text-[#343b63] outline-none placeholder:text-[#a0a9b9]"
          />
        </div>
      </div>

      {/* Category Filter */}
      <div className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setCategory(item)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-medium transition ${
              category === item
                ? "bg-[#1814f3] text-white"
                : "bg-white text-[#7d8ba6] hover:bg-[#eef0ff]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Desktop Header */}
      <div className="mt-4 hidden rounded-[18px] bg-white px-4 py-3 md:grid md:grid-cols-[2.1fr_1fr_1fr_1fr_auto] md:items-center md:gap-4">
        <span className="text-[11px] text-[#8996ae]">
          Service
        </span>

        <span className="text-[11px] text-[#8996ae]">
          Category
        </span>

        <span className="text-[11px] text-[#8996ae]">
          Status
        </span>

        <span className="text-[11px] text-[#8996ae]">
          Availability
        </span>

        <span className="text-right text-[11px] text-[#8996ae]">
          Action
        </span>
      </div>

      {/* Services */}
      <div className="mt-3 space-y-3">
        {filteredServices.map((service) => (
          <div
            key={service.title}
            className="rounded-[20px] bg-white px-3 py-3 shadow-[0_2px_12px_rgba(0,0,0,0.02)] transition hover:shadow-md sm:px-4"
          >
            {/* Desktop / Tablet */}
            <div className="hidden items-center gap-4 md:grid md:grid-cols-[2.1fr_1fr_1fr_1fr_auto]">
              {/* Service */}
              <div className="flex min-w-0 items-center">
                <ServiceIcon service={service} />

                <div className="ml-4 min-w-0">
                  <p className="truncate text-[13px] font-medium text-[#20263b]">
                    {service.title}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-[#8290ab]">
                    {service.subtitle}
                  </p>
                </div>
              </div>

              {/* Category */}
              <div>
                <p className="text-[12px] font-medium text-[#252b3d]">
                  {service.category}
                </p>

                <p className="mt-1 text-[10px] text-[#91a0ba]">
                  Banking service
                </p>
              </div>

              {/* Status */}
              <div>
                <span className="inline-flex rounded-full bg-[#e5faf5] px-3 py-1 text-[10px] font-medium text-[#20b99f]">
                  {service.status}
                </span>
              </div>

              {/* Availability */}
              <div>
                <p className="text-[12px] font-medium text-[#252b3d]">
                  Online & Branch
                </p>

                <p className="mt-1 text-[10px] text-[#91a0ba]">
                  Available now
                </p>
              </div>

              {/* Action */}
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="flex min-w-[110px] items-center justify-center gap-1 rounded-full border border-[#aebbd0] bg-white px-4 py-[7px] text-[11px] font-medium text-[#7383a2] transition hover:border-[#1814f3] hover:bg-[#1814f3] hover:text-white"
              >
                View Details
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Mobile */}
            <div className="md:hidden">
              <div className="flex items-center">
                <ServiceIcon service={service} />

                <div className="ml-4 min-w-0 flex-1">
                  <p className="truncate text-[13px] font-medium text-[#20263b]">
                    {service.title}
                  </p>

                  <p className="mt-1 truncate text-[11px] text-[#8290ab]">
                    {service.subtitle}
                  </p>
                </div>

                <span className="rounded-full bg-[#e5faf5] px-2.5 py-1 text-[9px] font-medium text-[#20b99f]">
                  Available
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[#f0f2f6] pt-3">
                <div>
                  <p className="text-[10px] text-[#91a0ba]">
                    Category
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-[#252b3d]">
                    {service.category}
                  </p>
                </div>

                <div>
                  <p className="text-[10px] text-[#91a0ba]">
                    Availability
                  </p>

                  <p className="mt-1 text-[11px] font-medium text-[#252b3d]">
                    Online & Branch
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedService(service)}
                className="mt-4 flex w-full items-center justify-center gap-1 rounded-full border border-[#aebbd0] bg-white py-2 text-[11px] font-medium text-[#7383a2] transition hover:border-[#1814f3] hover:bg-[#1814f3] hover:text-white"
              >
                View Details
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        ))}

        {/* No Results */}
        {filteredServices.length === 0 && (
          <div className="rounded-[20px] bg-white px-5 py-12 text-center">
            <Search
              size={28}
              className="mx-auto text-[#a3aec0]"
            />

            <p className="mt-3 text-[13px] font-medium text-[#343b63]">
              No services found
            </p>

            <p className="mt-1 text-[11px] text-[#91a0ba]">
              Try another service name or category.
            </p>
          </div>
        )}
      </div>

      {/* Modal */}
      <ServiceDetailsModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  );
}

export default Services;