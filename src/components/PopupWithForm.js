export default function PopupWithForm({isOpen, onClose, name, title, buttonText, children}){
    return (
        <div className={`popup ${isOpen && "popup_opened"}`} id={`popup__${name}`}>
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={onClose}/>
                <h2 className="popup__header">{title}</h2>
                <form className="popup__form" name={`form__${name}`}>
                    {children}
                    <button className="popup__button" type="submit">
                        {buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
    }