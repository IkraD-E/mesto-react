export default function ElementTemplate() {
    return (
        <template id="element-template">
            <li className="element">
                <img className="element__photo"/>
                <button className="element_delete_button"></button>
                <div className="element__rectangle">
                    <h2 className="element__title"></h2>
                    <div className="button-container">
                        <button className="element__like-btn" type="button"></button>
                        <p className="button-container__count">0</p>
                    </div>
                </div>
            </li>
        </template>
    )
}