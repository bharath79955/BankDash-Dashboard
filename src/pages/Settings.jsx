import { useState } from "react";
import {
  Search,
  Settings as SettingsIcon,
  Bell,
  Pencil,
  ChevronDown,
} from "lucide-react";

const PROFILE_IMAGE = "https://i.pravatar.cc/100?img=47";

function Toggle({ enabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-6 w-11 items-center rounded-full transition ${
        enabled ? "bg-[#20cfc1]" : "bg-[#dfe7f0]"
      }`}
      aria-label="Toggle"
    >
      <span
        className={`absolute h-5 w-5 rounded-full bg-white shadow-sm transition ${
          enabled ? "left-[21px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}

function InputField({ label, value, type = "text" }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-medium text-[#20243d]">
        {label}
      </label>

      <input
        type={type}
        defaultValue={value}
        className="h-[40px] w-full rounded-[10px] border border-[#e4e7ec] bg-white px-4 text-[12px] text-[#7d8ba5] outline-none transition focus:border-[#3434eb]"
      />
    </div>
  );
}

function Settings() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const [digitalCurrency, setDigitalCurrency] = useState(true);
  const [merchantOrder, setMerchantOrder] = useState(false);
  const [recommendation, setRecommendation] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  const tabs = ["Edit Profile", "Preferences", "Security"];

  return (
    <div className="min-h-screen bg-[#f5f6fa] text-[#20243d]">
 
      {/* ================= CONTENT ================= */}
      <main className="p-5 sm:p-7 lg:p-8">
        <section className="min-h-[550px] rounded-[20px] bg-white p-5 sm:p-7 lg:p-8">
          {/* ================= TABS ================= */}
          <div className="flex gap-8 border-b border-[#edf0f5]">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`relative pb-3 text-[13px] transition ${
                  activeTab === tab
                    ? "font-medium text-[#2525e8]"
                    : "text-[#8a98b1]"
                }`}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute bottom-[-1px] left-0 h-[2px] w-full rounded-full bg-[#2929ed]" />
                )}
              </button>
            ))}
          </div>

          {/* ================= EDIT PROFILE ================= */}
          {activeTab === "Edit Profile" && (
            <div className="pt-10">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-[110px_1fr]">
                {/* Profile image */}
                <div className="relative mx-auto lg:mx-0">
                  <img
                    src={PROFILE_IMAGE}
                    alt="Profile"
                    className="h-[100px] w-[100px] rounded-full object-cover"
                  />

                  <button
                    type="button"
                    className="absolute bottom-0 right-0 flex h-[25px] w-[25px] items-center justify-center rounded-full bg-[#2929ed] text-white"
                  >
                    <Pencil size={12} />
                  </button>
                </div>

                {/* Form */}
                <div className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2">
                  <InputField
                    label="Your Name"
                    value="Charlene Reed"
                  />

                  <InputField
                    label="User Name"
                    value="Charlene Reed"
                  />

                  <InputField
                    label="Email"
                    value="charlenereed@gmail.com"
                  />

                  <InputField
                    label="Password"
                    value="**********"
                    type="password"
                  />

                  {/* Date of birth */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[13px] font-medium text-[#20243d]">
                      Date of Birth
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        defaultValue="25 January 1990"
                        className="h-[40px] w-full rounded-[10px] border border-[#e4e7ec] bg-white px-4 pr-10 text-[12px] text-[#7d8ba5] outline-none"
                      />

                      <ChevronDown
                        size={16}
                        className="absolute right-4 top-3 text-[#8090aa]"
                      />
                    </div>
                  </div>

                  <InputField
                    label="Present Address"
                    value="San Jose, California, USA"
                  />

                  <InputField
                    label="Permanent Address"
                    value="San Jose, California, USA"
                  />

                  <InputField
                    label="City"
                    value="San Jose"
                  />

                  <InputField
                    label="Postal Code"
                    value="45962"
                  />

                  <InputField
                    label="Country"
                    value="USA"
                  />

                  {/* Save */}
                  <div className="flex items-end justify-end md:col-span-2">
                    <button
                      type="button"
                      onClick={() => alert("Profile saved successfully!")}
                      className="mt-2 h-[40px] w-[145px] rounded-[10px] bg-[#2525e8] text-[13px] font-medium text-white transition hover:bg-[#1c1ccb]"
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================= PREFERENCES ================= */}
          {activeTab === "Preferences" && (
            <div className="pt-8">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Currency */}
                <InputField
                  label="Currency"
                  value="USD"
                />

                {/* Time Zone */}
                <InputField
                  label="Time Zone"
                  value="(GMT-12:00) International Date Line West"
                />
              </div>

              {/* Notification */}
              <div className="mt-5">
                <h3 className="mb-4 text-[13px] font-medium text-[#20243d]">
                  Notification
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Toggle
                      enabled={digitalCurrency}
                      onClick={() =>
                        setDigitalCurrency(!digitalCurrency)
                      }
                    />

                    <span className="text-[13px] text-[#303030]">
                      I send or receive digital currency
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Toggle
                      enabled={merchantOrder}
                      onClick={() =>
                        setMerchantOrder(!merchantOrder)
                      }
                    />

                    <span className="text-[13px] text-[#303030]">
                      I receive merchant order
                    </span>
                  </div>

                  <div className="flex items-center gap-4">
                    <Toggle
                      enabled={recommendation}
                      onClick={() =>
                        setRecommendation(!recommendation)
                      }
                    />

                    <span className="text-[13px] text-[#303030]">
                      There are recommendation for my account
                    </span>
                  </div>
                </div>
              </div>

              {/* Save */}
              <div className="mt-12 flex justify-end">
                <button
                  type="button"
                  onClick={() => alert("Preferences saved successfully!")}
                  className="h-[40px] w-[145px] rounded-[10px] bg-[#2525e8] text-[13px] font-medium text-white transition hover:bg-[#1c1ccb]"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* ================= SECURITY ================= */}
          {activeTab === "Security" && (
            <div className="pt-8">
              {/* Two Factor */}
              <div>
                <h3 className="mb-4 text-[13px] font-medium text-[#20243d]">
                  Two-factor Authentication
                </h3>

                <div className="flex items-center gap-4">
                  <Toggle
                    enabled={twoFactor}
                    onClick={() => setTwoFactor(!twoFactor)}
                  />

                  <span className="text-[13px] text-[#303030]">
                    Enable or disable two factor authentication
                  </span>
                </div>
              </div>

              {/* Change password */}
              <div className="mt-6 max-w-[395px]">
                <h3 className="mb-4 text-[13px] font-medium text-[#20243d]">
                  Change Password
                </h3>

                <div className="space-y-5">
                  <InputField
                    label="Current Password"
                    value="**********"
                    type="password"
                  />

                  <InputField
                    label="New Password"
                    value="**********"
                    type="password"
                  />
                </div>
              </div>

              {/* Save */}
              <div className="mt-12 flex justify-end">
                <button
                  type="button"
                  onClick={() => alert("Security settings saved successfully!")}
                  className="h-[40px] w-[145px] rounded-[10px] bg-[#2525e8] text-[13px] font-medium text-white transition hover:bg-[#1c1ccb]"
                >
                  Save
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Settings;