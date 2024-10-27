import React from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const CardDetails = () => {
  const { namE } = useParams();

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
                <button className="btn btn-warning">GO BACK</button>
                <button className="btn btn-primary">GO HOME</button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CardDetails;
