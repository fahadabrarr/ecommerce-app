import React from "react";

const NewsLetter = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className=" flex flex-col mx-auto px-5 max-w-screen-2xl py-10 gap-5 items-center justify-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-400 mt-3 text-center">
        {" "}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam
        dolorum iure alias architecto quam repudiandae.
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row items-center justify-center gap-3 mx-auto my-6 px-5"
      >
        <input
          type="email"
          placeholder="Enter your email"
          required
          className="w-full sm:flex-1 outline-none px-5 py-2 border"
        />
        <button type="submit" className="bg-black text-white px-5 py-2 ">
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetter;
