const SignUpButton = ({ onButtonClicked }) => {
  const signUpStyle =
    "inline-block text-l px-6 py-4  bg-stone-600 leading-none border border-transparent hover:border-stone-400 hover:bg-white text-white hover:text-stone-600 mt-4 sm:mt-0 duration-500 delay-100";
  return (
    <>
      <button href="#" className={signUpStyle} onClick={onButtonClicked}>
        SIGN UP
      </button>
    </>
  );
};

export default SignUpButton;
