import React from "react";

function Register({onRegisterSubmit}) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log(userEmail, userPassword);
    onRegisterSubmit(
      userEmail, userPassword
    );
  }
  
  const [userEmail, setUserEmail] = React.useState(" ");
  function handleChangeEmail(e) {
      setUserEmail(e.target.value);
  }

  const [userPassword, setUserPassword] = React.useState(" ");
  function handleChangeUserPassword(e) {
    setUserPassword(e.target.value);
  }

  return (
    <main className="content">
      <section className="register">
        <h1 className="register__header">Регистрация</h1>
        <form 
          className="register__form"
          onSubmit={handleSubmit}
        >
          <input 
            required 
            minLength="2" 
            maxLength="30" 
            type="text" 
            id="email"
            className="register__input"
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <input 
            required 
            minLength="2" 
            maxLength="30" 
            type="password" 
            id="password"
            className="register__input"
            placeholder="Пароль" 
            onChange={handleChangeUserPassword}
          />
          <button 
            className="register__submit" 
            type="submit"
          >
            Регистрация
          </button>
        </form>
      </section>
    </main>
  )
}
  
export default Register;