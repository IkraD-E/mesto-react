export default function PopupAddPlaceFrom() {
    return (
        <form className="popup__form" name='form__add-place'>
            <input 
                required minLength="2" 
                maxLength="30" 
                type="text" 
                name="name" 
                id="place-name"
                placeholder="Название" 
                className="popup__input popup__input_type_place-name popup__input"/>
            <span className="popup__error place-name-error"></span>
            <input 
                required 
                type="url" 
                name="link" 
                id="place-source" 
                placeholder="Ссылка на картинку" 
                className="popup__input popup__input_type_image-source popup__input"/>
            <span className="popup__error place-source-error"></span>
            <button className="popup__button" type="submit">
                Создать
            </button>
        </form>
    )
}