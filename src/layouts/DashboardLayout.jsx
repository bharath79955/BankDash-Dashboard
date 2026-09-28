import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

function DashboardLayout() {
  const location = useLocation();

  const pageTitles = {
    "/": "Dashboard",
    "/transactions": "Transactions",
    "/accounts": "Accounts",
    "/investments": "Investments",
    "/credit-cards": "Credit Cards",
    "/loans": "Loans",
    "/services": "Services",
    "/privileges": "My Privileges",
    "/settings": "Setting",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="h-screen overflow-hidden bg-[#e8e8e8]">
      <div className="flex h-screen">

        {/* Sidebar - Fixed / No Scrolling */}
        <aside className="h-screen shrink-0 overflow-hidden">
          <Sidebar />
        </aside>

        {/* Right Side */}
        <div className="flex min-w-0 flex-1 flex-col h-screen">

          {/* Header */}
          <div className="shrink-0">
            <Header title={title} />
          </div>

          {/* Only this area scrolls */}
          <main className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden bg-[#f5f7fb]">
            <Outlet />
          </main>

        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;