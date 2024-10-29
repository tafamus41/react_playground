import React from "react";

const Login = () => {
  return (
    <div className="loginDiv">
      <div className="h-[500px] w-11/12 sm:w-[475px] bg-white rounded-[20px] p-5 flex flex-col justify-center text-center">
        <div className="flex justify-center items-center mt-2 gap-2">
          <span className="w-[6px] h-[39px] bg-yellow-500"></span>
          <h1 className="text-[22px] sm:text-[32px] font-montserrat font-[700] uppercase">Clarus Store</h1>
        </div>
        <div>
          <h3>SIGN IN</h3>
          <p>Enter your credetentials to access your account</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
