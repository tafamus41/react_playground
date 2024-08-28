//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{backgroundColor:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//! External css
//! CSS dosyalari dogrudan import edilir. Export edilmelerine gerek yoktur.
//? CSS dosyalari import "path" seklinde eklenir.
import "./Main.css";

//? Dahili bir resim eklemek icin import yapmak gereklidir.
//? ancak public klasöründeki resimler importsuz bir şekilde
//? erisilebilir.
import landscape from "./images/landscape.jpg";

//? local ve global style degiskeni
const headerStyle = {
  color: "teal",
  backgroundColor: "lightGray",
  fontWeight: "bold",
};

const Main = () => {
  return (
    <main>
      {/* JSX */}
      {/* //* Inline CSS, (key-value), notasyon olarak camelCase */}
      <h2 style={{ color: "red", backgroundColor: "gray" }}>Main Section</h2>
      <h3 style={headerStyle}>Other Header</h3>
      {/* //* External CSS'den stil geldi */}
      <p className="par">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, itaque
        recusandae nesciunt ut optio nam voluptas est provident quas
        perspiciatis dolorem tempora omnis consequatur dolore voluptate dolores
        harum. Dicta, nihil.
      </p>
      <p className="par2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat fugiat
        illo deserunt odit unde!
      </p>
      <div>
        <img
          className="img"
          src="https://cdn.pixabay.com/photo/2024/01/04/21/54/volcano-8488486_640.jpg"
          alt="manzara"
        />
        {/* //* Lokal ortamımızda buluna bir resmi dogrudan path vererek cagiramayiz. Bunun yerine import yaparız */}
        <img className="img" src={landscape} alt="" />
        {/* //* Public klasöründeki resimlere doğrudan ulaşıbildiği için yol vererek eriştik. Ana dizin) */}
        <img className="img" src="./lake.jpg" alt="lake" />
      </div>
    </main>
  );
};
export default Main;
