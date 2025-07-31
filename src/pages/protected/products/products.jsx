import React from "react";
import { useGetProductsQuery } from "../../../features/userApi";
import { LoadingOutlined } from "@ant-design/icons";
import { Checkbox, Flex, Spin } from "antd";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen, FaPenClip } from "react-icons/fa6";
const Products = () => {
  const { data, isLoading, isError } = useGetProductsQuery();
  const product = data?.data?.products;
  if (isLoading)
    return (
      <Flex className="flex items-center justify-center h-[90vh]">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );

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

      <table className="overflow-x-auto w-full">
        <thead className="">
          <tr className=" border-b-2 border-gray-300 ">
            <th className="font-normal text-start  gap-3 p-3 flex items-center">
              <Checkbox /> Product
            </th>
            <th className="font-normal text-start  gap-3 p-3">Inventory</th>
            <th className="font-normal text-start  gap-3 p-3">Category</th>
            <th className="font-normal text-start  gap-3 p-3">Price</th>
            <th className="font-normal text-start  gap-3 p-3">Action</th>
          </tr>
        </thead>
        <tbody className=" ">
          {product ? (
            product.map((e) => (
              <tr
                key={e.id}
                className="border-b-[1.5px] border-gray-300 w-full p-3 "
              >
                <td className="flex items-center gap-3 text-sm font-semibold p-3">
                  <Checkbox />
                  <img
                    className="w-16 h-16 rounded-2xl"
                    src={`https://store-api.softclub.tj/images/${e.image}`}
                    alt={e.productName}
                  />
                  <span>{e.productName}</span>
                </td>

                <td>
                  <span
                    className={
                      e.hasDiscount
                        ? "bg-green-500 text-white py-2 px-5 rounded-full p-3"
                        : "bg-red-500 text-white py-2 px-4 rounded-full p-3"
                    }
                  >
                    {e.hasDiscount ? "In Stock" : "Out of Stock"}
                  </span>
                </td>
                <td className="p-3 font-semibold">{e.categoryName}</td>
                <td className="p-3 font-semibold">{e.price}</td>
                <td className="flex items-center gap-3 p-3 text-lg">
                  <FaPen className="text-blue-500" />
                  <FaTrashAlt className="text-red-500" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="p-3 text-red-600">Something went wrong</td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
};

export default Products;
