import { Link } from "wouter";

const FooterSection = () => {
  return (
    <>
      <footer className="h-28 flex justify-between bg-zinc-100 items-center">
        <div className="footer-left ml-8">
          <a href="">
            <i className="mr-6">Mail</i>
          </a>
          <a href="">
            <i className="mr-6">Facebook</i>
          </a>
          <a href="">
            <i className="mr-6">Pinterest</i>
          </a>
        </div>
        <div className="footer-right">
          <ul className="flex font-bold">
            <li className="mr-2 hover:text-zinc-300">
              <Link href="/home">
                <a href="">HOME</a>
              </Link>
            </li>
            <li className="mr-2 ">|</li>
            <li className="mr-2 hover:text-zinc-300">
              <Link href="/about">
                <a href="">ABOUT</a>
              </Link>
            </li>
            <li className="mr-2">|</li>
            <li className="mr-2 hover:text-zinc-300">
              <Link href="/blog">
                <a href="">BLOG</a>
              </Link>
            </li>
            <li className="mr-2">|</li>
            <li className="mr-8 hover:text-zinc-300">
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
