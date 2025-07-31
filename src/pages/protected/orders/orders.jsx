import React from "react";

const Orders = () => {
  const orders = [
    {
      id: "12512B",
      date: "May 5, 4:20 PM",
      customer: "Tom Anderson",
      paymentStatus: "Paid",
      orderStatus: "Ready",
      total: "$49.90",
      selected: true,
    },
    {
      id: "12523C",
      date: "May 5, 4:15 PM",
      customer: "Jayden Walker",
      paymentStatus: "Paid",
      orderStatus: "Ready",
      total: "$34.36",
      selected: true,
    },
    {
      id: "51232A",
      date: "May 5, 4:15 PM",
      customer: "Inez Kim",
      paymentStatus: "Paid",
      orderStatus: "Ready",
      total: "$5.51",
      selected: true,
    },
    {
      id: "23534D",
      date: "May 5, 4:12 PM",
      customer: "Francisco Henry",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      total: "$29.74",
      selected: false,
    },
    {
      id: "51323C",
      date: "May 5, 4:12 PM",
      customer: "Violet Phillips",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      total: "$23.06",
      selected: false,
    },
    {
      id: "35622A",
      date: "May 5, 4:12 PM",
      customer: "Rosetta Becker",
      paymentStatus: "Paid",
      orderStatus: "Shipped",
      total: "$87.44",
      selected: false,
    },
    {
      id: "34232D",
      date: "May 5, 4:10 PM",
      customer: "Dean Love",
      paymentStatus: "Paid",
      orderStatus: "Ready",
      total: "$44.55",
      selected: false,
    },
    {
      id: "56212D",
      date: "May 5, 4:08 PM",
      customer: "Nettle Tyler",
      paymentStatus: "Paid",
      orderStatus: "Ready",
      total: "$36.79",
      selected: false,
    },
    {
      id: "23534D",
      date: "May 5, 4:04 PM",
      customer: "Miguel Harris",
      paymentStatus: "Pending",
      orderStatus: "Ready",
      total: "$50.54",
      selected: false,
    },
    {
      id: "12523C",
      date: "May 5, 4:04 PM",
      customer: "Angel Conner",
      paymentStatus: "Pending",
      orderStatus: "Ready",
      total: "$63.47",
      selected: false,
    },
    {
      id: "51232A",
      date: "May 5, 4:03 PM",
      customer: "Roselle Singleton",
      paymentStatus: "Pending",
      orderStatus: "Received",
      total: "$91.63",
      selected: false,
    },
  ];

  return (
    <main className="min-h-screen p-6 font-sans">
      <header className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Orders</h1>
        <div className="flex items-center space-x-4">
          <button
            aria-label="Edit"
            className="p-2 border rounded-lg hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14.25v4.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 18V7.5a2.25 2.25 0 0 1 2.25-2.25H12"
              />
            </svg>
          </button>
          <button
            aria-label="Delete"
            className="p-2 border rounded-lg hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.924a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.14-2.006-2.293a1.5 1.5 0 0 0-1.472 0l-3.356.541a1.5 1.5 0 0 0-1.472 0L6.15 3.16c-1.096.153-2.006 1.113-2.006 2.293v.916m0 0h16.5"
              />
            </svg>
          </button>
          <button className="flex items-center px-4 py-2 font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
            Add order
          </button>
        </div>
      </header>

      <section className="mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search orders"
              className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </span>
          </div>
          <div className="relative">
            <select
              aria-label="Filter by Newest"
              className="block w-full px-4 py-2 pr-8 border rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option>Newest</option>
              <option>Oldest</option>
            </select>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 text-gray-400"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[700px] border-collapse">
          <thead>
            <tr className="border-b">
              <th className="px-4 py-3 text-left">
                <input
                  type="checkbox"
                  aria-label="Select all orders"
                  className="w-5 h-5"
                />
              </th>
              <th className="px-4 py-3 text-left font-bold">Order</th>
              <th className="px-4 py-3 text-left font-bold">Date</th>
              <th className="px-4 py-3 text-left font-bold">Customer</th>
              <th className="px-4 py-3 text-left font-bold">Payment status</th>
              <th className="px-4 py-3 text-left font-bold">Order Status</th>
              <th className="px-4 py-3 text-left font-bold">Total</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b hover:opacity-90">
                <td className="px-4 py-3">
                  <input
                    type="checkbox"
                    checked={order.selected}
                    aria-label={`Select order ${order.id}`}
                    className="w-5 h-5"
                    readOnly
                  />
                </td>
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">{order.date}</td>
                <td className="px-4 py-3">{order.customer}</td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex px-3 py-1 text-center rounded-full font-medium ${
                      order.paymentStatus === "Paid"
                        ? "bg-green-200 text-green-800"
                        : "bg-yellow-200 text-yellow-800"
                    }`}
                  >
                    {order.paymentStatus}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`inline-flex px-3 py-1 text-center rounded-full font-medium ${
                      order.orderStatus === "Ready"
                        ? "bg-yellow-200 text-yellow-800"
                        : order.orderStatus === "Shipped"
                        ? "bg-blue-200 text-blue-800"
                        : "bg-purple-200 text-purple-800"
                    }`}
                  >
                    {order.orderStatus}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium">{order.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <nav className="flex items-center justify-between mt-6">
        <div className="flex items-center space-x-2">
          <button
            aria-label="Previous page"
            className="p-2 border rounded-lg hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          {[1, 2, 3, 4, 5].map((page) => (
            <button
              key={page}
              aria-label={`Go to page ${page}`}
              className={`px-4 py-2 rounded-lg font-medium ${
                page === 2
                  ? "bg-blue-600 text-white"
                  : "border hover:opacity-80"
              }`}
            >
              {page}
            </button>
          ))}
          <span className="px-2">...</span>
          <button
            aria-label="Go to page 24"
            className="px-4 py-2 border rounded-lg font-medium hover:opacity-80"
          >
            24
          </button>
          <button
            aria-label="Next page"
            className="p-2 border rounded-lg hover:opacity-80"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
        <p className="font-medium">274 Results</p>
      </nav>
    </main>
  );
};

export default Orders;
