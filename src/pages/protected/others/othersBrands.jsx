import React, { useState } from "react";
import { Link } from "react-router";
import {
  useAddBrandMutation,
  useDeleteBrandMutation,
  useEditBrandMutation,
  useEditCategoryMutation,
  useGetBrandsQuery,
} from "../../../features/userApi";
import { RiEdit2Line } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { Flex, Modal, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const OtherBrands = () => {
  const { data: brands, refetch, isLoading } = useGetBrandsQuery();

  let brand = brands?.data;

  let [deleteBrand] = useDeleteBrandMutation();

  let [addBrand] = useAddBrandMutation();

  let [editBrand] = useEditBrandMutation();

  async function removeCategory(id) {
    try {
      await deleteBrand(id);
      refetch();
    } catch (error) {
      console.error(error);
    }
  }

  // add
  let [brandName, setBrandName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function addNewBrand(e) {
    e.preventDefault();

    try {
      await addBrand(brandName);
      refetch();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  // edit
  const [isModalOpenEdit, setIsModalOpenEdit] = useState(false);

  const handleCancelEdit = () => {
    setIsModalOpenEdit(false);
  };

  let [brandNameEdit, setBrandNameEdit] = useState("");
  let [idx, setIdx] = useState(null);

  function openEditDialog(e) {
    setBrandNameEdit(e.brandName);
    setIdx(e.id);
    setIsModalOpenEdit(true);
  }

  async function edit(e) {
    e.preventDefault();

    try {
      await editBrand({ Id: idx, BrandName: brandNameEdit });
      setIsModalOpenEdit(false);
      refetch();
    } catch (error) {
      console.error(error);
    }
  }

  if (isLoading)
    return (
      <Flex className="flex items-center justify-center h-[90vh]">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );
  return (
    <div className="min-h-screen">
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Brands</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 font-semibold text-white rounded-lg bg-blue-600 hover:bg-blue-700"
          >
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
            Add brand
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

      {/* // add  */}
      <Modal
        title="Add Brand"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <form onSubmit={addNewBrand} className="grid grid-cols-1 gap-3">
          <input
            placeholder="BrandName"
            type="text"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <button className="bg-blue-600 text-white hover:bg-blue-500 py-2 rounded cursor-pointer mt-3">
            Save
          </button>
        </form>
      </Modal>

      {/* // edit  */}
      <Modal
        title="Edit Modal"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpenEdit}
        footer={null}
        onCancel={handleCancelEdit}
      >
        <form onSubmit={edit} className="grid grid-cols-1 gap-3">
          <input
            placeholder="Brand"
            type="text"
            value={brandNameEdit}
            onChange={(e) => setBrandNameEdit(e.target.value)}
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <button className="bg-blue-600 text-white hover:bg-blue-500 py-2 rounded cursor-pointer mt-3">
            Save
          </button>
        </form>
      </Modal>

      <main className="grid md:grid-cols-5 grid-cols-2 gap-5 mt-7">
        {brand ? (
          brand.map((e) => (
            <article
              key={e.id}
              className="p-3 border-1 border-[#0000004D] h-20 rounded flex flex-col items-center gap-1 relative"
            >
              <h2>{e.brandName}</h2>
              <div className="absolute right-3 bottom-3 text-[22px] flex items-center gap-3">
                <RiEdit2Line
                  onClick={() => openEditDialog(e)}
                  className="text-blue-600 hover:text-blue-500 cursor-pointer"
                />
                <GoTrash
                  onClick={() => removeCategory(e.id)}
                  className="text-red-600 hover:text-red-500 cursor-pointer"
                />
              </div>
            </article>
          ))
        ) : (
          <article>
            <p className="text-red-600">Something went wrong</p>
          </article>
        )}
      </main>
    </div>
  );
};

export default OtherBrands;
