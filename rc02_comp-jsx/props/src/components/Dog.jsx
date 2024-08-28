import Name from "./Name";

const Dog = ({ name, img, color = "gray", isBlueEyed }) => {
  console.log(isBlueEyed);
  //? destr.
  // const { name, img, color } = props
  return (
    <div>
      <Name name={name} />
      {/* //* JSX içinde if/else kullanılamaz, ternary kullanılabilir */}
      <p>Blue eyed?: {isBlueEyed ? "Yes" : "No"} </p>
      <img src={img} alt="" />
      <p style={{ backgroundColor: color, color: "white" }}>Color: {color}</p>
      <hr />
    </div>
  );
};

export default Dog;

// const Dog = (props) => {
//   return (
//     <div>
//       <p>{props.name} </p>
//       <img src={props.img} alt="" />
//       <p style={{ backgroundColor: props.color, color: "white" }}>
//         Color: {props.color}
//       </p>
//       <hr />
//     </div>
//   );
// };

// export default Dog;
