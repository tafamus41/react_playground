const Event = () => {
  //? local değişken
  let message = "Güle güle FS-17";
  //? Event handler fonksiyon tanımlaması
  const handleTıkla = (event) => {
    alert("tıklandı");
    //* event objesi üzerinden elementin özelliklerine ulaşabiliriz
    console.log(event);
    console.log("id", event.target.id);
    console.log("name", event.target.name);
  };

  function handleÇıkış(msg) {
    console.log(msg);
  }

  const handleDeğiştir = () => {
    message = "Merhaba React Dostları";
    console.log(message);
    //! React'da DOM'a direk müdahale tercih edilmez
    // document.querySelector("p").textContent = message;
  };

  //? Bir componentin return kismi 3 farkli yontem ile yeniden render edilir.
  //? 1- Herhangi bir state degisirse
  //? 2- Props degisirse
  //? 3- Refresh force edilirse (tercih edilen bir durum olmaz)
  return (
    <div>
      <h2>Events</h2>
      <button
        onClick={handleTıkla}
        id="myButton"
        name="tıkla"
        className="btn btn-primary"
      >
        Tıkla
      </button>
      <button onClick={() => alert("Silindi")} className="btn btn-danger">
        Sil
      </button>

      {/* //* Eger bir event fonksiyonunun parametresi olmasi gerekiyorsa bu fonksiyon bir arrow fonks. tarafindan  cagrilmalidir. Aksi takdirde event fonksiyonu, event gerceklesmeden cagirilir */}
      <button onClick={() => handleÇıkış(message)} className="btn btn-success">
        Çıkış
      </button>
      <button onClick={handleDeğiştir} className="btn btn-warning">
        Değiştir
      </button>
      <p>{message} </p>
    </div>
  );
};
export default Event;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Hooks (Functional Components).
//? 2. Statefull Classes (Class Components).

//? Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.
