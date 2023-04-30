
import "./Feedback.css"
import cancel from "../../assets/screens/cancel.svg"
import winner from "../../assets/screens/check_circle.svg"

const Feedback = ({ isWinner }) => {
    return (
        <div className="container__modal__feedback">
            <div className="modal__feedback">
                <div className="feedback">
                    {/* Ganhou */}
                    {isWinner &&
                        <>
                            <p>Você acertou!!
                                <br/>Espere para ver sua colocação!</p>
                            {/* Imagem */}
                            <div className="container__image__feedback">
                                <img src={winner} />
                            </div>
                        </>
                    }

                    {!isWinner &&
                        <>

                            {/* Perdeu por tempo */}
                            {false &&
                                <p>Seu tempo acabou!
                                    Infelizmente você perdeu.</p>
                            }

                            {/* Perdeu por tentativa */}
                            {false &&
                                <p>Sua quantidade de tentativas foi excedida!</p>
                            }

                            {/* Imagem */}
                            <div className="container__image__feedback">
                                <img src={cancel} />
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default Feedback