export default function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card.link && "popup_opened"}`} id="popup__image">
            <figure className="popup__figure">
                <button className="popup__close-btn" type="button" onClick={props.onClose}></button>
                <img className="popup__image" src={props.card.link} alt="Пока здесь пусто"/>
                <figcaption className="popup__image-header">{props.card.name}</figcaption>
            </figure>
        </div>
    )
}