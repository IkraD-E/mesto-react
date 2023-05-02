import PopupWithForm from '../PopupWithForm'
import AddPlacePopupFrom from '../popupsForms/AddPlacePopupFrom';
import React from "react";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
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
        <PopupWithForm 
            title="Новое место" 
            isOpen={isOpen} 
            onClose={onClose}
            name="add-place"
            onSubmit={handleSubmit}
            buttonText="Создать" 
        >
            <AddPlacePopupFrom handleChangeName={handleChangeName} handleChangeUrl={handleChangeUrl} cardName={cardName} cardUrl={cardUrl}/>
        </PopupWithForm>
    )
}