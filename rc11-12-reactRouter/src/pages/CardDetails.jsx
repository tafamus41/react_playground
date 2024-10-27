import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import data from "../data"
const CardDetails = () => {
//! 1.yol. courseCard dan navigate ile tıklanan card ın verilerini state ile yollarsak, burada useLocation ile çekebiliriz
// / const{state:{a}}=useLocation()

//   return (
//     <div className="container text-center mt-4">
//       <div>
//         <h3>{a.name} </h3>
//         <img src={a.img} alt="" width="400px" />
//         <h3>{a.text} </h3>
//         <h4 className="text-danger">{a.yorum}</h4>




//!2.yol
  const {namE}=useParams()
const navigate=useNavigate()
  // console.log(namE); CSS

  
  return (
    <div className="container text-center mt-4">
      {data.map(
        (a) =>
          a.name === namE && (
            <div>
              <h3>{a.name}</h3>
              <img src={a.img} alt="" width="300px" />
              <h3>{a.text} </h3>
              <h4>{a.yorum} </h4>
              <div>
                <button
                  className="btn btn-warning"
                  onClick={() => navigate(-1)}
                >
                  GO BACK
                </button>

                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/")}
                >
                  GO HOME
                </button>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default CardDetails