import { useState } from "react";
import {
  Search,
  Settings,
  Bell,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({
  title = "Dashboard",
  onMenuClick,
  mobileMenuOpen,
}) {
  const navigate = useNavigate();
  const [searchOpen, setSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(false);

  return (
    <header className="relative z-30 flex h-[76px] shrink-0 items-center justify-between border-b border-[#e9edf5] bg-white px-4 sm:px-6 lg:px-8">
      {/* ================= LEFT ================= */}
      <div className="flex min-w-0 items-center gap-3">
        {/* Mobile Menu */}
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Toggle navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f7f9fc] text-[#343c6a] transition hover:bg-[#eef1ff] lg:hidden"
        >
          {mobileMenuOpen ? (
            <X size={20} />
          ) : (
            <Menu size={20} />
          )}
        </button>

        <h1 className="truncate text-[20px] font-semibold text-[#343c6a] sm:text-[22px] lg:text-[24px]">
          {title}
        </h1>
      </div>

      {/* ================= RIGHT ================= */}
      <div className="flex items-center gap-2 sm:gap-3 lg:gap-5">
        {/* Desktop Search */}
        <div className="hidden h-[40px] w-[170px] items-center gap-2 rounded-full bg-[#f7f9fc] px-4 sm:flex md:w-[200px] lg:w-[255px]">
          <Search
            size={18}
            strokeWidth={2}
            className="shrink-0 text-[#718096]"
          />

          <input
            type="text"
            placeholder="Search for something"
            className="w-full bg-transparent text-[12px] text-[#343c6a] outline-none placeholder:text-[#a0aec0]"
          />
        </div>

        {/* Mobile Search */}
        <button
          type="button"
          onClick={() => setSearchOpen(!searchOpen)}
          aria-label="Search"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f9fc] transition hover:bg-[#eef1ff] sm:hidden"
        >
          <Search
            size={18}
            strokeWidth={2}
            className="text-[#718096]"
          />
        </button>

        {/* Settings */}
        <button
          type="button"
          onClick={() => navigate("/settings")}
          aria-label="Settings"
          className="hidden h-10 w-10 items-center justify-center rounded-full bg-[#f7f9fc] transition hover:bg-[#eef1ff] sm:flex"
        >
          <Settings
            size={20}
            strokeWidth={1.9}
            className="text-[#718096]"
          />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setNotifications(!notifications)}
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#f7f9fc] transition hover:bg-[#fff0f5]"
          >
            <Bell
              size={20}
              strokeWidth={1.9}
              className="text-[#718096]"
            />

            {/* Notification Dot */}
            <span className="absolute right-[9px] top-[8px] h-[6px] w-[6px] rounded-full bg-[#f05d7e]" />
          </button>

          {/* Notification Dropdown */}
          {notifications && (
            <div className="absolute right-0 top-[50px] w-[280px] rounded-2xl border border-[#edf0f5] bg-white p-4 shadow-xl">
              <div className="flex items-center justify-between">
                <h3 className="text-[14px] font-semibold text-[#343c6a]">
                  Notifications
                </h3>

                <button
                  type="button"
                  onClick={() => setNotifications(false)}
                  className="text-[11px] text-[#3434eb]"
                >
                  Clear
                </button>
              </div>

              <div className="mt-3 rounded-xl bg-[#f7f9fc] p-3">
                <p className="text-[12px] font-medium text-[#343c6a]">
                  Welcome to BankDash
                </p>

                <p className="mt-1 text-[10px] text-[#91a0ba]">
                  Your account dashboard is ready.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <button
          type="button"
          onClick={() => navigate("/settings")}
          className="group flex items-center gap-2"
          aria-label="Open profile settings"
        >
          <img
            src="https://i.pravatar.cc/100?img=32"
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover transition group-hover:ring-2 group-hover:ring-[#3434eb]/20 sm:h-[46px] sm:w-[46px]"
          />

          <ChevronDown
            size={15}
            className="hidden text-[#91a0ba] sm:block"
          />
        </button>
      </div>

      {/* ================= MOBILE SEARCH PANEL ================= */}
      {searchOpen && (
        <div className="absolute left-4 right-4 top-[82px] z-50 flex h-[46px] items-center gap-2 rounded-xl border border-[#e7eaf1] bg-white px-4 shadow-lg sm:hidden">
          <Search
            size={18}
            className="shrink-0 text-[#718096]"
          />

          <input
            autoFocus
            type="text"
            placeholder="Search for something"
            className="w-full bg-transparent text-[12px] text-[#343c6a] outline-none placeholder:text-[#a0aec0]"
          />

          <button
            type="button"
            onClick={() => setSearchOpen(false)}
            className="text-[#91a0ba]"
          >
            <X size={17} />
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;