function Login() {
    return (
        <div className="auth-form">
            <h2 className="auth-form__title">Вход</h2>
            <form className="auth-form__main" action="" name="register" onSubmit="">
                <input type="email" placeholder="Email" id="regEmail" name="regEmail" className="auth-form__input" minLength="2" maxLength="30" required />
                <input type="password" placeholder="Пароль" id="regPass" name="regPass" className="auth-form__input" minLength="2" maxLength="30" />
                <button type="submit" className="auth-form__button button">Войти</button>
            </form>
        </div>
    );
}

export default Login;