function Login() {
    return (
        <main className="content">
          <section className="login">
            <h1 className="login__header">Вход</h1>
            <form className="login__form">
                <input 
                    className="login__input"
                    placeholder="Email"
                />
                <input 
                    className="login__input"
                    placeholder="Пароль" 
                />
                <button className="login__submit" type="button" >Войти</button>
            </form>
          </section>
  
        </main>
    )
}
  
export default Login;