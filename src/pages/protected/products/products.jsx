import React, { useState } from "react";
import {
  useDeleteProductMutation,
  useEditProductMutation,
  useGetBrandsQuery,
  useGetColorsQuery,
  useGetProductsQuery,
  useGetSubcategoriesQuery,
} from "../../../features/userApi";
import { LoadingOutlined } from "@ant-design/icons";
import { Checkbox, Flex, Spin, Modal, Select } from "antd";
import { FaTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { Link } from "react-router";
const Products = () => {
  const { data, isLoading, isError, refetch } = useGetProductsQuery();
  const product = data?.data?.products;
  const { Option } = Select;

  const { data: brands } = useGetBrandsQuery();
  let brand = brands?.data;

  const { data: color } = useGetColorsQuery();
  let colors = color?.data;

  const [deleteProduct] = useDeleteProductMutation();

  async function removeProduct(id) {
    try {
      await deleteProduct(id);
      refetch();
    } catch (error) {
      console.error(error);
    }
  }

  let [inpSearch, setInpSearch] = useState("");

  let [inpEditBrand, setInpEditBrand] = useState(null);
  let [inpEditColor, setInpEditColor] = useState(null);
  let [inpEditProductName, setInpEditProductName] = useState("");
  let [inpEditDescription, setInpEditDescription] = useState("");
  let [inpEditQuantity, setInpEditQuantity] = useState("");
  let [inpEditSize, setInpEditSize] = useState("");
  let [inpEditWeight, setInpEditWeight] = useState("");
  let [inpEditCode, setInpEditCode] = useState("");
  let [inpEditPrice, setInpEditPrice] = useState("");
  let [inpEditHasDiscount, setInpEditHasDiscount] = useState(false);
  let [inpEditDiscountPrice, setInpEditDiscountPrice] = useState("");
  let [inpEditSubCategoryId, setInpEditSubCategoryId] = useState(null);
  let [idx, setIdx] = useState(null);

  // edit
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const { data: subcategories } = useGetSubcategoriesQuery();
  let subcategory = subcategories?.data;

  const [edit] = useEditProductMutation();

  function openEditDialog(e) {
    setInpEditBrand(e.brandId);
    setInpEditColor(e.colorId);
    setInpEditProductName(e.productName);
    setInpEditDescription(e.description);
    setInpEditQuantity(e.quantity);
    setInpEditSize(e.size);
    setInpEditWeight(e.weight);
    setInpEditCode(e.code);
    setInpEditPrice(e.price);
    setInpEditHasDiscount(e.hasDiscount);
    setInpEditDiscountPrice(e.discountPrice);
    setInpEditSubCategoryId(e.subCategoryId);
    setIdx(e.id);
    setIsModalOpen(true);
  }

  async function editProduct(e) {
    e.preventDefault();
    try {
      await edit({
        Id: idx,
        BrandId: inpEditBrand,
        ColorId: inpEditColor,
        ProductName: inpEditProductName,
        Description: inpEditDescription,
        Quantity: inpEditQuantity,
        Weight: inpEditWeight,
        Size: inpEditSize,
        Code: inpEditCode,
        Price: inpEditPrice,
        HasDiscount: inpEditHasDiscount,
        DiscountPrice: inpEditDiscountPrice,
        SubCategoryId: inpEditSubCategoryId,
      });
      refetch();
      setIsModalOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(inpEditSubCategoryId);

  if (isLoading)
    return (
      <Flex className="flex items-center justify-center h-[90vh]">
        <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
      </Flex>
    );

  return (
    <div className="min-h-screen p-6 font-sans overflow-hidden">
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Products</h2>
        <div className="flex items-center space-x-4">
          <Link to={"/addProducts"}>
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
          </Link>
        </div>
      </header>

      <section className="mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative flex-grow">
            <input
              value={inpSearch}
              onChange={(e) => setInpSearch(e.target.value)}
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

      <Modal
        title="Edit Product"
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        onOk={handleCancel}
        onCancel={handleCancel}
      >
        <form className="grid grid-cols-2 gap-5" onSubmit={editProduct}>
          <Select
            placeholder="Brands"
            allowClear
            value={inpEditBrand}
            onChange={(value) => setInpEditBrand(value)}
          >
            {brand
              ? brand.map((e) => (
                  <Option key={e.id} value={e.id}>
                    {e.brandName}
                  </Option>
                ))
              : null}
          </Select>
          <Select
            placeholder="Select Color"
            allowClear
            value={inpEditColor}
            onChange={(value) => setInpEditColor(value)}
          >
            {colors
              ? colors.map((color) => (
                  <Option key={color.id} value={color.id}>
                    {color.colorName}
                  </Option>
                ))
              : null}
          </Select>
          <input
            value={inpEditProductName}
            onChange={(e) => setInpEditProductName(e.target.value)}
            type="text"
            placeholder="Product Name"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            value={inpEditDescription}
            onChange={(e) => setInpEditDescription(e.target.value)}
            type="text"
            placeholder="Description"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            value={inpEditQuantity}
            onChange={(e) => setInpEditQuantity(e.target.value)}
            type="number"
            placeholder="Quantity"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            value={inpEditSize}
            onChange={(e) => setInpEditSize(e.target.value)}
            type="text"
            placeholder="Size"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            value={inpEditWeight}
            onChange={(e) => setInpEditWeight(e.target.value)}
            type="text"
            placeholder="Weight"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            value={inpEditCode}
            onChange={(e) => setInpEditCode(e.target.value)}
            type="text"
            placeholder="Product Code"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <input
            value={inpEditPrice}
            onChange={(e) => setInpEditPrice(e.target.value)}
            type="number"
            placeholder="Price"
            className="p-2 border border-gray-300 rounded outline-none"
          />
          <label className="flex items-center gap-2 col-span-2">
            <Checkbox
              checked={inpEditHasDiscount}
              onChange={(e) => setInpEditHasDiscount(e.target.checked)}
            />
            Has Discount
          </label>
          {inpEditHasDiscount && (
            <input
              value={inpEditDiscountPrice}
              onChange={(e) => setInpEditDiscountPrice(e.target.value)}
              type="number"
              placeholder="Discount Price"
              className="p-2 border border-gray-300 rounded outline-none"
            />
          )}
          <Select
            placeholder="Subcategories"
            allowClear
            value={inpEditSubCategoryId}
            onChange={(value) => setInpEditSubCategoryId(value)}
          >
            {subcategory
              ? subcategory.map((e) => (
                  <Option key={e.id} value={e.id}>
                    {e.subCategoryName}
                  </Option>
                ))
              : null}
          </Select>
          <button type="submit">Save</button>
        </form>
      </Modal>

      <div className="overflow-auto">
        <table className="w-full min-w-xl">
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
              product
                .filter((search) =>
                  search.productName
                    .toLowerCase()
                    .includes(inpSearch.toLowerCase())
                )
                .map((e) => (
                  <tr
                    key={e.id}
                    className="border-b-[1.5px] border-gray-300 w-full p-3 "
                  >
                    <td className="flex items-center gap-3 text-sm font-semibold p-3">
                      <Checkbox />
                      <img
                        className="w-14 h-14 rounded-full"
                        src={`https://store-api.softclub.tj/images/${e.image}`}
                        alt={e.productName}
                      />
                      <span>{e.productName}</span>
                    </td>

                    <td>
                      <span
                        className={
                          e.quantity > 0
                            ? "md:bg-green-500 md:text-white py-2 px-5 rounded-full p-3"
                            : "md:bg-red-500 md:text-white py-2 px-4 rounded-full p-3"
                        }
                      >
                        {e.quantity > 0 ? "In Stock" : "Out of Stock"}
                      </span>
                    </td>
                    <td className="p-3 font-semibold">{e.categoryName}</td>
                    <td className="p-3 font-semibold">{e.price}</td>
                    <td className="flex items-center gap-5 p-3 text-lg">
                      <FaPen
                        onClick={() => openEditDialog(e)}
                        className="text-blue-600 hover:text-blue-500 cursor-pointer"
                      />
                      <FaTrashAlt
                        className="text-red-600 hover:text-red-500 cursor-pointer"
                        onClick={() => removeProduct(e.id)}
                      />
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
      </div>
    </div>
  );
};

export default Products;
