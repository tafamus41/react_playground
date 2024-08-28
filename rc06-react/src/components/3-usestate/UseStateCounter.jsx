//* ==================== HOOKS ===============================
//! Hook'lar fonksiyonel component'ler icerisinde state'leri kullanmamiza
//! olanak saglayan ozel fonksiyonlardir.
//! React 16.8 versiyonu ile gelmistir ve geldikten sonra Class-componentler'in
//! kullanimi cok azaltmistir.

//? React'ta useState(), useEffect(), useContext() gibi bir cok built-in
//? Hook bulunmaktadir. Ayrica custom hook tanimlamak da mumkundur.

//* Hook Kullanim Kurallari:
//* 1. İlk olarak import edilmeliler. import { useState } from "react";
//* 2. Hook'lar ust seviyede tanimlanmalidir. Yani Hook'lar bir
//*    dongunun, kosul cumleciginin ve icice fonksiyonlarin icerisinde
//*    kullanilmamalidir.
//* 3. Hook'lar sadece React Fonksiyonel componentleri icerisinde cagrilmalidir.
//*    Normal Javascript fonksiyonlari icerisinde cagrilmamalidir
//*    (Custom hook'lar icerisinde bir hook cagrilabilir)
//?    https://react.dev/reference/react/hooks#state-hooks
//* =============================================================

// import React from 'react'
import { useState } from "react";
const UseStateCounter = () => {
  //   const [counter, setCounter] = React.useState(0);
  //? useState hook'u ile counter adinda bir state tanimladik.
  const [counter, setCounter] = useState(0);

  //? counter state'nin degerini setCounter metodu ile bir arttırdik
  const handleInc = () => setCounter(counter + 1);
  //? state'in önceki halini setter metodu içinden yakalayabiliriz
  //   const handleInc = () => setCounter((prevState)=>prevState + 1);

  return (
    <div>
      <h2>UseStateCounter</h2>
      <h3>Count: {counter} </h3>
      <button onClick={handleInc} className="btn btn-primary">
        Artır
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-warning">
        Sıfırla
      </button>
      {/* //* Eger setCounter metodunu callback ile yazmazsak bu metot ilk acilistan itibaren doğrudan cagirilmis olur. Bu durumda da counter state'ini gunceller. State guncellendigi icinde component re-render olur. Re-render ise yeniden setCounter araciligi ile state'in guncellenmesine yol acar ve sonsuz donguye girer */}
      <button
        onClick={() => setCounter(counter - 1)}
        className="btn btn-danger"
      >
        Azalt
      </button>
    </div>
  );
};

export default UseStateCounter;
