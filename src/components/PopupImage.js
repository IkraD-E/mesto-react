export default function PopupImage() {
    return (
        <div className="popup popup_type_image" id="popup__image">
            <figure className="popup__figure">
                <button className="popup__close-btn" type="button"></button>
                <img className="popup__image" src="#" alt="Пока здесь пусто"/>
                <figcaption className="popup__image-header"></figcaption>
            </figure>
        </div>
    )
}