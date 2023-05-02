import React, { useContext, useEffect } from "react";
import "./InsertWord.css"
import lineInsWord from "../../assets/screens/lineRoom.svg"
import Button from "../button/Button";
import { GameContext, getUser, verifyWord } from "../../context/GameContext";
import { useState } from "react";

const InsertWord = ({player}) =>{

    const [word, setWord] = useState('') 
    const [showFeedback, setShowFeedback] = useState("input__insert__word")
    const { hit } = useContext(GameContext)
    const playerAux = getUser()

    useEffect(() => {
        if ((hit.bool && hit.color === playerAux.color)) {
            console.log("Entrei aqui")
            setShowFeedback("green")
        } else if ((!hit.bool && hit.color === playerAux.color)) {
            setShowFeedback("red")
            setTimeout(() => {
                hit.bool = false
                hit.color = ""
            }, 1000)
        } else {
            setShowFeedback("input__insert__word")
        }
    })

    return(
        <div className="container__principal__insword">
            <div className="container__insert__word">
                <p>Insira sua palavra</p>
                <input className={`${showFeedback}`} value={word} type="text" placeholder="Sua palavra aqui" onChange={(e) => setWord(e.target.value)}/>
                <img src={lineInsWord} />
                <Button
                text={"Enviar"}
                functionB={() => verifyWord(word, player.color)}/>
            </div>
        </div>
    )
}

export default InsertWord;