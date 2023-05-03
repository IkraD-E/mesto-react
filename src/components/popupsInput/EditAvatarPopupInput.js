export default function EditAvatarPopupInput({imageRef}) {

    return (
        <>
            <input
                required
                type="url" 
                name="link" 
                id="avatar-source" 
                placeholder="Ссылка на картинку" 
                className="popup__input popup__input_type_image-source popup__input"
                defaultValue=""
                ref={imageRef}
            />
            <span className="popup__error avatar-source-error"></span>
        </>
    )
}