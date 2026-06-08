import { Menu } from "antd";
import { Link, matchPath, useLocation } from "react-router-dom";
import { FaUsers } from "react-icons/fa";
import { IoDiamondOutline, IoGameControllerOutline } from "react-icons/io5";
import { BiDollarCircle, BiSolidBookContent } from "react-icons/bi";
import { BsBadge3D } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FaUsersViewfinder } from "react-icons/fa6";

const Sidebar = ({ adminProfile, onClick }) => {
  const location = useLocation();

  // Determine the selected key based on current route
  const getSelectedKey = () => {
    const path = location.pathname;
    if (path === "/") return ["dashboard"];
    if (path === "/user-management") return ["user-management"];
    if (path === "/administrators") return ["administrators"];
    if (path === "/campaign") return ["campaign"];

    // if (matchPath("/3D-annatation/:annotationId", path)) {
    //   return ["3D-annatation"];
    // }
    return ["dashboard"];
  };

  // Dashboard, Card Submission, Fleet Comparison, Content Management, Company Overall Analysis, 3D Heatmap, User Management, Rig Management, Subcription

  // Permission-based sidebar filtering
  const getFilteredSidebarItems = () => {
    const baseItems = [
      {
        key: "dashboard",
        icon: (
          <LuLayoutDashboard className="font-semibold !text-[20px] !text-[#fff] " />
        ),
        label: (
          <Link to="/" className="text-[#002436]">
            Dashboard
          </Link>
        ),
        show: true,
      },
      {
        key: "user-management",
        icon: <FaUsers className="font-semibold !text-[20px] !text-[#fff]" />,
        label: <Link to="/user-management">User Management</Link>,
        show: true,
      },
      {
        key: "administrators",
        icon: (
          <MdOutlineAdminPanelSettings className="font-semibold !text-[20px] !text-[#fff]" />
        ),
        label: <Link to="/administrators">Administrators</Link>,
        show: true,
      },
      {
        key: "campaign",
        icon: (
          <IoGameControllerOutline className="font-semibold !text-[20px] !text-[#fff]" />
        ),
        label: <Link to="/campaign">Campaign</Link>,
        show: true,
      },
    ];

    // Filter items and remove empty parent items
    return baseItems
      .filter((item) => item.show)
      .map((item) => ({
        ...item,
        children:
          item.children && item.children.length > 0 ? item.children : undefined,
      }))
      .filter((item) => !item.children || item.children.length > 0);
  };

  // Show loading if profile not available
  if (!adminProfile) {
    return (
      <div
        style={{
          width: "256px",
          height: "90vh",
          backgroundColor: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="text-center">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-sm text-gray-600">Loading menu...</p>
        </div>
      </div>
    );
  }

  const sidebarItems = getFilteredSidebarItems();

  return (
    <div style={{ position: "relative", height: "92vh" }}>
      <Menu
        mode="inline"
        selectedKeys={getSelectedKey()}
        items={sidebarItems}
        onClick={onClick}
        style={{
          height: "calc(100% - 0px)",
          backgroundColor: "#2A2A2A",
          color: "#ffffff",
          borderRight: 0,
          padding: "7px 0px 0px 0px",
        }}
      />
    </div>
  );
};

export default Sidebar;
