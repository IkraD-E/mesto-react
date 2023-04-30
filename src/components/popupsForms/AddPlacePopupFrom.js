import React from "react";

export default function AddPlacePopupFrom({onAddPlace}) {
    const [cardName, setName] = React.useState("");
    function handleChangeName(e) {
        setName(e.target.value)
    };

    const [cardUrl, setUrl] = React.useState("");
    function handleChangeUrl(e) {
        setUrl(e.target.value)
    };

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
          name: cardName,
          link: cardUrl,
        });
    };
    return (
        <form className="popup__form" name='form__add-place' onSubmit={handleSubmit}>
            <input 
                required minLength="2" 
                maxLength="30" 
                type="text" 
                name="name" 
                id="place-name"
                placeholder="Название" 
                className="popup__input popup__input_type_place-name popup__input"
                onChange={handleChangeName}
            />
            <span className="popup__error place-name-error"></span>
            <input 
                required 
                type="url" 
                name="link" 
                id="place-source" 
                placeholder="Ссылка на картинку" 
                className="popup__input popup__input_type_image-source popup__input"
                onChange={handleChangeUrl}
            />
            <span className="popup__error place-source-error"></span>
            <button className="popup__button" type="submit">
                Создать
            </button>
        </form>
    )
}