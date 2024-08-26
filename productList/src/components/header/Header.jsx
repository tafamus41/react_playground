import React from "react";
import "./Header.scss"
const Header = ({ categorieS }) => {
  // console.log(categorieS);
  return (
    <div className="header">
      <h1>Product List</h1>
      <div className="btnDiv">
        {
          categorieS.map((item,index)=>(
<button key={index}> {item}</button>
          ))
        }
      </div>
    </div>
  );
};

export default Header;
