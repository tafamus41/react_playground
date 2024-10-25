import { useState } from "react"
import AppointmentList from "../components/AppointmentList"
import Doctors from "../components/Doctors"
import {appointmentData} from "../helper/data"

const Home = () => {
  const [appointments, setAppointments] = useState(appointmentData)
const handleAdd=(newAppointment)=>{
setAppointments([...appointments,newAppointment])
}

return (
    <main className="text-center mt-2">
      <h1 className="display-5 text-danger">CLARUS HOSPITAL</h1>
      <Doctors />
      <AppointmentList appointments={appointments}/>
    </main>
  )
}

export default Home
