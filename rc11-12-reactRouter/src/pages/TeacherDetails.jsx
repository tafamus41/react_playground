import React from 'react'
import { useLocation } from 'react-router-dom'

const TeacherDetails = () => {
  //!1.yol navigate yolladığı path e id yi gömerek yolladı, burada da useParams la id yi çektik*******

  //   const { id } = useParams();
  // // path ile yollanan id yi useParams hook uyla yakaladık
  //   const [person, setPerson] = useState({});
 

  //   useEffect(() => {
  //     axios
  //       .get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //       .then((res) => setPerson(res.data)).catch((err)=>setError(true))
  //   }, [id]);
//!2.yol, useNavigate ile teacher sayfasından tıkladığımız kişinin tüm bilgilerini state ile buraya getirdik ve useLocation ile yakaladık
  const {
    state: { person },
  } = useLocation();

  return (
    <div className="text-center container mt-4">
      <img
        src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${person.name}`}
        alt=""
        width="400px"
      />
      <h3>{person.name} </h3>
      <h2>{person.email} </h2>
      <h5>{person.website} </h5>
      <h5>{person.phone} </h5>
    </div>
  );
}

export default TeacherDetails