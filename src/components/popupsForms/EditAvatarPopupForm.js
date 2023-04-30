import React from "react";

export default function EditAvatarPopupForm({onUpdateAvatar}) {
    const [avatarUrl, setUrl] = React.useState("");
    const imageRef = React.useRef()
    function handleChangeUrl(e) {
        setUrl(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();      
        onUpdateAvatar({
          avatar: imageRef.current.value
        });
    }

    return (
        <form className="popup__form" name='form__change-avatar' onSubmit={handleSubmit}>
            <input 
                required 
                value={avatarUrl}
                type="url" 
                name="link" 
                id="avatar-source" 
                placeholder="Ссылка на картинку" 
                className="popup__input popup__input_type_image-source popup__input"
                onChange={handleChangeUrl}
                ref={imageRef}
            />
            <span className="popup__error avatar-source-error"></span>
            <button className="popup__button" type="submit">
                Сохранить
            </button>
        </form>
    )
}