import React from "react";
import "./InsertWord.css"
import lineInsWord from "../../assets/screens/lineRoom.svg"
import Button from "../button/Button";
import Menu from "../menu/Menu";

const InsertWord = () =>{

    return(
        <div className="container__principal__insword">
            <div className="container__insert__word">
                <p>Insira sua palavra</p>
                <input className="input__insert__word" type="text" placeholder="Sua palavra aqui" />
                <img src={lineInsWord} />
                <Button
                text={"Enviar"}/>
            </div>
        </div>
    )
}

export default InsertWord;