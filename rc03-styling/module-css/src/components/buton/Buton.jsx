// import "./Buton.css"
import btnStyles from "./Buton.module.css";


// const Buton = (props) => {
//     console.log(props)
//    return (
//     <div>
//         <button>{props.name}</button>
//     </div>
//    )
// }
// export default Buton

// const Buton = (props) => {
//   const {name} = props
//    return (
//     <div>
//         <button>{name}</button>
//     </div>
//    )
// }
// export default Buton

const Buton = ({name}) => {
     return (
    //   <div className="title">
      <div className={btnStyles.title}>
          <button className={`${btnStyles.btnBlue} ${btnStyles["cursor-pointer"]}`}>{name}</button>
      </div>
     )
  }
  export default Buton