import Buton from "../buton/Buton";
import data from "../../data";
// import "./Card.css"
import cardStyles from "./Card.module.css";

//! pure css kullanarak yazdığımız stillendirmelere, projemiz bundler edildiğinde tek bir noktada birleştiği için ortak classlar olduğunda çakışmalar,ezmeler meydana gelebilir. Her ne kadar css dosyalarımızı ayrı ayrı dosyalarda yazsakta en son tek bir noktada toplandığı için yazdığımız class isimleri aslında global anlam taşıdığı için projenin her noktasını etkileyebiliyor.  Bu durumdan kurtulmanın en güzel çözümü nodejs ortamında module.css yapısını kullanmaktır.

//* module.css'de derleyici CSS class'larini alarak bunlari unique olacak
//* sekilde yeniden adlandirir. (Ornek: card_title__XaSde)
//* Bu durumda, global scope problemi ortadan kalktigi icin stillerin
//* baska class tarafindan ezilmesi (overriding) engellenir.
//* Module-CSS, Webpack, Browsify gibi tool'lar ile kullanilabilir.

//? Bir diğer yolu ise native css e gelen nesting özelliği sayesinde componentlerdeki kapsayıcı divlere componentin adını taşıyan bir class verip css dosyasında o classı kullanarak nesting css yazılması. Veya o calssı kullanarak css yazmak => örneğin; .card .title{} yani .card içerisidne buluna .title classına uygula diyerek lokalize edebilirsiniz.

const Card = () => {
  console.log(data);
  return (
    <div className="card">
      {/* <h1>{data[0].name}</h1>
        <img src={data[0].img} alt="" />
        <Buton name={data[0].btnName} text="deneme"  />

        <h1>{data[1].name}</h1>
        <img src={data[1].img} alt="" />
        <Buton name={data[1].btnName} text="deneme"  />
        <h1>{data[2].name}</h1>
        <img src={data[2].img} alt="" />
        <Buton name={data[2].btnName} text="deneme"  />
        <h1>{data[3].name}</h1>
        <img src={data[3].img} alt="" />
        <Buton name={data[3].btnName} text="deneme"  /> */}

      {/* {
        data.map((item,i)=>{
          return (
            // <div key={i}>
            <div key={item.id}>
             <h1 className="title">{item.name}</h1>
             <img src={item.img} alt="" className="images" />
             <Buton name={item.btnName} />
            </div>
          ) 
        })
       } */}

      {/* verileri dinamik şekilde yazdırma */}
      {/* 1.yol   */}
      {data.map((item, i) => {
        return (
          // <div key={i}>
          <div key={item.id}>
            <h1 className={cardStyles.title}>{item.name}</h1>
            <img src={item.img} alt="" className={cardStyles.images} />
            <Buton name={item.btnName} />
          </div>
        );
      })}
      {/* 2.yol   */}
      {/* {data.map((item) => {
         const { id, img, name, btnName } = item;
         return (
           <div key={id}>
             <h1 className={CardStyle.title}>{name}</h1>
             <img src={img} alt="img" className={CardStyle.images} />
             <Buton name={btnName} />
           </div>
         );
       })} */}
      {/* 3.yol   */}
      {/* {data.map((item) => (
         <div key={item.id}>
           <h1 className={CardStyle.title}>{item.name}</h1>
           <img src={item.img} alt="img" className={CardStyle.images} />
           <Buton name={item.btnName} />
         </div>
       ))} */}

      {/* 4.yol   */}
      {/* {data.map(({ id, name, img, btnName }) => (
         <div key={id}>
           <h1 className={CardStyle.title}>{name}</h1>
           <img src={img} alt="img" className={CardStyle.images} />
           <Buton name={btnName} />
         </div>
       ))} */}
    </div>
  );
};
export default Card;
