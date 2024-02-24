import Profile from "./Profile";
const Body = () => {
    return (
        <div className='card-body'>
            <div className='card-badge'>Learning</div>
            <p className='card-date'>Published 21 Dec 2023</p>
            <h2 className='card-title'>HTML & CSS foundations</h2>
            <p className='card-text'>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <Profile/>
        </div>

    );
}
export default Body;