export default function PopupChangeProfileInputs() {
    return (
        <>
            <input required minLength="2" maxLength="40" type="text" name="name" id="name" placeholder="ФИО" className="popup__input popup__input_type_name popup__input"/>
            <span className="popup__error name-error"></span>
            <input required minLength="2" maxLength="200" type="text" name="info" id="info" placeholder="Профессия" className="popup__input popup__input_type_info popup__input"/>
            <span className="popup__error info-error"></span>
        </>
    )
}