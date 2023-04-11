import React from "react";
import "./Tip.css";
import lineTip from "../../assets/screens/lineRoom.svg";
import Menu from "../menu/Menu";

const Tip = () => {

    return(
        <div className="container__principal__tip">
            <div className="container__tip">
                <p>Sua palavra possui</p>
                <img src={lineTip} />
                <div className="container__quantity__letters">
                    <p>7 letras</p>
                </div>
            </div>
        </div>
    )
}

export default Tip; 