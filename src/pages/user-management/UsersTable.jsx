import { useState } from "react";
import { Select, Button, Input, Checkbox } from "antd";
import { FaWhatsapp } from "react-icons/fa";
import UserDetailsModal from "./UserDetailsModal";

const users = [
  {
    id: 1,
    sl: "#1233",
    name: "Kathryn Murp",
    email: "bockely@att.com",
    plan: "Monthly",
    date: "22 Nov 2022",
  },
  {
    id: 2,
    sl: "#1233",
    name: "Devon Lane",
    email: "csilvers@rizon.com",
    plan: "Free",
    date: "22 Nov 2022",
  },
  {
    id: 3,
    sl: "#1233",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    plan: "Monthly",
    date: "22 Nov 2022",
  },
  {
    id: 4,
    sl: "#1233",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    plan: "Yearly",
    date: "22 Nov 2022",
  },
  {
    id: 5,
    sl: "#1233",
    name: "Floyd Miles",
    email: "xterris@gmail.com",
    plan: "Yearly",
    date: "22 Nov 2022",
  },
  {
    id: 6,
    sl: "#1233",
    name: "Eleanor Pena",
    email: "xterris@gmail.com",
    plan: "Free",
    date: "22 Nov 2022",
  },
  {
    id: 7,
    sl: "#1233",
    name: "Devon Lane",
    email: "xterris@gmail.com",
    plan: "Free",
    date: "22 Nov 2022",
  },
  {
    id: 8,
    sl: "#1233",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    plan: "Free",
    date: "22 Nov 2022",
  },
  {
    id: 9,
    sl: "#1233",
    name: "Devon Lane",
    email: "xterris@gmail.com",
    plan: "Monthly",
    date: "22 Nov 2022",
  },
  {
    id: 10,
    sl: "#1233",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    plan: "Yearly",
    date: "22 Nov 2022",
  },
];

const selectStyle = {
  width: 160,
  borderRadius: 8,
};

export default function UsersTable({ onAction, activeTab, setActiveTab }) {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleAll = (e) => {
    setSelectAll(e.target.checked);
    setSelected(e.target.checked ? users.map((u) => u.id) : []);
  };

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  return (
    <div>
      {/* Filters */}
      <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
        {/* Tab buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab("users")}
            className="px-7 py-2 rounded-lg font-semibold text-sm transition-all"
            style={{
              background: activeTab === "users" ? "#f26b4e" : "transparent",
              color: activeTab === "users" ? "#fff" : "#f26b4e",
              border: "1.5px solid #f26b4e",
            }}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("company")}
            className="px-7 py-2 rounded-lg font-semibold text-sm transition-all"
            style={{
              background: activeTab === "company" ? "#f26b4e" : "transparent",
              color: activeTab === "company" ? "#fff" : "#f26b4e",
              border: "1.5px solid #f26b4e",
            }}
          >
            Company
          </button>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-semibold text-gray-700">Filter By</span>
          {["Role", "Preference Niveau", "Type", "Guest Capacity"].map(
            (label) => (
              <Select
                key={label}
                placeholder={`Select from here`}
                style={selectStyle}
                suffixIcon={<span>▼</span>}
              />
            ),
          )}
          <Button
            type="primary"
            style={{
              backgroundColor: "#f26b4e",
              borderColor: "#f26b4e",
              borderRadius: 8,
              fontWeight: 600,
              height: 36,
            }}
            onClick={onAction}
          >
            + Add User
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-2 mb-5">
        <Input
          placeholder="Search by company Name, IDNR or any keyword"
          style={{ borderRadius: 8, height: 42, fontSize: 14 }}
          className="flex-1"
        />
        <Button
          type="primary"
          style={{
            backgroundColor: "#f26b4e",
            borderColor: "#f26b4e",
            borderRadius: 8,
            fontWeight: 600,
            height: 42,
            paddingInline: 28,
          }}
        >
          Search
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-900 font-semibold border-b border-gray-200">
              <th className="pb-3 pr-4">
                <Checkbox checked={selectAll} onChange={toggleAll} /> Select All
              </th>
              <th className="pb-3 pr-6">SL no.</th>
              <th className="pb-3 pr-6">Full Name</th>
              <th className="pb-3 pr-6">Email</th>
              <th className="pb-3 pr-6">Current Plan</th>
              <th className="pb-3 pr-6">Registration Date</th>
              <th className="pb-3 pr-6">View</th>
              <th className="pb-3">Share</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="border-b border-gray-100 hover:bg-orange-50/30"
              >
                <td className="py-3 pr-4">
                  <Checkbox
                    checked={selected.includes(u.id)}
                    onChange={() => toggle(u.id)}
                  />
                </td>
                <td className="py-3 pr-6 text-gray-600">{u.sl}</td>
                <td className="py-3 pr-6 text-gray-900">{u.name}</td>
                <td className="py-3 pr-6 text-gray-600">{u.email}</td>
                <td className="py-3 pr-6 text-gray-700">{u.plan}</td>
                <td className="py-3 pr-6 text-gray-600">{u.date}</td>
                <td className="py-3 pr-6">
                  <UserDetailsModal />
                </td>
                <td className="py-3">
                  <button className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 text-gray-700 bg-white">
                    Share to What's App{" "}
                    <FaWhatsapp className="text-green-500 text-base" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
