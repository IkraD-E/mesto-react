export default function PopupWithForm(props){
    return (
        <div className={`popup ${props.isOpen && "popup_opened"}`} id={`popup__${props.name}`}>
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
                <h2 className="popup__header">{props.title}</h2>
                <form className="popup__form" name={`form__${props.name}`} noValidate>
                    {props.children}
                    <button className="popup__button" type="submit">
                        {props.buttonText}
                    </button>
                </form>
            </div>
        </div>
    )
    }