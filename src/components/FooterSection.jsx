import { Link } from "wouter";

const FooterSection = () => {
  return (
    <>
      <footer className="h-28 flex justify-between bg-white items-center  bg-gray-200">
        <div className="footer-left ml-8  hover:text-zinc-400">
          <a href="mailto: ging@me.com">
            <i className="mr-6 fa-regular fa-envelope hover:text-black hover:scale-125 duration-150"></i>
          </a>
          <a href="https://www.instagram.com/theginghouse/" target="_blank">
            <i className="mr-6 fa-brands fa-instagram hover:text-black hover:scale-125 duration-150"></i>
          </a>
          <a href="https://www.facebook.com/theginghouse" target="_blank">
            <i className="mr-6 fa-brands fa-facebook-f hover:text-black hover:scale-125 duration-150"></i>
          </a>
          <a href="https://www.pinterest.com/" target="blank">
            <i className="fa-brands fa-pinterest hover:text-black hover:scale-125 duration-150"></i>
          </a>
        </div>
        <div className="footer-right">
          <ul className="flex font-bold">
            <li className="mr-2 hover:text-zinc-300 duration-200 delay-75">
              <Link href="/home">
                <a href="">HOME</a>
              </Link>
            </li>
            <li className="mr-2 ">|</li>
            <li className="mr-2 hover:text-zinc-300 duration-200 delay-75">
              <Link href="/about">
                <a href="">ABOUT</a>
              </Link>
            </li>
            <li className="mr-2">|</li>
            <li className="mr-2 hover:text-zinc-300 duration-200 delay-75">
              <Link href="/blog">
                <a href="">BLOG</a>
              </Link>
            </li>
            <li className="mr-2">|</li>
            <li className="mr-8 hover:text-zinc-300 duration-200 delay-75">
              <Link href="/contact">
                <a>CONTACT</a>
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
