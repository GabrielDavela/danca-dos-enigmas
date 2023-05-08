
import { useContext, useState } from "react";
import { firstcards } from "../../../assets/first-cards/firstCards";
import { GameContext, readyPlayer } from "../../../context/GameContext";

const FirstCard = ({ player }) => {
    const { readyplayers } = useContext(GameContext);

    const [disabled, setDisabled] = useState(false);

    const onReady = () => {
        setDisabled(true);
        readyPlayer(true);
    };

    return (
        <div className="container__image__firstCards">

            {player.color === "Vermelho" &&
                <img src={firstcards.carta_grupo01} className="image__firstCards" />
            }
            {player.color === "Azul" &&
                <img src={firstcards.carta_grupo02} className="image__firstCards" />
            }
            {player.color === "Amarelo" &&
                <img src={firstcards.carta_grupo03} className="image__firstCards" />
            }
            {player.color === "Verde" &&
                <img src={firstcards.carta_grupo04} className="image__firstCards" />
            }

            <button className='button__scanner'
                onClick={onReady}
                disabled={disabled}
            >Pronto<span>{readyplayers}/4</span>
            </button>
        </div>
    )
}

export default FirstCard;