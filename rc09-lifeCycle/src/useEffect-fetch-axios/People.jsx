import React, { useEffect, useState } from "react";

const People = () => {
  const [people, setPeople] = useState([]);

  //! 1.yol fetch then yapısı

  useEffect(() => {
    fetch("https://reqres.in/api/users")
      .then((res) => res.json())
      .then((veri) => setPeople(veri.data));
  }, []);

  return (
    <div className="container text-center mt-4">
      <div className="row">
        {people.map((a) => (
          <div className="col"></div>
        ))}
      </div>
    </div>
  );
};

export default People;
