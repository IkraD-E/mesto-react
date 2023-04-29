import React from "react";

export default function PopupChangeAvatarForm() {
    const [cardUrl, setUrl] = React.useState("");
    function handleChangeUrl(e) {
        setUrl(e.target.value)
    }

    return (
        <form className="popup__form" name='form__change-avatar'>
            <input 
                required 
                value={cardUrl}
                type="url" 
                name="link" 
                id="avatar-source" 
                placeholder="Ссылка на картинку" 
                className="popup__input popup__input_type_image-source popup__input"
                onChange={handleChangeUrl}
            />
            <span className="popup__error avatar-source-error"></span>
            <button className="popup__button" type="submit">
                Сохранить
            </button>
        </form>
    )
}