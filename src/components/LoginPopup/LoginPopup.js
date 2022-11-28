import Okey from '../../images/okey.svg'
import Error from '../../images/error.svg'

function LoginPopup() {
    return (
        <div className="login-popup">
            <div className='login-popup__container'>
                <button className="popup__close button"></button>
                <img className="login-popup__img" src={Okey} alt="Okey" />
                <p className="login-popup__text">Вы успешно зарегистрировались!</p>
            </div>
        </div>
    );
}

export default LoginPopup;