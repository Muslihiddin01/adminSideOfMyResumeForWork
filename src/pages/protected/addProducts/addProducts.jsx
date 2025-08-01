import React, { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GiBowTie } from "react-icons/gi";
import { HiMiniBars3BottomLeft, HiMiniBars3BottomRight } from "react-icons/hi2";
import { TbPlaylistX } from "react-icons/tb";
import { Flex, Select, Spin, Switch } from "antd";
import { IoMdCheckmark } from "react-icons/io";
import {
  useGetBrandsQuery,
  useGetColorsQuery,
  useGetSubcategoriesQuery,
  useAddProductMutation,
  useGetProductsQuery,
} from "../../../features/userApi";
import { LoadingOutlined } from "@ant-design/icons";

const AddProducts = () => {
  const { data, refetch, isLoading } = useGetProductsQuery();

  const { data: color } = useGetColorsQuery();
  let colors = color?.data;
  const { Option } = Select;

  const { data: subcategories } = useGetSubcategoriesQuery();
  let subcategory = subcategories?.data;

  const { data: brands } = useGetBrandsQuery();
  let brand = brands?.data;

  const [addProduct] = useAddProductMutation();

  let [inpAddImage, setInpAddImage] = useState([]);
  let [inpAddBrand, setInpAddBrand] = useState(null);
  let [inpAddColor, setInpAddColor] = useState(null);
  let [inpAddProductName, setInpAddProductName] = useState("");
  let [inpAddDescription, setInpAddDescription] = useState("");
  let [inpAddQuantity, setInpAddQuantity] = useState("");
  let [inpAddSize, setInpAddSize] = useState("");
  let [inpAddWeight, setInpAddWeight] = useState("");
  let [inpAddCode, setInpAddCode] = useState("");
  let [inpAddPrice, setInpAddPrice] = useState("");
  let [inpAddHasDiscount, setInpAddHasDiscount] = useState(false);
  let [inpAddDiscountPrice, setInpAddDiscountPrice] = useState("");
  let [inpAddSubCategoryId, setInpAddSubCategoryId] = useState(null);

  async function addNewProduct() {
    let formData = new FormData();

    if (inpAddImage) {
      Array.from(inpAddImage).forEach((file) => {
        formData.append("Images", file);
      });
    }

    formData.append("BrandId", inpAddBrand);
    formData.append("ColorId", inpAddColor);
    formData.append("ProductName", inpAddProductName);
    formData.append("Description", inpAddDescription);
    formData.append("Quantity", inpAddQuantity);
    formData.append("Weight", inpAddWeight);
    formData.append("Size", inpAddSize);
    formData.append("Code", inpAddCode);
    formData.append("Price", inpAddPrice);
    formData.append("HasDiscount", inpAddHasDiscount.toString());
    formData.append("DiscountPrice", inpAddDiscountPrice);
    formData.append("SubCategoryId", inpAddSubCategoryId);

    try {
      await addProduct(formData).unwrap();
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
    <div>
      <header className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-3">
          <Link to={"/products"}>
            <FaArrowLeftLong className="text-[#7E84A3] text-[22px] hover:text-black transition-colors delay-75" />
          </Link>
          Products / Add new
        </h2>
        <div className="flex items-center space-x-4">
          <button className="flex items-center px-10 py-2 font-semibold rounded border border-[#E2E8F0] text-blue-600 transition-colors delay-75 cursor-pointer hover:border-blue-600">
            Cancel
          </button>
          <button
            onClick={addNewProduct}
            className="flex items-center px-10 py-2 font-semibold text-white rounded bg-blue-600 hover:bg-blue-700 cursor-pointer"
          >
            Save
          </button>
        </div>
      </header>

      <main className="flex justify-between gap-5 mt-10">
        <aside className="md:w-[56%] flex flex-col gap-5">
          <h3 className="font-bold text-lg">Information</h3>
          <section className="flex flex-col gap-5">
            <article>
              <div className="flex justify-between gap-5">
                <input
                  value={inpAddProductName}
                  onChange={(e) => setInpAddProductName(e.target.value)}
                  type="text"
                  placeholder="Product name"
                  className="p-3 border border-gray-300 rounded w-[68%]"
                />
                <input
                  value={inpAddCode}
                  onChange={(e) => setInpAddCode(e.target.value)}
                  type="text"
                  placeholder="Code"
                  className="p-3 border border-gray-300 rounded w-[31%]"
                />
              </div>
            </article>

            <article className="flex flex-col">
              <div className="flex items-center gap-20 p-3 border border-gray-300 rounded-t">
                <p>Normal</p>
                <div className="flex items-center text-xl gap-4 font-bold font-mono">
                  <p>B</p> <p>I</p> <p className="underline">U</p>{" "}
                  <GiBowTie className="transform rotate-45" />
                  <HiMiniBars3BottomLeft />
                  <HiMiniBars3BottomRight />
                  <TbPlaylistX className="text-2xl" />
                </div>
              </div>
              <textarea
                placeholder="Description"
                value={inpAddDescription}
                onChange={(e) => setInpAddDescription(e.target.value)}
                className="border border-gray-300 p-3 min-h-[100px] max-h-[200px] rounded-b"
              ></textarea>
            </article>
          </section>

          <article className="grid grid-cols-2 justify-between gap-5 mt-4">
            <Select
              placeholder="Subcategories"
              allowClear
              value={inpAddSubCategoryId}
              onChange={(value) => setInpAddSubCategoryId(value)}
            >
              {subcategory
                ? subcategory.map((e) => (
                    <Option key={e.id} value={e.id}>
                      {e.subCategoryName}
                    </Option>
                  ))
                : null}
            </Select>

            <Select
              placeholder="Brands"
              allowClear
              value={inpAddBrand}
              onChange={(value) => setInpAddBrand(value)}
            >
              {brand
                ? brand.map((e) => (
                    <Option key={e.id} value={e.id}>
                      {e.brandName}
                    </Option>
                  ))
                : null}
            </Select>
          </article>

          <h3 className="font-bold text-lg mt-5">Price</h3>
          <section className="grid grid-cols-3 gap-5">
            <input
              value={inpAddPrice}
              onChange={(e) => setInpAddPrice(e.target.value)}
              type="number"
              placeholder="Product price"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              value={inpAddDiscountPrice}
              onChange={(e) => setInpAddDiscountPrice(e.target.value)}
              type="number"
              placeholder="Discount"
              className="p-3 border border-gray-300 rounded"
            />
            <input
              value={inpAddQuantity}
              onChange={(e) => setInpAddQuantity(e.target.value)}
              type="number"
              placeholder="Count"
              className="p-3 border border-gray-300 rounded"
            />
          </section>

          <div className="flex items-center gap-3 mt-2">
            <Switch
              value={inpAddHasDiscount}
              onChange={() => setInpAddHasDiscount(!inpAddHasDiscount)}
            ></Switch>

            <p>Add tax for this product</p>
          </div>

          <article className="flex items-center justify-between mt-3 p-3 rounded border border-gray-300">
            <aside>
              <p className="font-semibold">Different Options</p>
              <p className="text-gray-600">This product has multiple options</p>
            </aside>
            <Switch defaultChecked />
          </article>

          <h3 className="font-bold text-lg mt-5">Options</h3>
          <section className="grid grid-cols-2 gap-5">
            <fieldset className="border border-gray-300 py-3 px-4 rounded">
              <legend className="text-gray-600">Option 1</legend>
              <h4 className="text-lg font-semibold">Size</h4>
            </fieldset>
            <fieldset className="border border-gray-300 py-3 px-4 rounded">
              <legend className="text-gray-600">Value</legend>
            </fieldset>
            <fieldset className="border border-gray-300 py-3 px-4 rounded">
              <legend className="text-gray-600">Option 2</legend>
              <h4 className="text-lg font-semibold">Weight</h4>
            </fieldset>
            <fieldset className="border border-gray-300 py-3 px-4 rounded">
              <legend className="text-gray-600">Value</legend>
            </fieldset>
          </section>
        </aside>

        <aside className="md:w-[40%] flex flex-col">
          <section className="p-3 rounded border border-gray-300 flex flex-col">
            <article className="flex gap-5 justify-between">
              <h3 className="font-bold text-lg">Colour:</h3>
              <div className="flex items-center gap-1 font-semibold text-blue-600">
                <IoMdCheckmark className="text-xl" />
                <p className="text-lg">Create new</p>
              </div>
            </article>

            <Select
              placeholder="Select Color"
              allowClear
              className="!mt-5 "
              value={inpAddColor}
              onChange={(value) => setInpAddColor(value)}
            >
              {colors
                ? colors.map((color) => (
                    <Option key={color.id} value={color.id}>
                      {color.colorName}
                    </Option>
                  ))
                : null}
            </Select>
          </section>

          <section>
            <h3 className="font-bold text-lg mt-5">Images</h3>
            <article className="p-10 border-dashed border border-gray-300 flex items-center justify-center mt-3">
              <input
                type="file"
                className="underline"
                multiple
                onChange={(e) => setInpAddImage(e.target.files)}
              />
            </article>
          </section>
        </aside>
      </main>
    </div>
  );
};

export default React.memo(AddProducts);
