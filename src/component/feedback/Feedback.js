
import "./Feedback.css"
import cancel from "../../assets/screens/cancel.svg"
import winner from "../../assets/screens/check_circle.svg"
import { useEffect } from "react"

const Feedback = ({ playerData }) => {
    
    const isLoser = playerData.time === "00:00"

    return (
        <div className="container__modal__feedback">
            <div className="modal__feedback">
                <div className="feedback">
                    {/* Ganhou */}
                    {!isLoser &&
                        <>
                            <p>Você acertou!!
                                <br />Espere para ver sua colocação!</p>
                            <div className="container__image__feedback">
                                <img src={winner} />
                            </div>
                        </>
                    }

                    {isLoser &&
                        <>
                            {/* Perdeu por tempo */}
                            <p>Seu tempo acabou!
                                Infelizmente você perdeu.</p>

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