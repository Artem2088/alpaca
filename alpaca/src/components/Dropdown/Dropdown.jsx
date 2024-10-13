import { useState } from "react";
import { DropDownSubMenu } from "../index";

const Dropdown = ({ items, dropdown }) => {
  const [subDropdown, setSubDropdown] = useState(false);

  const mouseInSubDrop = () => {
    setSubDropdown(true);
  };
  const mouseOverSubDrop = () => {
    setSubDropdown(false);
  };

  return (
    <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {items.map((submenu, index) => (
        <>
          {submenu.subsubmenu ? (
            <li
              key={index}
              className="dropdown__item dropdown__item_submenu"
              onMouseOut={mouseOverSubDrop}
              onMouseOver={mouseInSubDrop}
              aria-expanded={subDropdown ? "true" : "false"}
            >
              <div>
                <a href={submenu.url} className="dropdown__link-subsubmenu">
                  {submenu.title}
                  <svg
                    width="9"
                    height="6"
                    viewBox="0 0 9 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.5359 0L8.5359 6H0.535904L4.5359 0Z"
                      fill="#F2994A"
                    />
                  </svg>
                </a>
                <DropDownSubMenu
                  items={submenu.subsubmenu}
                  subDropdown={subDropdown}
                />
              </div>
            </li>
          ) : (
            <li key={index} className="dropdown__item">
              <a href={submenu.url} className="dropdown__link-wosubsubmenu">
                {submenu.title}
              </a>
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export default Dropdown;
