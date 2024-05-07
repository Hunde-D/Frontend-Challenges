import UserImg from '../assets/images/hunde-profile.jpg';
export default function Profile(){
    return (
        <div className='card-user'>
            <img src={UserImg} className='user-img'/>
            <h4 className='user-name'>Hunde Desalegn</h4>
        </div>
    );
}