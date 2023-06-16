import SubscribeButton from "./SubscribeButton";

const SubscribeForm = () => {
  return (
    <>
      <div className=" mx-20 mb-10  drop-shadow-lg bg-zinc-400 pt-6 pb-8">
        <h2 className="tracking-wider text-center font-serif text-4xl font-thin text-white pb-3">
          Subscribe
        </h2>
        <p className="text-center tracking-wider mb-10 text-zinc-400">
          Sign up to receive news and updates.{" "}
        </p>
        <form className="text-center md:flex md:justify-center mx-5">
          <div className="sm:flex gap-5 md:px-5">
            <input
              className="md:w-auto w-72 mb-4 shadow appearance-none border w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="First Name"
            />
            <input
              className="md:w-auto w-72 mb-4 shadow appearance-none border w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="sm:flex justify-center">
            <input
              className="md:w-auto w-72 mb-4 shadow appearance-none border w-full py-5 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Email Address"
            />
          </div>

        </form>
          <div className="text-center">
            <SubscribeButton title="SIGN UP" />
        </div>
        <p className="font-thin text-center text-sm text-white mt-5">We respect your privacy.</p>
      </div>
    </>
  );
};

export default SubscribeForm;
