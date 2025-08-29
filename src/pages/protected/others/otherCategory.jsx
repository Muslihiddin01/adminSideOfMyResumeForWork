import React, { useState } from "react";
import { Link } from "react-router";
import {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
} from "../../../features/userApi";
import { RiEdit2Line } from "react-icons/ri";
import { GoTrash } from "react-icons/go";
import { Flex, Modal, Pagination, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const OtherCategory = () => {
  const { data: categories, refetch, isLoading } = useGetCategoriesQuery();

  let category = categories?.data;

  let [deleteCategory] = useDeleteCategoryMutation();

  let [addCategory] = useAddCategoryMutation();

  let [editCategory] = useEditCategoryMutation();

  async function removeCategory(id) {
    try {
      await deleteCategory(id);
      refetch();
    } catch (error) {
      console.error(error);
    }
  }

  let [isActive, setActive] = useState("category");

  let [inpSearch, setInpSearch] = useState("");

  // add
  let [categoryImage, setCategoryImage] = useState(null);
  let [categoryName, setCategoryName] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  async function addNewCategory(e) {
    e.preventDefault();
    let formData = new FormData();

    formData.append("CategoryImage", categoryImage);
    formData.append("CategoryName", categoryName);

    try {
      await addCategory(formData);
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

  let [categoryImageEdit, setCategoryImageEdit] = useState(null);
  let [categoryNameEdit, setCategoryNameEdit] = useState("");
  let [idx, setIdx] = useState(null);

  function openEditDialog(e) {
    setCategoryImageEdit(e.categoryImage);
    setCategoryNameEdit(e.categoryName);
    setIdx(e.id);
    setIsModalOpenEdit(true);
  }

  async function edit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("Id", idx);
    formData.append("CategoryImage", categoryImageEdit);
    formData.append("CategoryName", categoryNameEdit);

    try {
      await editCategory(formData);
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
      <section className="grid grid-cols-3 gap-5 md:max-w-1/2 mb-5">
        <Link to={"/otherCategory"}>
          <button
            onClick={() => setActive("category")}
            className={`py-2 bg-gray-200 rounded hover:bg-gray-400 transition-colors delay-75 cursor-pointer w-full ${
              isActive == "category" ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            Category
          </button>
        </Link>
        <Link to={"/otherBrands"}>
          <button
            onClick={() => setActive("brands")}
            className={`py-2 bg-gray-200 rounded w-full hover:bg-gray-400 transition-colors delay-75 cursor-pointer ${
              isActive == "brands" ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            Brands
          </button>
        </Link>
        <Link to={"/otherSubcategory"}>
          <button
            onClick={() => setActive("subcategory")}
            className={`py-2 bg-gray-200 rounded w-full cursor-pointer hover:bg-gray-400 transition-colors delay-75 cursor-pointe ${
              isActive == "subcategory" ? "bg-gray-400" : "bg-gray-200"
            }`}
          >
            SubCategory
          </button>
        </Link>
      </section>

      <header className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Categories</h2>
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
            Add category
          </button>
        </div>
      </header>

      <section className="mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search..."
              value={inpSearch}
              onChange={(e) => setInpSearch(e.target.value)}
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
        title="Add Category"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
      >
        <form onSubmit={addNewCategory} className="grid grid-cols-1 gap-3">
          <input
            placeholder="CategoryName"
            type="text"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            placeholder="CategoryImage"
            type="file"
            onChange={(e) => setCategoryImage(e.target.files[0])}
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
            placeholder="CategoryName"
            type="text"
            value={categoryNameEdit}
            onChange={(e) => setCategoryNameEdit(e.target.value)}
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            placeholder="CategoryImage"
            type="file"
            onChange={(e) => setCategoryImageEdit(e.target.files[0])}
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <button className="bg-blue-600 text-white hover:bg-blue-500 py-2 rounded cursor-pointer mt-3">
            Save
          </button>
        </form>
      </Modal>

      <main className="grid md:grid-cols-5 grid-cols-2 gap-5 mt-7">
        {category ? (
          category
            .filter((search) =>
              search.categoryName.toLowerCase().includes(inpSearch.toLowerCase())
            )
            .map((e) => (
              <article
                key={e.id}
                className="p-3 border-1 border-[#0000004D] rounded flex flex-col items-center gap-1 relative"
              >
                <img
                  className="w-full h-[150px]"
                  
                  src={`https://store-api.softclub.tj/images/${e.categoryImage}`}
                  alt={e.categoryName}
                />
                <h3>{e.categoryName}</h3>
                <div className="flex flex-wrap justify-between gap-3">
                  {e.subCategories.map((subCategory) => (
                    <div
                      className="p-1 bg-gray-100 rounded"
                      key={subCategory.id}
                    >
                      {subCategory.subCategoryName}
                    </div>
                  ))}
                </div>
                <div className="absolute right-3 text-[22px] flex flex-col items-center gap-3">
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

export default OtherCategory;
