import React from "react";

const SpacingAndSizing = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl">Spacing and Sizing</h3>
        <button className="bg-blue-500 text-white p-4 m-1">TIKLA</button>
        <button className="bg-blue-500 text-white px-4 ">TIKLA</button>
        <button className="bg-blue-500 text-white ms-4 ">TIKLA</button>
        <button className="bg-blue-500 text-white ml-4 ">TIKLA</button>
        <button className="bg-blue-500 text-white px-4 py-4 ml-2 ">
          TIKLA
        </button>
      </div>
      <div>
        <button className="bg-green-500 mx-4 px-4 py-2 border-green-700 rounded-md">GÖNDER</button>
        <button className="bg-green-500 mx-4 px-4 py-2 border-[3px] rounded-[10px]">GÖNDER</button>
        <button className="bg-green-500 mx-4 px-4 py-2 border-[3px] rounded-full">GÖNDER</button>
        <button className="bg-green-500 mx-4 px-4 py-4 border-[3px] rounded-[50%]">GÖNDER</button>
      </div>
      <div className="my-2">
        <button className="bg-indigo-500 w-20 rounded-full py-2 mx-2">KAYDET</button>
        <button className="bg-indigo-500 w-1/2 rounded-full py-2 mx-2">KAYDET</button>

      </div>
    </div>
  );
};

export default SpacingAndSizing;
