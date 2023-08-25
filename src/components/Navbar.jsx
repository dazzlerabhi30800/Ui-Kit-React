import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import LinkData from "./LinkData";

export default function Navbar() {
  const [showIcon, setShowIcon] = useState(true);
  const [links, setLinks] = useState(LinkData);

  const handleLink = (item) => {
    setLinks(
      links.map((link) => {
        if (link.link === item.link) {
          return { ...link, selected: !link.selected };
        }
        return { ...link, selected: false };
      })
    );
  };

  return (
    <nav className="flex items-center justify-between bg-white rounded-md text-black col-span-3">
      <ul className="flex items-center gap-10 uppercase text-gray-500 font-semibold px-3 text-[14px]">
        {links.map((item) => (
          <li
            onClick={() => handleLink(item)}
            key={item.link}
            className={`p-3 relative cursor-pointer after:absolute after:content-[''] after:-bottom-[11px] after:left-0 after:h-[5px] after:hover:transition-all after:linear after:duration-400 ${
              item.selected ? "after:w-full" : "after:w-0"
            } after:bg-teal-500 `}
          >
            {item.link}
          </li>
        ))}
      </ul>
      <div className="input--container flex items-center gap-5 p-3">
        {showIcon && (
          <label className="text-xl" htmlFor="search">
            <BsSearch />
          </label>
        )}
        <input
          className="text-gray-700 border border-transparent p-2 flex-1 focus:border-gray-900 focus:outline-none"
          type="text"
          onFocus={() => setShowIcon(false)}
          onBlur={() => setShowIcon(true)}
          id="search"
          placeholder="Search"
        />
      </div>
    </nav>
  );
}
