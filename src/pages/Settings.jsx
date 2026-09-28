import { useState } from "react";
import {
  Pencil,
  ChevronDown,
  CheckCircle2,
  Eye,
  EyeOff,
} from "lucide-react";

const PROFILE_IMAGE = "https://i.pravatar.cc/100?img=47";

function Toggle({ enabled, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Toggle setting"
      className={`relative h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ${
        enabled ? "bg-[#20cfc1]" : "bg-[#dfe5ee]"
      }`}
    >
      <span
        className={`absolute top-[3px] h-5 w-5 rounded-full bg-white shadow-sm transition-all duration-200 ${
          enabled ? "left-[21px]" : "left-[2px]"
        }`}
      />
    </button>
  );
}

function InputField({
  label,
  value,
  type = "text",
  onChange,
  placeholder,
}) {
  return (
    <div className="flex min-w-0 flex-col gap-2">
      <label className="text-[12px] font-medium text-[#20243d] sm:text-[13px]">
        {label}
      </label>

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="h-[42px] w-full rounded-[10px] border border-[#e4e7ec] bg-white px-4 text-[12px] text-[#596783] outline-none transition placeholder:text-[#a4aec0] focus:border-[#3434eb] focus:ring-2 focus:ring-[#3434eb]/5"
      />
    </div>
  );
}

function Settings() {
  const [activeTab, setActiveTab] = useState("Edit Profile");

  const [message, setMessage] = useState("");

  const [profile, setProfile] = useState({
    name: "Charlene Reed",
    username: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "password123",
    dob: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  });

  const [preferences, setPreferences] = useState({
    currency: "USD",
    timezone: "(GMT-12:00) International Date Line West",
  });

  const [digitalCurrency, setDigitalCurrency] = useState(true);
  const [merchantOrder, setMerchantOrder] = useState(false);
  const [recommendation, setRecommendation] = useState(true);
  const [twoFactor, setTwoFactor] = useState(true);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);

  const tabs = ["Edit Profile", "Preferences", "Security"];

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const updateProfile = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updatePreferences = (field, value) => {
    setPreferences((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleProfileSave = () => {
    showMessage("Profile updated successfully!");
  };

  const handlePreferencesSave = () => {
    showMessage("Preferences saved successfully!");
  };

  const handleSecuritySave = () => {
    if (newPassword && newPassword.length < 6) {
      showMessage("New password must contain at least 6 characters.");
      return;
    }

    setCurrentPassword("");
    setNewPassword("");

    showMessage("Security settings saved successfully!");
  };

  return (
    <div className="min-h-full bg-[#f5f6fa] text-[#20243d]">
      {/* Notification */}
      {message && (
        <div className="fixed right-4 top-4 z-[100] flex max-w-[calc(100vw-32px)] items-center gap-2 rounded-xl bg-[#3434eb] px-4 py-3 text-[12px] text-white shadow-xl sm:right-6 sm:top-6">
          <CheckCircle2 size={16} />
          {message}
        </div>
      )}

      <main className="p-4 sm:p-5 md:p-6 lg:p-7">
        <section className="min-h-[550px] rounded-[20px] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.02)] sm:p-6 lg:p-8">
          {/* Tabs */}
          <div className="overflow-x-auto">
            <div className="flex min-w-max gap-6 border-b border-[#edf0f5] sm:gap-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`relative whitespace-nowrap pb-3 text-[12px] transition sm:text-[13px] ${
                    activeTab === tab
                      ? "font-medium text-[#2525e8]"
                      : "text-[#8a98b1] hover:text-[#343c6a]"
                  }`}
                >
                  {tab}

                  {activeTab === tab && (
                    <span className="absolute bottom-[-1px] left-0 h-[2px] w-full rounded-full bg-[#2929ed]" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* ================= EDIT PROFILE ================= */}
          {activeTab === "Edit Profile" && (
            <div className="pt-7 sm:pt-9">
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-[105px_1fr] lg:gap-8">
                {/* Profile Image */}
                <div className="flex justify-center lg:block">
                  <div className="relative h-[100px] w-[100px]">
                    <img
                      src={PROFILE_IMAGE}
                      alt="Profile"
                      className="h-[100px] w-[100px] rounded-full object-cover"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        showMessage("Profile picture editor opened.")
                      }
                      className="absolute bottom-0 right-0 flex h-[27px] w-[27px] items-center justify-center rounded-full bg-[#2929ed] text-white shadow-md transition hover:bg-[#1d1dc9]"
                    >
                      <Pencil size={12} />
                    </button>
                  </div>
                </div>

                {/* Profile Form */}
                <div className="grid grid-cols-1 gap-x-5 gap-y-4 md:grid-cols-2">
                  <InputField
                    label="Your Name"
                    value={profile.name}
                    onChange={(e) =>
                      updateProfile("name", e.target.value)
                    }
                  />

                  <InputField
                    label="User Name"
                    value={profile.username}
                    onChange={(e) =>
                      updateProfile("username", e.target.value)
                    }
                  />

                  <InputField
                    label="Email"
                    type="email"
                    value={profile.email}
                    onChange={(e) =>
                      updateProfile("email", e.target.value)
                    }
                  />

                  <div className="relative">
                    <InputField
                      label="Password"
                      value={profile.password}
                      type={showPassword ? "text" : "password"}
                      onChange={(e) =>
                        updateProfile("password", e.target.value)
                      }
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-[31px] text-[#8a98b1]"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>

                  {/* Date of Birth */}
                  <div className="flex flex-col gap-2">
                    <label className="text-[12px] font-medium text-[#20243d] sm:text-[13px]">
                      Date of Birth
                    </label>

                    <div className="relative">
                      <input
                        type="text"
                        value={profile.dob}
                        onChange={(e) =>
                          updateProfile("dob", e.target.value)
                        }
                        className="h-[42px] w-full rounded-[10px] border border-[#e4e7ec] bg-white px-4 pr-10 text-[12px] text-[#596783] outline-none focus:border-[#3434eb]"
                      />

                      <ChevronDown
                        size={16}
                        className="pointer-events-none absolute right-4 top-3 text-[#8090aa]"
                      />
                    </div>
                  </div>

                  <InputField
                    label="Present Address"
                    value={profile.presentAddress}
                    onChange={(e) =>
                      updateProfile("presentAddress", e.target.value)
                    }
                  />

                  <InputField
                    label="Permanent Address"
                    value={profile.permanentAddress}
                    onChange={(e) =>
                      updateProfile(
                        "permanentAddress",
                        e.target.value
                      )
                    }
                  />

                  <InputField
                    label="City"
                    value={profile.city}
                    onChange={(e) =>
                      updateProfile("city", e.target.value)
                    }
                  />

                  <InputField
                    label="Postal Code"
                    value={profile.postalCode}
                    onChange={(e) =>
                      updateProfile("postalCode", e.target.value)
                    }
                  />

                  <InputField
                    label="Country"
                    value={profile.country}
                    onChange={(e) =>
                      updateProfile("country", e.target.value)
                    }
                  />

                  <div className="flex justify-end md:col-span-2">
                    <button
                      type="button"
                      onClick={handleProfileSave}
                      className="mt-2 h-[42px] w-full rounded-[10px] bg-[#2525e8] text-[12px] font-medium text-white transition hover:bg-[#1c1ccb] sm:w-[145px]"
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
            <div className="pt-7 sm:pt-8">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                {/* Currency */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-[#20243d] sm:text-[13px]">
                    Currency
                  </label>

                  <div className="relative">
                    <select
                      value={preferences.currency}
                      onChange={(e) =>
                        updatePreferences(
                          "currency",
                          e.target.value
                        )
                      }
                      className="h-[42px] w-full appearance-none rounded-[10px] border border-[#e4e7ec] bg-white px-4 pr-10 text-[12px] text-[#596783] outline-none focus:border-[#3434eb]"
                    >
                      <option>USD</option>
                      <option>EUR</option>
                      <option>GBP</option>
                      <option>INR</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-3 text-[#8090aa]"
                    />
                  </div>
                </div>

                {/* Time Zone */}
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-medium text-[#20243d] sm:text-[13px]">
                    Time Zone
                  </label>

                  <div className="relative">
                    <select
                      value={preferences.timezone}
                      onChange={(e) =>
                        updatePreferences(
                          "timezone",
                          e.target.value
                        )
                      }
                      className="h-[42px] w-full appearance-none rounded-[10px] border border-[#e4e7ec] bg-white px-4 pr-10 text-[12px] text-[#596783] outline-none focus:border-[#3434eb]"
                    >
                      <option>
                        (GMT-12:00) International Date Line West
                      </option>
                      <option>(GMT+05:30) India Standard Time</option>
                      <option>(GMT+00:00) Greenwich Mean Time</option>
                      <option>(GMT-05:00) Eastern Time</option>
                    </select>

                    <ChevronDown
                      size={16}
                      className="pointer-events-none absolute right-4 top-3 text-[#8090aa]"
                    />
                  </div>
                </div>
              </div>

              {/* Notifications */}
              <div className="mt-7">
                <h3 className="mb-4 text-[13px] font-medium text-[#20243d]">
                  Notification
                </h3>

                <div className="space-y-4">
                  <PreferenceToggle
                    enabled={digitalCurrency}
                    onClick={() =>
                      setDigitalCurrency(!digitalCurrency)
                    }
                    text="I send or receive digital currency"
                  />

                  <PreferenceToggle
                    enabled={merchantOrder}
                    onClick={() =>
                      setMerchantOrder(!merchantOrder)
                    }
                    text="I receive merchant order"
                  />

                  <PreferenceToggle
                    enabled={recommendation}
                    onClick={() =>
                      setRecommendation(!recommendation)
                    }
                    text="There are recommendations for my account"
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  onClick={handlePreferencesSave}
                  className="h-[42px] w-full rounded-[10px] bg-[#2525e8] text-[12px] font-medium text-white transition hover:bg-[#1c1ccb] sm:w-[145px]"
                >
                  Save
                </button>
              </div>
            </div>
          )}

          {/* ================= SECURITY ================= */}
          {activeTab === "Security" && (
            <div className="pt-7 sm:pt-8">
              {/* Two Factor */}
              <div>
                <h3 className="mb-4 text-[13px] font-medium text-[#20243d]">
                  Two-factor Authentication
                </h3>

                <PreferenceToggle
                  enabled={twoFactor}
                  onClick={() => setTwoFactor(!twoFactor)}
                  text="Enable or disable two factor authentication"
                />
              </div>

              {/* Change Password */}
              <div className="mt-7 max-w-[430px]">
                <h3 className="mb-4 text-[13px] font-medium text-[#20243d]">
                  Change Password
                </h3>

                <div className="space-y-5">
                  <div className="relative">
                    <InputField
                      label="Current Password"
                      type={showCurrentPassword ? "text" : "password"}
                      value={currentPassword}
                      onChange={(e) =>
                        setCurrentPassword(e.target.value)
                      }
                      placeholder="Enter current password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowCurrentPassword(
                          !showCurrentPassword
                        )
                      }
                      className="absolute right-3 top-[31px] text-[#8a98b1]"
                    >
                      {showCurrentPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>

                  <div className="relative">
                    <InputField
                      label="New Password"
                      type={showNewPassword ? "text" : "password"}
                      value={newPassword}
                      onChange={(e) =>
                        setNewPassword(e.target.value)
                      }
                      placeholder="Enter new password"
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowNewPassword(!showNewPassword)
                      }
                      className="absolute right-3 top-[31px] text-[#8a98b1]"
                    >
                      {showNewPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  type="button"
                  onClick={handleSecuritySave}
                  className="h-[42px] w-full rounded-[10px] bg-[#2525e8] text-[12px] font-medium text-white transition hover:bg-[#1c1ccb] sm:w-[145px]"
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

function PreferenceToggle({ enabled, onClick, text }) {
  return (
    <div className="flex items-center gap-4">
      <Toggle enabled={enabled} onClick={onClick} />

      <span className="text-[12px] leading-5 text-[#303030] sm:text-[13px]">
        {text}
      </span>
    </div>
  );
}

export default Settings;