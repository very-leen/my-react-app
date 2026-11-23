import profilePic from "./assets/juicyj.png"
function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="Profile Picture" />
            <h2 className="card-title" >Lee</h2>
            <p className="card-text" >I'm studying React</p>
        </div>
    )
}
export default Card;