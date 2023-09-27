function Main() {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="text">
                        <ul className="row button-list">
                            <li className="col-6">
                            <a href="/create" type="button" className="btn btn-primary">Створити нотатку</a>
                            </li>
                            <li className="col-6">
                            <a href="/note" type="button" className="btn btn-primary">Переглянути нотатку</a>
                            </li>
                        </ul>
                    </div>
                    <div className="text">
                    <p><b>ShareNotes</b> – сервіс для обміну замітками. Створіть замітку, надішліть посилання на неї, і ваш друг зможе її переглянути. Після перегляду замітка буде видалена (або через 15 хвилин з моменту створення).</p>
                    <p>Як створити замітку?</p>
                    <ul>
                        <li>Перейдіть за посиланням</li>
                        <li>Вставте текст і натисніть "Створити"</li>
                        <li>Надішліть згенеровану адресу другу!</li>
                    </ul>
                    <p>Як прочитати замітку? Перейдіть за отриманим URL, або введіть адресу вручну тут.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;