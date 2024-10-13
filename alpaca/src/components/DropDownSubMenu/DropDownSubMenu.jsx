
const DropDownSubMenu = ({items, subDropdown}) => {

  return (
    <ul className={`dropdown subDropdown ${subDropdown ? "show" : ""}`}>{
      items.map((subsubmenu, index) => (
        <li key={index} className="dropdown__item dropdown__item-submenu">
          <a href={subsubmenu.url}>{subsubmenu.title}</a>
        </li>
      ))
    }</ul>
  )
}

export default DropDownSubMenu
