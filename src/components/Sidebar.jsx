import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";

import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-center items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div
        className={
          mobileMenuOpen
            ? `absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#716c97] z-10 backdrop-blur-lg p-6 md:hidden smooth-transition ${
                mobileMenuOpen ? "left-0" : "left-full"
              }`
            : "md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#6461dd]"
        }
      >
        <img src={logo} alt="logo" className="w-full h-20 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {mobileMenuOpen ? (
          <RiCloseLine
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="w-6 h-6 text-white mr-2 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          />
        )}
      </div>
    </>
  );
};

export default Sidebar;
