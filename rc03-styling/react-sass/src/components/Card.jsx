import teamMembers from "../data";

const Card = () => {
   return (
    <div>
        {
            teamMembers.map((item)=>{
                const {id,name,role,bio,img} = item;
                return (
                    <div className="card" key={id}>
                        <h2>{name}</h2>
                        <h3>{role}</h3>
                        <img src={img} alt={name} />
                        <p>{bio}</p>
                        <div className="buttons">
                            <button className="small">Small</button>
                            <button className="large">Large</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
   )
}

export default Card;