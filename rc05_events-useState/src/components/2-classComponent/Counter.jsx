//* ================= CLASS COMPONENTS AND STATE ====================
//* React'da Class-Component'ler ES6 class yapisina dayanmaktadir.
//* Cok fazla boilerplate kod icermektedir.
//* Ancak Class-Component'ler React'da state'leri barindiran ilk component yapisidir.
//* State, aslinda bir component hakkinda bilgi tutan bir React nesnesidir.
//* Bir componentin state'i zaman icerisinde degisebilir.
//* State her degistiginde React bu componenti yeninden render eder.
//* Bir state'e baslangıc degeri constructor metodu icersinde this.state ile atanabilir
//* constructor'in disinda state, setState() metodu ile degistilebilir.
//* ====================================================================

import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    //! State'te başlangıç değeri verdik
    this.state = { count: 0 };

    //? decrement metodunun Counter class'ına bağlanması(bind)
    this.decrement = this.decrement.bind(this);
  }

  //! Yazmis oldugumuz metotlar default olarak classa baglanmaz.
  //! Ancak, React built-in fonksiyonlari baglidir.

  //* Bunun icin metotlarimizi ya constructor icerisinde baglamaliyiz yada otomatik baglamayi saglayan arrow fonksiyonlarini kullanmaliyiz.

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <h3>Count: {this.state.count} </h3>
        <button onClick={this.increment} className="btn btn-primary">
          Artır
        </button>
        <button
          onClick={() => this.setState({ count: 0 })}
          className="btn btn-success"
        >
          CLR
        </button>
        <button onClick={this.decrement} className="btn btn-danger">
          Azalt
        </button>
        {/* <button onClick={this.decrement.bind(this)} className="btn btn-danger">
          Azalt
        </button> */}
      </div>
    );
  }
}

export default Counter;
