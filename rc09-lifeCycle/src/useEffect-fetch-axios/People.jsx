import React, { useEffect, useState } from "react"

const People = () => {
  const[people,setPeople]=useState([])

  //! 1.yol fetch then yapısı

useEffect(()=>{
  fetch("https://reqres.in/api/users").then((res)=>res.json()).then((veri)=>setPeople(veri.data))
},[])

  return (
    <div>
      People
    </div>
  );
};

export default People;
