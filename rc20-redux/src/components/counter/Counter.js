import React from 'react'
import "./Counter.css"
import { useDispatch, useSelector } from 'react-redux';
import { arttir, azalt, sifirla } from '../../redux/actions/counterActions';


const Counter = () => {
  //değişkenler useSelector hookuyla çağırılır, fonksiyonlar ise useDispatch ile çağırılır
const { text, sayac } = useSelector((state) => state.counterReducer);

const dispatchhh=useDispatch()



  return (
    <div className="app">
      <h2 className="counter-header"> Counter With Redux</h2>

      <h1>{sayac} </h1>
      {/* sayac */}

      <h2>{text} </h2>
      {/* text */}

      <div>
        <button
          className="counter-button positive"
          onClick={() => dispatchhh(arttir())}
        >
          ARTTIR
        </button>

        {/* arttır fonk */}

        <button
          className="counter-button "
          onClick={() => dispatchhh(sifirla())}
        >
          RESET
        </button>

        {/* sıfırla fonk */}
        <button
          className="counter-button negative"
          onClick={() => dispatchhh(azalt())}
        >
          AZALT
        </button>

        {/* azalt fonk */}
      </div>
    </div>
  );
}

export default Counter