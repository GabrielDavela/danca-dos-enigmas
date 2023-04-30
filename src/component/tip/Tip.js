import "./Tip.css";
import lineTip from "../../assets/screens/lineRoom.svg";

const Tip = ({ player, showTip }) => {

    return (
        <div className="container__principal__tip">
            <div className="container__tip">
                <p>Sua palavra possui</p>
                <img src={lineTip} />
                <div className="container__quantity__letters">
                    {showTip &&
                        <>
                            {player.color === "Vermelho" &&
                                <p>7 letras</p>
                            }
                            {player.color === "Azul" &&
                                <p>4 letras</p>
                            }
                            {player.color === "Amarelo" &&
                                <p>7 letras</p>
                            }
                            {player.color === "Verde" &&
                                <p>5 letras</p>
                            }
                        </>
                    }
                    {!showTip &&
                        <p className="blur__tip">Ainda não é hora</p>
                    }
                </div>
            </div>
        </div>
    )
}

export default Tip;