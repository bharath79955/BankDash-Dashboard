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

export default function Sidebar() {
  return (
    <aside className="hidden h-screen w-[250px] shrink-0 border-r border-[#e6e8ef] bg-white lg:flex lg:flex-col">

      {/* Logo */}
<div className="flex h-[100px] items-center px-8">
  <div className="flex items-center gap-2">
    {/* BankDash Logo Icon */}
    <div className="relative w-[28px] h-[28px]">
      <div className="absolute top-[5px] left-[2px] w-[22px] h-[15px] border-2 border-[#3434eb] rounded-[3px]" />
      
      <div className="absolute top-[10px] left-[5px] w-[22px] h-[15px] border-2 border-[#3434eb] rounded-[3px] bg-white" />
      
      <div className="absolute top-[13px] left-[9px] w-[7px] h-[2px] bg-[#ed6b9a] rounded-full" />
    </div>

    {/* BankDash Text */}
    <h1 className="text-[20px] font-bold tracking-tight text-[#343b6b]">
      BankDash.
    </h1>
  </div>
</div>

      {/* Navigation */}
      <nav className="flex-1 px-3">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `relative flex h-[52px] items-center gap-5 rounded-r-xl px-7 text-[15px] font-medium transition-all ${
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
      </nav>

      {/* Settings */}
      <div className="px-3 pb-7">
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            `relative flex h-[52px] items-center gap-5 rounded-r-xl px-7 text-[15px] font-medium transition-all ${
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
      </div>
    </aside>
  );
}