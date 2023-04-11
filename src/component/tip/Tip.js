import React from "react";
import "./Tip.css";
import lineTip from "../../assets/screens/lineRoom.svg";
import { useContext } from "react";
import { useEffect } from "react";
import { GameContext, sizeWordFront } from "../../context/GameContext";

const Tip = ({player}) => {

    const { sizeWord } = useContext(GameContext)

    useEffect(() => {
        sizeWordFront(player.color)
    }, [])

    return(
        <div className="container__principal__tip">
            <div className="container__tip">
                <p>Sua palavra possui</p>
                <img src={lineTip} />
                <div className="container__quantity__letters">
                    <p>{sizeWord} letras</p>
                </div>
            </div>
        </div>
    )
}

export default Tip; 