import { useState } from "react";
import { ConfigProvider } from "antd";
import UsersTable from "./UsersTable";
import CompanyTable from "./CompanyTable";
import ActionModal from "./ActionModal";
import CompanyProfileModal from "./CompanyProfileModal";

export default function App() {
  const [activeTab, setActiveTab] = useState("users");
  const [showAction, setShowAction] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  return (
    <div className="min-h-screen">
      <div>
        {/* Table container */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          {activeTab === "users" ? (
            <UsersTable
              onViewProfile={() => setShowProfile(true)}
              onAction={() => setShowAction(true)}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ) : (
            <CompanyTable
              onViewDetails={() => setShowProfile(true)}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          )}
        </div>
      </div>

      {/* <ActionModal open={showAction} onClose={() => setShowAction(false)} /> */}
      <CompanyProfileModal
        open={showProfile}
        onClose={() => setShowProfile(false)}
      />
    </div>
  );
}
