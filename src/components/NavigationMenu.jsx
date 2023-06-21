import { Link } from "wouter";
import SubscribeButton from "./SubscribeButton";
import { useState, useEffect } from "react";

const NavigationMenu = () => {
  const handleBurgerClick = () => {
    if (burgerClicked) {
      setBurgerClicked(false);
    } else {
      setBurgerClicked(true);
    }
  };

  const [burgerClicked, setBurgerClicked] = useState(false);

  const openDrawerMenu = "";
  const closedDrawerMenu = "hidden sm:flex";

  const closeBurgerSign = (
    <button
      className="sm:hidden text-zinc-500 hover:text-black text-4xl font-thin hover:scale-90 duration-300"
      onClick={handleBurgerClick}
    >
      &times;
    </button>
  );

  const openBurgerSign = (
    <button
      className="sm:hidden  text-zinc-500 hover:text-black text-4xl font-thin hover:scale-90 duration-300"
      onClick={handleBurgerClick}
    >
      <i className="fa-solid fa-bars fa-xs"></i>
    </button>
  );

  return (
    <>
      <header>
        <div className="header-inner block sm:flex items-center justify-between flex-wrap bg-gray-200 p-6">
          <div className="flex justify-between items-center">
            <Link href="/home">
              <a
                href=""
                className=" font-thin text-xl tracking-wider hover:text-stone-400"
              >
                Ging House
              </a>
            </Link>

            {burgerClicked ? closeBurgerSign : openBurgerSign}

            {/* <button
              className="sm:hidden text-zinc-500 hover:text-black text-4xl font-thin hover:scale-90 duration-300"
              onClick={handleBurgerClick}
            >
              &times;
            </button> */}
          </div>
          <div className={burgerClicked ? openDrawerMenu : closedDrawerMenu}>
            <nav>
              <ul className="block mt-5 sm:mt-0 sm:flex text-stone-700 font-thin">
                <li className="hover:underline underline-offset-4 pb-3 sm:pb-0 ">
                  <Link href="/home">
                    <a
                      href=""
                      className="mr-14 hover:text-zinc-400 delay-75 duration-200"
                    >
                      home
                    </a>
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 pb-3 sm:pb-0">
                  <Link href="/about">
                    <a
                      href=""
                      className="mr-14 hover:text-zinc-400 delay-75 duration-200"
                    >
                      about
                    </a>
                  </Link>
                </li>
                <li className="hover:underline underline-offset-4 pr-8">
                  <Link href="/blog">
                    <a
                      href=""
                      className="hover:text-zinc-400 delay-75 duration-200"
                    >
                      blog
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
              <SubscribeButton
                className="pl-5 pt-20 pb-20 sm:pt-0 sm:pb-0"
                title="subscribe"
              />
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationMenu;
