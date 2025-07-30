import React, { useState } from "react";
import { Link, Outlet } from "react-router";
import { FaChevronDown, FaMagnifyingGlass, FaRegFolder } from "react-icons/fa6";
import { IoMdNotifications } from "react-icons/io";
import { BiHomeAlt } from "react-icons/bi";
import { HiLightningBolt } from "react-icons/hi";
import { HiBars3BottomLeft } from "react-icons/hi2";
import logo from "../../../shared/images/logo.png";
import { Switch } from "antd";

const Layout = () => {
  const [active, setActive] = useState("home");
  const [isAsideOpen, setIsAsideOpen] = useState(true);

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="max-w-[1300px] mx-auto p-5">
      <header>
        <nav className="bg-[#1C2536] p-3 flex items-center justify-between text-white">
          <article className="flex items-center md:gap-20">
            <img src={logo} alt="logo" />
            <div className="w-1/4 flex items-center py-2 px-3 gap-3">
              <label htmlFor="search">
                <FaMagnifyingGlass className="text-lg" />
              </label>
              <input
                id="search"
                type="text"
                placeholder="Search..."
                className="placeholder:text-inherit outline-none bg-transparent text-white"
              />
            </div>
          </article>
          <article className="flex items-center gap-7">
            <IoMdNotifications className="text-inherit text-xl" />
            <FaChevronDown />
          </article>
        </nav>
      </header>

      <main className="flex flex-col md:flex-row ">
        <aside
          className={`${
            isAsideOpen ? "md:w-[20%] w-full" : "w-[0px]"
          } bg-[#1C2536] text-white  transition-all  duration-1000 relative`}
        >
          <Switch
            className={`absolute top-1 p-1 !transition-all !duration-900  ${
              isAsideOpen ? " -right-[80%]" : "right-0"
            }`}
            onClick={() => setIsAsideOpen(!isAsideOpen)}
            defaultChecked
            onChange={onChange}
          />

          <div
            className={`p-5 space-y-4 mt-5 ${
              isAsideOpen ? "block" : " hidden"
            } `}
          >
            <Link
              to={"/"}
              onClick={() => setActive("home")}
              className={`p-3 rounded cursor-pointer flex items-center gap-3 transition-all ${
                active === "home"
                  ? "bg-white text-[#1C2536]"
                  : "text-inherit hover:bg-white/20"
              }`}
            >
              <BiHomeAlt className="text-xl" />
              {isAsideOpen && <h4>Home</h4>}
            </Link>

            <Link
              to={"/orders"}
              onClick={() => setActive("orders")}
              className={`p-3 rounded cursor-pointer flex items-center gap-3 transition-all ${
                active === "orders"
                  ? "bg-white text-[#1C2536]"
                  : "text-inherit hover:bg-white/20"
              }`}
            >
              <HiBars3BottomLeft className="text-xl" />
              {isAsideOpen && <h4>Orders</h4>}
            </Link>

            <div
              onClick={() => setActive("products")}
              className={`p-3 rounded cursor-pointer flex items-center gap-3 transition-all ${
                active === "products"
                  ? "bg-white text-[#1C2536]"
                  : "text-inherit hover:bg-white/20"
              }`}
            >
              <HiLightningBolt className="text-xl" />
              {isAsideOpen && <h4>Products</h4>}
            </div>

            <div
              onClick={() => setActive("other")}
              className={`p-3 rounded cursor-pointer flex items-center gap-3 transition-all ${
                active === "other"
                  ? "bg-white text-[#1C2536]"
                  : "text-inherit hover:bg-white/20"
              }`}
            >
              <FaRegFolder className="text-xl" />
              {isAsideOpen && <h4>Other</h4>}
            </div>
          </div>
        </aside>

        <section className="flex-1 py-5 pl-5">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Layout;
