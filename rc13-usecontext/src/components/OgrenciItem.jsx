import React, { useContext } from 'react'
import { StudentContext } from '../App'

const OgrenciItem = () => {
    const {students}= useContext(StudentContext)
  return (
    <div>
        {
            students.map((student)=>(
           <div key={student.id} style={{background:student.color}}>
            <h3>
                NAME:{student.name}
            </h3>
            <h4>EMAİL:{student.email}</h4>
            <h4>AGE:{student.age}</h4>
            COLOR: <input type="text" value={student.color}/>
           </div>     
            ))
        }
    </div>
  )
}

export default OgrenciItem