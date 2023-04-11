import React, { useContext } from "react";
import "./InsertWord.css"
import lineInsWord from "../../assets/screens/lineRoom.svg"
import Button from "../button/Button";
import { verifyWord } from "../../context/GameContext";
import { useState } from "react";

const InsertWord = ({player}) =>{

    const [word, setWord] = useState('') 

    return(
        <div className="container__principal__insword">
            <div className="container__insert__word">
                <p>Insira sua palavra</p>
                <input className="input__insert__word" value={word} type="text" placeholder="Sua palavra aqui" onChange={(e) => setWord(e.target.value)}/>
                <img src={lineInsWord} />
                <Button
                text={"Enviar"}
                functionB={() => verifyWord(word, player.color)}/>
            </div>
        </div>
    )
}

export default InsertWord;