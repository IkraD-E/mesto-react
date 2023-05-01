export default function DeletePlacePopupFrom({card, onSubmit}) {
    function handleDeletePlace(e) {
        e.preventDefault();
        onSubmit(card);
    }
    return (
        <form className="popup__form" name='form__delete-image' onSubmit={handleDeletePlace}>
            <button className="popup__button" type="submit">
                Да
            </button>
        </form>
    )
}