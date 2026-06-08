import { Card } from "antd";
import { BsBox } from "react-icons/bs";

const stats = [
  { count: 1320, label: "Total Admins" },
  { count: 8, label: "Total All users" },
  { count: 41, label: "Total User candidates" },
  { count: 41, label: "Total User companies" },
  { count: 566, label: "Total Jobs" },
  { count: 33, label: "Users last 7 days" },
];

const activities = [
  {
    title: "User Added",
    desc: "Ovie Rahaman is added to our portal.",
    time: "5/6/2024, 10:30:00 AM",
  },
  {
    title: "User Removed",
    desc: "Commi Lucas is removed.",
    time: "5/6/2024, 9:15:00 AM",
  },
  {
    title: "New User Joined",
    desc: "Rupom Paul Join in our Portal.",
    time: "5/6/2024, 8:00:00 AM",
  },
];

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Greeting Card */}
      <Card
        className="mb-4 rounded-2xl shadow-sm border-0"
        style={{ backgroundColor: "#fff" }}
      >
        <p className="text-sm text-gray-500 mb-1">Hi, 😊 Good Morning</p>
        <h2 className="text-xl font-bold text-gray-800 m-0">Lucas</h2>
      </Card>

      {/* User's Overview */}
      <Card
        className="mb-4 rounded-2xl shadow-sm border-0"
        style={{ backgroundColor: "#fff" }}
      >
        <h3 className="text-base font-semibold text-gray-800 mb-4">
          User's Overview
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {stats.map((s, i) => (
            <div
              key={i}
              className="rounded-2xl p-4 flex flex-col gap-3"
              style={{ backgroundColor: "#f3f4f6" }}
            >
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#f5c99e" }}
              >
                <BsBox className="text-orange-500 text-base" />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-800 m-0 leading-tight">
                  {s.count}
                </p>
                <p className="text-xs text-gray-500 m-0 mt-0.5">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
