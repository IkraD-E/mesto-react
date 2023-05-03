import PopupWithForm from '../PopupWithForm'
import AddPlacePopupInput from '../popupsInput/AddPlacePopupInput';
import React from "react";

export default function AddPlacePopup({isOpen, onClose, onAddPlace}) {
    const [cardName, setName] = React.useState("");
    React.useEffect(() => {
        setName("");
        setUrl("");
    }, [isOpen]);
    
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
            <AddPlacePopupInput handleChangeName={handleChangeName} handleChangeUrl={handleChangeUrl} cardName={cardName} cardUrl={cardUrl}/>
        </PopupWithForm>
    )
}