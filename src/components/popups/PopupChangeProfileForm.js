import React from "react";
import { CurrentUserContext } from "../../context/CurrentUserContext";

export default function PopupChangeProfileForm(props) {
    const currentUser = React.useContext(CurrentUserContext);
    React.useEffect(() => {
        if (currentUser.name) {
            setUserName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [currentUser]);

    const [userName, setUserName] = React.useState(" ");
    function handleChangeName(e) {
        setUserName(e.target.value);
    }

    const [userDescription, setDescription] = React.useState(" ");
    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.onUpdateUser({
          name: userName,
          about: userDescription,
        });
    } 
    
    return (
        <form className="popup__form" name='form__change-profile' onSubmit={handleSubmit}>
            <input 
                required 
                minLength="2" 
                maxLength="40" 
                type="text"
                name="name" 
                id="name" 
                placeholder="ФИО" 
                value={userName}
                className="popup__input popup__input_type_name popup__input"
                onChange={handleChangeName}
            />
            <span className="popup__error name-error"></span>
            <input 
                required 
                minLength="2"
                maxLength="200" 
                type="text" 
                name="info" 
                id="info" 
                value={userDescription}
                placeholder="Профессия" 
                className="popup__input popup__input_type_info popup__input"
                onChange={handleChangeDescription}
            />
            <span className="popup__error info-error"></span>
            <button className="popup__button" type="submit">
                Сохранить
            </button>
        </form>
    )
}