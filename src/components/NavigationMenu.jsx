import { Link } from "wouter";

const NavigationMenu = () => {
  return (
    <>
      <header>
        <div className="header-inner flex items-center justify-between flex-wrap bg-zinc-100 p-6">
          {/* Logo */}
          <Link href="/home">
            <a
              href=""
              className="font-thin text-xl tracking-wider hover:text-white"
            >
              Gift'n Giving
            </a>
          </Link>

          <nav className={""}>
            <ul className="flex text-stone-700 font-thin">
              <li className="">
                <Link href="/home">
                  <a href="" className="mr-14 hover:text-zinc-400">
                    home
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/about">
                  <a href="" className="mr-14 hover:text-zinc-400">
                    about
                  </a>
                </Link>
              </li>
              <li className="">
                <Link href="/blog">
                  <a href="" className="hover:text-zinc-400">
                    blog
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
          {/* Navbar right */}
          <div>
            <Link href="/contact">
              <a
                href="#"
                className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:bg-stone-600 mt-4 lg:mt-0"
              >
                Contact
              </a>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavigationMenu;
