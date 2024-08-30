import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nav } from "../../data";
import Auth from "./Auth/Auth";
import { Blog } from "../../Context/Context";
import styled, { createGlobalStyle } from "styled-components";
import { FaMoon, FaSun } from "react-icons/fa";
import logo from "../../assets/icon.png";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => (props.isDarkMode ? "#121212" : "#FFFFFF")};
    color: ${(props) => (props.isDarkMode ? "#E0E0E0" : "#000000")};
    transition: background-color 0.3s, color 0.3s;
  }
 
`;

// const ThemeButton = styled.button`
//   background: none;
//   border: none;
//   cursor: pointer;
//   font-size: 24px;
//   color: ${(props) => (props.isDarkMode ? "#E0E0E0" : "#000000")};
//   transition: color 0.3s;

//   @media (max-width: 768px) {
//     top: 10px;
//     right: 10px;
//     font-size: 20px;
//   }
// `;

const DemoHeader = () => {
  const [isActive, setIsActive] = useState(false);
  const { authModel, setAuthModel } = Blog();
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark and light mode
  // const toggleTheme = () => {
  //   setIsDarkMode((prevMode) => !prevMode);
  // };

  useEffect(() => {
    const scrollMe = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", scrollMe);
    return () => window.removeEventListener("scroll", scrollMe);
  }, []);

  return (
    <>
      <GlobalStyle
      
      // isDarkMode={isDarkMode}
       />
      <header
        className={`border-b border-black sticky top-0 z-50 
          ${isActive ? "bg-white" : "bg-banner"}
          transition-all duration-500`}
      >
        <div className="size h-[70px] flex items-center justify-between">
          <Link to={"/"}>
            <img className="h-[2.5rem]" src={logo} alt="logo" />
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden text-sm sm:flex items-center gap-5">
              {nav.map((link, i) => (
                <Link key={i} to={link.path}>
                  {link.title}
                </Link>
              ))}
            </div>
            <div className="relative">
              {/* <button
                onClick={() => setAuthModel(true)}
                className="hidden text-sm sm:flex items-center gap-5"
              >
                Sign In
              </button> */}
              <Auth modal={authModel} setModal={setAuthModel} />
            </div>
            <button
              onClick={() => setAuthModel(true)}
              className={`text-white rounded-full px-3 p-2 text-sm font-medium
                ${isActive ? "bg-green-700" : "bg-black"}
              `}
            >
              Get Started
            </button>
            {/* Theme toggle button */}
            {/* <ThemeButton onClick={toggleTheme} isDarkMode={isDarkMode}>
              {isDarkMode ? <FaSun /> : <FaMoon />}
            </ThemeButton> */}
          </div>
        </div>
      </header>
    </>
  );
};

export default DemoHeader;
