import { Dropdown } from "../index";
import {useState} from "react";

const ItemsMenu = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  const mouseIn = () => {
    setDropdown(true)
  };
  const mouseOver = () => {
    setDropdown(false)
  }

  return (
    <li className="nav__item-li" onMouseOver={mouseIn} onMouseOut={mouseOver} aria-expanded={dropdown ? 'true' : 'false'}>
      {items.submenu ? (
        <>
          <a href={items.url} className="nav-item nav__item-submenu">
            {items.title}
            <svg
              width="9"
              height="6"
              viewBox="0 0 9 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.5359 0L8.5359 6H0.535904L4.5359 0Z" fill="#F2994A" />
            </svg>
          </a>
          <Dropdown items={items.submenu} dropdown={dropdown}/>
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default ItemsMenu;
