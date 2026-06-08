import { useState } from "react";
import { Select, Button, Input, Checkbox } from "antd";
import { FaWhatsapp } from "react-icons/fa";

const companies = [
  {
    id: 1,
    sl: "#1233",
    name: "Kathryn Murp",
    email: "bockely@att.com",
    plan: "Monthly",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 2,
    sl: "#1233",
    name: "Devon Lane",
    email: "csilvers@rizon.com",
    plan: "Free",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 3,
    sl: "#1233",
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    plan: "Monthly",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 4,
    sl: "#1233",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    plan: "Yearly",
    status: "Canceled",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 5,
    sl: "#1233",
    name: "Floyd Miles",
    email: "xterris@gmail.com",
    plan: "Yearly",
    status: "Canceled",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 6,
    sl: "#1233",
    name: "Eleanor Pena",
    email: "xterris@gmail.com",
    plan: "Free",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 7,
    sl: "#1233",
    name: "Devon Lane",
    email: "xterris@gmail.com",
    plan: "Free",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 8,
    sl: "#1233",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    plan: "Free",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 9,
    sl: "#1233",
    name: "Devon Lane",
    email: "xterris@gmail.com",
    plan: "Monthly",
    status: "Active",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
  {
    id: 10,
    sl: "#1233",
    name: "Hari Danang",
    email: "xterris@gmail.com",
    plan: "Yearly",
    status: "Canceled",
    regDate: "22 Nov 2022",
    billDate: "22 Nov 2022",
  },
];

export default function CompanyTable({
  onViewDetails,
  activeTab,
  setActiveTab,
}) {
  const [selected, setSelected] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const toggleAll = (e) => {
    setSelectAll(e.target.checked);
    setSelected(e.target.checked ? companies.map((c) => c.id) : []);
  };

  const toggle = (id) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const StatusBadge = ({ status }) => {
    const isActive = status === "Active";
    return (
      <span
        className="px-4 py-1 rounded-full text-sm font-semibold"
        style={{
          color: isActive ? "#16a34a" : "#dc2626",
          background: isActive ? "#dcfce7" : "#fee2e2",
        }}
      >
        {status}
      </span>
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
          {["Type", "Guest Capacity", "Niveau", "Niveau"].map((label, i) => (
            <Select
              key={i}
              placeholder="Select from here"
              style={{ width: 160 }}
            />
          ))}
          <Button
            type="primary"
            style={{
              backgroundColor: "#f26b4e",
              borderColor: "#f26b4e",
              borderRadius: 8,
              fontWeight: 600,
              height: 36,
            }}
          >
            + Add Company
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
              <th className="pb-3 pr-5">SL no.</th>
              <th className="pb-3 pr-5">Full Name</th>
              <th className="pb-3 pr-5">Email</th>
              <th className="pb-3 pr-5">Current Plan</th>
              <th className="pb-3 pr-5">Status</th>
              <th className="pb-3 pr-5">Registration Date</th>
              <th className="pb-3 pr-5">Next Billing Date</th>
              <th className="pb-3 pr-5">View</th>
              <th className="pb-3">Share</th>
            </tr>
          </thead>
          <tbody>
            {companies.map((c) => (
              <tr
                key={c.id}
                className="border-b border-gray-100 hover:bg-orange-50/30"
              >
                <td className="py-3 pr-4">
                  <Checkbox
                    checked={selected.includes(c.id)}
                    onChange={() => toggle(c.id)}
                  />
                </td>
                <td className="py-3 pr-5 text-gray-600">{c.sl}</td>
                <td className="py-3 pr-5 text-gray-900">{c.name}</td>
                <td className="py-3 pr-5 text-gray-600">{c.email}</td>
                <td className="py-3 pr-5 text-gray-700">{c.plan}</td>
                <td className="py-3 pr-5">
                  <StatusBadge status={c.status} />
                </td>
                <td className="py-3 pr-5 text-gray-600">{c.regDate}</td>
                <td className="py-3 pr-5 text-gray-600">{c.billDate}</td>
                <td className="py-3 pr-5">
                  <button
                    onClick={() => onViewDetails(c)}
                    className="px-3 py-1 rounded-full text-xs font-semibold border"
                    style={{
                      color: "#22c55e",
                      borderColor: "#bbf7d0",
                      background: "#f0fdf4",
                    }}
                  >
                    View Details
                  </button>
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
