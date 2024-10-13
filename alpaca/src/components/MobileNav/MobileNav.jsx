import { dataLinksMobile } from "../../utils/data";

const MobileNav = () => {

  const handleVisisble = (event) => {
    let target = event.currentTarget;
    let element = event.target;
    let lists = document.querySelectorAll('ul[data-lists]');
    Array.from(lists).map((item) => {
      if (item.dataset.lists == target.dataset.button) {
        item.classList.toggle('visible');
        element.classList.toggle('active')
      }
    })
  }

  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__lists">
        {dataLinksMobile.map((mobileMenu, index) =>
          mobileMenu.submenu ? (
            <li key={index} className="mobile-nav__item-submenu" data-button={index} onClick={handleVisisble}>
              <span className="nav-item">
                {mobileMenu.title}
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
              </span>
              <ul data-lists={index}>
                {mobileMenu.submenu.map((item, index) => (
                  <li key={index}>
                    <a href={item.url} className="nav-item">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          ) : (
            <li key={index} className="mobile-nav__item">
              <a href={mobileMenu.url}>{mobileMenu.title}</a>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default MobileNav;
