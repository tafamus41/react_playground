// //?==================================================================
// //?                       USEEFFECT HOOK
// //?==================================================================
// //! The Effect Hook,function componentlerde yan etkiler gerçekleştirmenizi sağlar.
// //! useEffect Hook'u componentDidMount, componentDidUpdate ve componentWillUnmount olarak düşünebiliriz..setInterval, fetch axios ile veri çekme ve mesela dizi her değiştiğinde set et (yani istediğim bişeyi yap) demek için kullanılır

import { useEffect, useState } from "react";

// //! useEffect(() => {
// //*   /* ComponentDidMount code */
// //! }, []);

// //! useEffect(() => {
// //*   */ componentDidUpdate code */
// //! }, [var1, var2]);

// //! useEffect(() => {

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, []);

// //! useEffect(() => {
// //*   //* componentDidMount code + componentDidUpdate code */

// //!   return () => {
// //*     //* componentWillUnmount code */
// //!   };
// //! }, [var1, var2]);
import moment from "moment";

const Clock = () => {
  const [zaman, setZaman] = useState(moment());

  useEffect(()=>{const timE = setInterval(() => {
    // console.log("merhaba");
    setZaman(moment())
  },1000);
  return()=>{
    console.log("component öldü");
    clearInterval(timE)
  }
},[]  )

  return (
    <div>
      {zaman.format("HH:")}:{zaman.format("mm")}:{zaman.format("ss")}
      <h1 className="btn btn-primary">SAYAC:{sayac}</h1>
    </div>
  );
};

export default Clock;
