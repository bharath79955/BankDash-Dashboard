import { useState } from "react";
import { Search, Settings, Bell, User, LogOut } from "lucide-react";

function Header({ title = "Dashboard" }) {
  const [search, setSearch] = useState("");
  const [activeMenu, setActiveMenu] = useState(null);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() !== "") {
      console.log("Searching for:", value);
    }
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="relative z-30 flex h-[76px] items-center justify-between border-b border-[#e9edf5] bg-white px-8">

      {/* Page Title */}
      <h1 className="text-[24px] font-semibold text-[#343c6a]">
        {title}
      </h1>

      {/* Right Side */}
      <div className="flex items-center gap-5">

        {/* Search */}
        <div className="flex h-[40px] w-[200px] items-center gap-2 rounded-full bg-[#f7f9fc] px-4">
          <Search size={18} className="text-[#718096]" />

          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search for something"
            className="w-full border-none bg-transparent text-[12px] text-[#343c6a] outline-none placeholder:text-[#a0aec0]"
          />
        </div>

        {/* Settings */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("settings")}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f7f9fc] transition hover:bg-[#eef1ff]"
            type="button"
          >
            <Settings size={20} className="text-[#718096]" />
          </button>

          {activeMenu === "settings" && (
            <div className="absolute right-0 top-12 w-[180px] rounded-xl border border-gray-100 bg-white p-3 shadow-lg">
              <p className="mb-2 text-[12px] font-semibold text-[#343c6a]">
                Quick Settings
              </p>

              <button className="w-full rounded-lg px-3 py-2 text-left text-[12px] text-gray-600 hover:bg-[#f5f7fb]">
                Account Settings
              </button>

              <button className="w-full rounded-lg px-3 py-2 text-left text-[12px] text-gray-600 hover:bg-[#f5f7fb]">
                Privacy
              </button>

              <button className="w-full rounded-lg px-3 py-2 text-left text-[12px] text-gray-600 hover:bg-[#f5f7fb]">
                Notifications
              </button>
            </div>
          )}
        </div>

        {/* Notification */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("notification")}
            className="relative flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#f7f9fc] transition hover:bg-[#fff0f5]"
            type="button"
          >
            <Bell size={20} className="text-[#718096]" />

            <span className="absolute right-[8px] top-[7px] h-[6px] w-[6px] rounded-full bg-red-400" />
          </button>

          {activeMenu === "notification" && (
            <div className="absolute right-0 top-12 w-[260px] rounded-xl border border-gray-100 bg-white p-4 shadow-lg">
              <div className="flex items-center justify-between">
                <h3 className="text-[13px] font-semibold text-[#343c6a]">
                  Notifications
                </h3>

                <span className="rounded-full bg-red-50 px-2 py-1 text-[9px] text-red-500">
                  3 New
                </span>
              </div>

              <div className="mt-3 space-y-2">
                <div className="rounded-lg bg-[#f7f9fc] p-3">
                  <p className="text-[11px] font-medium text-[#343c6a]">
                    Payment received
                  </p>
                  <p className="mt-1 text-[9px] text-gray-400">
                    Your payment was successful.
                  </p>
                </div>

                <div className="rounded-lg bg-[#f7f9fc] p-3">
                  <p className="text-[11px] font-medium text-[#343c6a]">
                    New transaction
                  </p>
                  <p className="mt-1 text-[9px] text-gray-400">
                    You have a new transaction.
                  </p>
                </div>

                <div className="rounded-lg bg-[#f7f9fc] p-3">
                  <p className="text-[11px] font-medium text-[#343c6a]">
                    Account updated
                  </p>
                  <p className="mt-1 text-[9px] text-gray-400">
                    Your account details were updated.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => toggleMenu("profile")}
            type="button"
            className="rounded-full"
          >
            <img
              src="https://i.pravatar.cc/100?img=32"
              alt="Profile"
              className="h-[46px] w-[46px] rounded-full object-cover transition hover:ring-2 hover:ring-[#3434eb]"
            />
          </button>

          {activeMenu === "profile" && (
            <div className="absolute right-0 top-14 w-[190px] rounded-xl border border-gray-100 bg-white p-3 shadow-lg">

              <div className="mb-2 border-b border-gray-100 pb-3">
                <p className="text-[13px] font-semibold text-[#343c6a]">
                  Bharath Kumar
                </p>

                <p className="text-[10px] text-gray-400">
                  Python Full Stack Developer
                </p>
              </div>

              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[12px] text-gray-600 hover:bg-[#f5f7fb]">
                <User size={15} />
                My Profile
              </button>

              <button className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-[12px] text-red-500 hover:bg-red-50">
                <LogOut size={15} />
                Logout
              </button>
            </div>
          )}
        </div>

      </div>
    </header>
  );
}

export default Header;