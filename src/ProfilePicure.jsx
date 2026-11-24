import imageUrl from './assets/juicyj.png'
function ProfilePicture() {
    const handleClick = (e) => e.target.style.display = "none";
    return (<img onClick={(e) => handleClick(e)} src={imageUrl}></img>)
}

export default ProfilePicture;