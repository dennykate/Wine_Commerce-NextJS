import React from "react";

const FooterSearch = () => {
  return (
    <div className="search w-full h-[50px] flex items-center border rounded-full overflow-hidden">
      <input
        id="subscribe"
        name="subscribe"
        type="text"
        className="w-[75%] h-full p-5 text-sm"
        placeholder="Your email address"
      />
      <button name="subscribe-button" className="w-[25%] flex justify-center items-center text-sm text-white bg-gray-900 p-5">
        Subscribe
      </button>
    </div>
  );
};

export default FooterSearch;
