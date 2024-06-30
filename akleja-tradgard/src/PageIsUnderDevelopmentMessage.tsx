import './PageIsUnderDevelopmentMessage.css';

function Message() {
    return (
        <div className="container">
            <article>
            <img src="../akleja-logo2.png" alt="Logo" className="logo" />
                <header>
                    <h1>
                        Hemsidan är under uppbyggnad!
                    </h1>
                    <p>
                        För tidsbokning eller konsultation, vänligen hör av er på mail eller telefon. <br /><br />
                        Mail: alexandra@akleja-tradgard.se <br />
                        Telefon: 0708113164 <br />
                    </p>
                </header>
            </article>
        </div>
    );
}

export default Message;
