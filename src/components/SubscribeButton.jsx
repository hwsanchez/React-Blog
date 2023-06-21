import { Link } from 'wouter';


const SubscribeButton = ({ title }) => {
  const subscribeStyle =
    "inline-block text-sm px-4 py-2 leading-none border rounded text-stone-600 border-stone-400 hover:border-transparent hover:bg-stone-600 hover:text-white mt-4 sm:mt-0 duration-500 delay-100";
  const signUpStyle =
    "inline-block text-l px-6 py-4  bg-stone-600 leading-none border border-transparent hover:border-stone-400 hover:bg-white text-white hover:text-stone-600 mt-4 sm:mt-0 duration-500 delay-100";
  return (
    <>
      <Link href="/subscribe">
        <button
          href="#"
          className={title == "subscribe" ? subscribeStyle : signUpStyle}
        >
          {title}
        </button>
      </Link>
    </>
  );
};

export default SubscribeButton;
