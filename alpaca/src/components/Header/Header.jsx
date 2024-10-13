import { Navbar } from "../index.js";

const Header = ({ modalOpen }) => {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">
          <svg
            width="46"
            height="46"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_1_4)">
              <path
                d="M48 23C48 34.598 38.598 44 27 44C15.402 44 6 34.598 6 23C6 11.402 15.402 2 27 2C38.598 2 48 11.402 48 23Z"
                stroke="#2D9CDB"
                strokeWidth="4"
              />
              <path
                d="M17.462 19.64C18.518 19.64 19.34 19.904 19.928 20.432C20.516 20.96 20.81 21.824 20.81 23.024V29H18.128V23.582C18.128 22.43 17.552 21.854 16.4 21.854C16.124 21.854 15.842 21.896 15.554 21.98C15.266 22.064 15.044 22.166 14.888 22.286L14.852 29H12.188V16.292H14.888V20.306C15.716 19.862 16.574 19.64 17.462 19.64Z"
                fill="white"
              />
              <path
                d="M23.0659 26.462H25.6759V29H23.0659V26.462Z"
                fill="white"
              />
              <path
                d="M28.4111 29V15.9922H30.9687L34.5723 26.0557L38.2812 15.9922H40.5664V29H38.8437V18.418L35.2578 28.1299H33.4736L29.9932 18.3916V29H28.4111Z"
                fill="white"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_1_4"
                x="0"
                y="0"
                width="54"
                height="54"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1_4"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1_4"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </a>
        <Navbar />
        <div className="contacts">
          <div className="contacts__wrapper">
            <a href="tel:+1(321)222-33-33">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.821 16.43 14.94C17.55 15.311 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.391 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                  fill="#5BC12C"
                />
              </svg>
              +1 (321) 222 - 33 -33
            </a>
          </div>
        </div>
        <div className="header__burger-container">
          <a className="phone-mobile-icons" href="tel:+1(321)222-33-33">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.62 10.79C8.06 13.62 10.38 15.93 13.21 17.38L15.41 15.18C15.68 14.91 16.08 14.821 16.43 14.94C17.55 15.311 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.391 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z"
                fill="#5BC12C"
              />
            </svg>
          </a>
          <button className="burger" onClick={modalOpen}>
            <svg
              width="22"
              height="14"
              viewBox="0 0 22 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 1H22M0 7H22M0 13H22"
                stroke="#F2994A"
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
