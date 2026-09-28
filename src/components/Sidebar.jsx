import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ArrowLeftRight,
  UserRound,
  TrendingUp,
  CreditCard,
  HandCoins,
  Wrench,
  Gift,
  Settings,
  X,
} from "lucide-react";

const menuItems = [
  {
    name: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Transactions",
    path: "/transactions",
    icon: ArrowLeftRight,
  },
  {
    name: "Accounts",
    path: "/accounts",
    icon: UserRound,
  },
  {
    name: "Investments",
    path: "/investments",
    icon: TrendingUp,
  },
  {
    name: "Credit Cards",
    path: "/credit-cards",
    icon: CreditCard,
  },
  {
    name: "Loans",
    path: "/loans",
    icon: HandCoins,
  },
  {
    name: "Services",
    path: "/services",
    icon: Wrench,
  },
  {
    name: "My Privileges",
    path: "/privileges",
    icon: Gift,
  },
];

function Navigation({ onNavigate }) {
  return (
    <div className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;

        return (
          <NavLink
            key={item.name}
            to={item.path}
            end={item.path === "/"}
            onClick={onNavigate}
            className={({ isActive }) =>
              `relative flex h-[52px] items-center gap-5 rounded-r-xl px-7 text-[15px] font-medium transition-all duration-200 ${
                isActive
                  ? "bg-[#f0f4ff] text-[#3434eb]"
                  : "text-[#a3a7b7] hover:bg-[#f7f8fc] hover:text-[#343b6b]"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <span className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#3434eb]" />
                )}

                <Icon
                  size={21}
                  strokeWidth={isActive ? 2.2 : 1.8}
                />

                <span>{item.name}</span>
              </>
            )}
          </NavLink>
        );
      })}
    </div>
  );
}

function Sidebar({ mobileOpen, onClose }) {
  return (
    <>
      {/* ================= DESKTOP SIDEBAR ================= */}
      <aside className="hidden lg:flex h-screen w-[250px] shrink-0 flex-col border-r border-[#e6e8ef] bg-white">
        {/* Logo */}
        <div className="flex h-[100px] shrink-0 items-center px-8">
          <Logo />
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3">
          <Navigation />
        </nav>

        {/* Settings */}
        <div className="shrink-0 px-3 pb-7">
          <SettingsLink />
        </div>
      </aside>

      {/* ================= MOBILE OVERLAY ================= */}
      {mobileOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/30 lg:hidden"
        />
      )}

      {/* ================= MOBILE SIDEBAR ================= */}
      <aside
        className={`fixed bottom-0 left-0 top-0 z-50 w-[270px] bg-white shadow-xl transition-transform duration-300 lg:hidden ${
          mobileOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Mobile Header */}
        <div className="flex h-[76px] items-center justify-between border-b border-[#e6e8ef] px-6">
          <Logo />

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f7f8fc] transition hover:bg-[#eef1f7]"
            aria-label="Close menu"
          >
            <X
              size={19}
              strokeWidth={2}
              className="text-[#343c6a]"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="h-[calc(100%-140px)] overflow-y-auto px-3 pt-5">
          <Navigation onNavigate={onClose} />
        </nav>

        {/* Mobile Settings */}
        <div className="absolute bottom-5 left-3 right-3">
          <SettingsLink onNavigate={onClose} />
        </div>
      </aside>
    </>
  );
}

/* ================= LOGO ================= */

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Back card */}
        <rect
          x="8"
          y="6"
          width="21"
          height="15"
          rx="2.5"
          stroke="#3434EB"
          strokeWidth="2"
        />

        {/* Front card */}
        <rect
          x="4"
          y="12"
          width="21"
          height="15"
          rx="2.5"
          fill="white"
          stroke="#3434EB"
          strokeWidth="2"
        />

        {/* Card line */}
        <path
          d="M7 17H22"
          stroke="#3434EB"
          strokeWidth="2"
          strokeLinecap="round"
        />

        {/* Pink detail */}
        <path
          d="M8 23H13"
          stroke="#F04F70"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <h1 className="text-[20px] font-bold tracking-tight text-[#343B6B]">
        BankDash.
      </h1>
    </div>
  );
}

/* ================= SETTINGS ================= */

function SettingsLink({ onNavigate }) {
  return (
    <NavLink
      to="/settings"
      onClick={onNavigate}
      className={({ isActive }) =>
        `relative flex h-[52px] items-center gap-5 rounded-r-xl px-7 text-[15px] font-medium transition-all duration-200 ${
          isActive
            ? "bg-[#f0f4ff] text-[#3434eb]"
            : "text-[#a3a7b7] hover:bg-[#f7f8fc] hover:text-[#343b6b]"
        }`
      }
    >
      {({ isActive }) => (
        <>
          {isActive && (
            <span className="absolute left-0 top-0 h-full w-1 rounded-r-full bg-[#3434eb]" />
          )}

          <Settings
            size={21}
            strokeWidth={isActive ? 2.2 : 1.8}
          />

          <span>Settings</span>
        </>
      )}
    </NavLink>
  );
}

export default Sidebar;