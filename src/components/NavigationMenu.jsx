import { Link } from "wouter";
import SubscribeButton from "./SubscribeButton";

const NavigationMenu = () => {
  return (
    <>
      <header>
        <div className="header-inner block sm:flex items-center justify-between flex-wrap bg-gray-200 p-6">
          {/* Logo */}
          <Link href="/home">
            <a
              href=""
              className=" font-thin text-xl tracking-wider hover:text-stone-400"
            >
              Ging House
            </a>
          </Link>

          <nav className={""}>
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
              <li className="hover:underline underline-offset-4">
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
          {/* Navbar right */}
          <SubscribeButton title="subscribe" />
        </div>
      </header>
    </>
  );
};

export default NavigationMenu;
