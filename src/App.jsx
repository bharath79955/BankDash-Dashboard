import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";

import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import Accounts from "./pages/Accounts";
import Investments from "./pages/Investments";
import CreditCards from "./pages/CreditCards";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Privileges from "./pages/Privileges";
import Settings from "./pages/Settings";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    "/settings": "Settings",
  };

  const title = pageTitles[location.pathname] || "Dashboard";

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex">

      <Sidebar
        mobileOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      <div className="flex-1 min-w-0 flex flex-col">

        <Header
          title={title}
          mobileMenuOpen={mobileMenuOpen}
          onMenuClick={() => setMobileMenuOpen((prev) => !prev)}
        />

        <main className="flex-1 min-w-0 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/accounts" element={<Accounts />} />
            <Route path="/investments" element={<Investments />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/services" element={<Services />} />
            <Route path="/privileges" element={<Privileges />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </main>

      </div>
    </div>
  );
}

export default App;