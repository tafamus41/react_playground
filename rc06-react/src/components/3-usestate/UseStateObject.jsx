import React, { useState } from "react";

const UseStateObject = () => {
  //? state tanımlamaları
  //   const [ad, setAd] = useState("Mehmet");
  //   const [soyad, setSoyad] = useState("Zafer");
  //   const [meslek, setMeslek] = useState("Mühendis");

  const [kişi, setKişi] = useState({
    ad: "Mehmet",
    soyad: "Zafer",
    meslek: "Mühendis",
  });
  const [visible, setVisible] = useState(true);
  return (
    <div>
      <h1>UseStateObject</h1>
      {visible && (
        <>
          <h2>Ad: {kişi.ad} </h2>
          <h2>Soyad: {kişi.soyad} </h2>
          <h2>Meslek: {kişi.meslek} </h2>
        </>
      )}
      <button
        onClick={() => setKişi({ ...kişi, ad: "Hakan" })}
        className="btn btn-primary"
      >
        Ad Güncelle
      </button>
      <button
        onClick={() => setKişi({ ...kişi, soyad: "Yılmaz" })}
        className="btn btn-secondary"
      >
        Soyad Güncelle
      </button>
      <button
        onClick={() => setKişi({ ...kişi, meslek: "Developer" })}
        className="btn btn-success"
      >
        Meslek Güncelle
      </button>
      <button onClick={() => setVisible(!visible)} className="btn btn-danger">
        Tabloyu Göster/ Sakla
      </button>
      {/* <button onClick={() => setAd("Hakan")} className="btn btn-primary">
        Ad Güncelle
      </button>
      <button onClick={() => setSoyad("Yılmaz")} className="btn btn-secondary">
        Soyad Güncelle
      </button>
      <button
        onClick={() => setMeslek("Developer")}
        className="btn btn-success"
      >
        Meslek Güncelle
      </button> */}
    </div>
  );
};

export default UseStateObject;
