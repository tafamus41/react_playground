import React from "react";

const FlexAndResponsive = () => {
  
  return (
    <div>
      <div className="flex flex-row flex-wrap">
        <div className=" basis-1/4 bg-fuchsia-200">01</div>
        <div className="basis-1/4 bg-fuchsia-300">02</div>
        <div className="basis-1/4 bg-fuchsia-400">03</div>
        <div className="basis-1/4 bg-fuchsia-500">04</div>
        <div className="basis-2/4 bg-fuchsia-600">03</div>
        <div className="basis-2/4 bg-fuchsia-700">04</div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
{Array.from({length:8},(_,item)=>(
  <div className="bg-teal-500">{item}</div>
))}
      </div>
    </div>
  );
};

export default FlexAndResponsive;
