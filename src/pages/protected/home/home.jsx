import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Flex, Spin } from "antd";
import homeImage from "../../../shared/images/homeImage.png";
import homeImage2 from "../../../shared/images/homeImage2.png";
const Home = () => {
  return (
    <div className="space-y-6">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <article className="bg-[#FEE2E2] p-5 rounded">
          <p className="text-sm">Sales</p>
          <h2 className="text-2xl font-bold">$152k</h2>
        </article>
        <article className="bg-[#FEF3C7] p-5 rounded">
          <p className="text-sm">Cost</p>
          <h2 className="text-2xl font-bold">$99.7k</h2>
        </article>
        <article className="bg-[#DCFCE7] p-5 rounded">
          <p className="text-sm">Profit</p>
          <h2 className="text-2xl font-bold">$32.1k</h2>
        </article>
        <article className="rounded  col-span-2 ">
          <div className=" rounded flex items-center justify-center h-full">
            <img src={homeImage} className="w-full h-full" alt="homeImage" />
          </div>
        </article>

        <main className="rounded p-4 border-1 border-gray-300">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Top Selling Products</h3>
            <button className="hover:underline">See All</button>
          </div>
          <ul className="space-y-3">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <li key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={homeImage2} alt="homeImage2" />
                    <div>
                      <p className="font-medium">Healthcare Erbology</p>
                      <p className=" ">in Accessories</p>
                    </div>
                  </div>
                  <div className=" bg-white rounded" />
                  <span className="text-green-400 text-sm">13,153</span>
                </li>
              ))}
          </ul>
        </main>
      </section>

      <main className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <div className="rounded p-4 border border-gray-300">
          <h3 className="text-lg font-semibold mb-4">Recent Transactions</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-2">Name</th>
                <th className="py-2">Date</th>
                <th className="py-2">Amount</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                {
                  name: "Jagarnath S.",
                  date: "24.05.2023",
                  amount: "$124.97",
                  status: "Paid",
                },
                {
                  name: "Anand G.",
                  date: "23.05.2023",
                  amount: "$55.42",
                  status: "Pending",
                },
                {
                  name: "Kartik S.",
                  date: "23.05.2023",
                  amount: "$89.90",
                  status: "Paid",
                },
                {
                  name: "Rakesh S.",
                  date: "22.05.2023",
                  amount: "$144.94",
                  status: "Pending",
                },
                {
                  name: "Anup S.",
                  date: "22.05.2023",
                  amount: "$70.52",
                  status: "Paid",
                },
              ].map((t, i) => (
                <tr key={i} className="font-semibold">
                  <td className="py-2 px-2">{t.name}</td>
                  <td className="py-2 px-2">{t.date}</td>
                  <td className="py-2 px-2">{t.amount}</td>
                  <td className="py-2 px-2">
                    <span
                      className={`px-2 py-1 rounded text-xs font-medium ${
                        t.status === "Paid"
                          ? "bg-green-200 text-green-800"
                          : "bg-gray-300 text-gray-800"
                      }`}
                    >
                      {t.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="rounded p-4 border border-gray-300">
          <h3 className="text-lg font-semibold mb-4">
            Top Products by Units Sold
          </h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="py-2">Name</th>
                <th className="py-2">Price</th>
                <th className="py-2">Units</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { name: "Men Grey Hoodie", price: "$49.90", units: 204 },
                { name: "Women Striped T-Shirt", price: "$34.90", units: 155 },
                { name: "Women White T-Shirt", price: "$40.90", units: 120 },
                { name: "Men White T-Shirt", price: "$49.90", units: 204 },
                { name: "Women Red T-Shirt", price: "$34.90", units: 155 },
              ].map((p, i) => (
                <tr key={i} className="font-semibold">
                  <td className="py-2 px-2">{p.name}</td>
                  <td className="py-2 px-2">{p.price}</td>
                  <td className="py-2 px-2">{p.units}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Home;
