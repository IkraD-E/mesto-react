function Register() {
  return (
    <main className="content">
      <section className="register">
        <h1 className="register__header">Регистрация</h1>
        <form className="register__form">
            <input 
              className="register__input"
              placeholder="Email"
            />
            <input 
              className="register__input"
              placeholder="Пароль" 
            />
        </form>
        <button className="register__submit" type="button">Регистрация</button>
      </section>
    </main>
  )
}
  
export default Register;