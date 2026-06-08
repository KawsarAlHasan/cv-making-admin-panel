import React, { useState } from "react";
import { Table, Checkbox } from "antd";
import { MdOutlineDownload } from "react-icons/md";
import { LuSendHorizontal } from "react-icons/lu";

const userData = [
  {
    key: 1,
    name: "Kathryn Murp",
    email: "bockely@att.com",
    position: "Chef",
    plan: "Monthly",
  },
  {
    key: 2,
    name: "Devon Lane",
    email: "csilvers@rizon.com",
    position: "Chef",
    plan: "Free",
  },
  {
    key: 3,
    name: "Foysal Rahman",
    email: "qamaho@mail.com",
    position: "Head Chef",
    plan: "Monthly",
  },
  {
    key: 4,
    name: "Hari Danang",
    email: "xterris@gmail.com",
    position: "Head Chef",
    plan: "Yearly",
  },
  {
    key: 5,
    name: "Floyd Miles",
    email: "xterris@gmail.com",
    position: "Head Chef",
    plan: "Yearly",
  },
  {
    key: 6,
    name: "Eleanor Pena",
    email: "xterris@gmail.com",
    position: "Head Chef",
    plan: "Free",
  },
  {
    key: 7,
    name: "Devon Lane",
    email: "xterris@gmail.com",
    position: "Chef",
    plan: "Free",
  },
  {
    key: 8,
    name: "Hari Danang",
    email: "xterris@gmail.com",
    position: "Chef",
    plan: "Free",
  },
  {
    key: 9,
    name: "Devon Lane",
    email: "xterris@gmail.com",
    position: "Chef",
    plan: "Monthly",
  },
  {
    key: 10,
    name: "Hari Danang",
    email: "xterris@gmail.com",
    position: "Chef",
    plan: "Yearly",
  },
];

const companyData = [
  { key: 1, name: "Kathryn Murp", email: "bockely@att.com", plan: "Monthly" },
  { key: 2, name: "Devon Lane", email: "csilvers@rizon.com", plan: "Free" },
  { key: 3, name: "Foysal Rahman", email: "qamaho@mail.com", plan: "Monthly" },
  { key: 4, name: "Hari Danang", email: "xterris@gmail.com", plan: "Yearly" },
  { key: 5, name: "Floyd Miles", email: "xterris@gmail.com", plan: "Yearly" },
  { key: 6, name: "Eleanor Pena", email: "xterris@gmail.com", plan: "Free" },
  { key: 7, name: "Devon Lane", email: "xterris@gmail.com", plan: "Free" },
  { key: 8, name: "Hari Danang", email: "xterris@gmail.com", plan: "Free" },
  { key: 9, name: "Devon Lane", email: "xterris@gmail.com", plan: "Monthly" },
  { key: 10, name: "Hari Danang", email: "xterris@gmail.com", plan: "Yearly" },
];

const ACCENT = "#f26b4e";

function Campaign() {
  const [activeTab, setActiveTab] = useState("users"); // 'users' | 'company'
  const [selectedKeys, setSelectedKeys] = useState(
    userData.slice(0, 9).map((u) => u.key),
  );

  const allSelected = selectedKeys.length === userData.length;
  const toggleAll = () =>
    setSelectedKeys(allSelected ? [] : userData.map((u) => u.key));
  const toggleOne = (key) =>
    setSelectedKeys((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );

  /* ── Users columns ── */
  const usersColumns = [
    {
      title: (
        <div className="flex items-center gap-2">
          <Checkbox
            checked={allSelected}
            indeterminate={selectedKeys.length > 0 && !allSelected}
            onChange={toggleAll}
          />
          <span className="font-semibold text-gray-800">Select All</span>
        </div>
      ),
      key: "checkbox",
      width: 170,
      render: (_, record) => (
        <Checkbox
          checked={selectedKeys.includes(record.key)}
          onChange={() => toggleOne(record.key)}
        />
      ),
    },
    {
      title: <span className="font-semibold text-gray-800">Full Name</span>,
      dataIndex: "name",
      key: "name",
      render: (v) => <span className="text-gray-700">{v}</span>,
    },
    {
      title: <span className="font-semibold text-gray-800">Email</span>,
      dataIndex: "email",
      key: "email",
      render: (v) => <span className="text-gray-500">{v}</span>,
    },
    {
      title: <span className="font-semibold text-gray-800">Position</span>,
      dataIndex: "position",
      key: "position",
      render: (v) => <span className="text-gray-500">{v}</span>,
    },
    {
      title: <span className="font-semibold text-gray-800">CV</span>,
      key: "cv",
      render: () => (
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-green-600 border border-green-200 bg-green-50 hover:bg-green-100 transition-colors">
          <MdOutlineDownload className="text-base" />
          Download
        </button>
      ),
    },
  ];

  /* ── Company columns ── */
  const companyColumns = [
    {
      title: <span className="font-semibold text-gray-800">Company Name</span>,
      dataIndex: "name",
      key: "name",
      render: (v) => <span className="text-gray-700">{v}</span>,
    },
    {
      title: <span className="font-semibold text-gray-800">Email</span>,
      dataIndex: "email",
      key: "email",
      render: (v) => <span className="text-gray-500">{v}</span>,
    },
    {
      title: <span className="font-semibold text-gray-800">Plan</span>,
      dataIndex: "plan",
      key: "plan",
      render: (v) => <span className="text-gray-500">{v}</span>,
    },
    {
      title: (
        <span className="font-semibold text-gray-800 float-right">
          Sent All 378 CV To
        </span>
      ),
      key: "send",
      align: "right",
      render: () => (
        <div className="flex justify-end pr-2">
          <LuSendHorizontal className="text-xl text-gray-800 cursor-pointer hover:text-orange-500 transition-colors" />
        </div>
      ),
    },
  ];

  return (
    <div
      className="flex items-center justify-center"
      style={{ backgroundColor: "#fdf0eb" }}
    >
      <div
        className="w-full rounded-2xl p-6"
        style={{ backgroundColor: "#fff", border: "1px solid #fde8e0" }}
      >
        {/* ── Tabs ── */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab("users")}
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: activeTab === "users" ? ACCENT : "#f3f4f6",
              color: activeTab === "users" ? "#fff" : "#6b7280",
            }}
          >
            Users
          </button>
          <button
            onClick={() => setActiveTab("company")}
            className="px-5 py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              backgroundColor: activeTab === "company" ? ACCENT : "#f3f4f6",
              color: activeTab === "company" ? "#fff" : "#6b7280",
            }}
          >
            Company
          </button>
        </div>

        {/* ── Table ── */}
        {activeTab === "users" ? (
          <Table
            columns={usersColumns}
            dataSource={userData}
            pagination={false}
            rowKey="key"
            className="bulk-table"
            size="middle"
          />
        ) : (
          <Table
            columns={companyColumns}
            dataSource={companyData}
            pagination={false}
            rowKey="key"
            className="bulk-table"
            size="middle"
          />
        )}

        {/* ── Next Button ── */}
        <div className="flex justify-end mt-6">
          <button
            className="px-12 py-3 rounded-xl text-white text-sm font-medium hover:opacity-90 transition-opacity"
            style={{ backgroundColor: ACCENT, minWidth: 160 }}
          >
            Next &gt;
          </button>
        </div>
      </div>

      <style>{`
        .bulk-table .ant-table { background: transparent !important; }
        .bulk-table .ant-table-thead > tr > th {
          background: transparent !important;
          border-bottom: 1px solid #e5e7eb !important;
          padding: 10px 16px !important;
          font-size: 14px;
        }
        .bulk-table .ant-table-tbody > tr > td {
          border-bottom: 1px solid #f3f4f6 !important;
          padding: 14px 16px !important;
        }
        .bulk-table .ant-table-tbody > tr:last-child > td { border-bottom: none !important; }
        .bulk-table .ant-table-tbody > tr:hover > td { background: #fff8f6 !important; }
        .bulk-table .ant-checkbox-checked .ant-checkbox-inner { background-color: #f26b4e !important; border-color: #f26b4e !important; }
        .bulk-table .ant-checkbox-indeterminate .ant-checkbox-inner::after { background-color: #f26b4e !important; }
        .bulk-table .ant-checkbox:hover .ant-checkbox-inner { border-color: #f26b4e !important; }
      `}</style>
    </div>
  );
}

export default Campaign;
