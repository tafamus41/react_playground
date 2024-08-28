import React from "react";
import "./Header.scss";
const Header = ({ categorieS }) => {
  // const{categorieS}=props

  console.log(categorieS);

  return (
    <div className="header">
      <h1>Product List</h1>

      <div className="btnDiv">
        {categorieS.map((a, index) => (
          <button key={index}>{a}</button>
        ))}
      </div>
    </div>
  );
};

export default Header;
