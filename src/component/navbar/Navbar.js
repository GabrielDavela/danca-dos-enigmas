import React from "react";
import "./Navbar.css";
import lifeImg from "../../assets/screens/life.png";
import lifeLostImg from "../../assets/screens/life_lost.png";
import timerImg from "../../assets/screens/timer.png";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";

const Navbar = ({ timer, points, group, playerColor }) => {

    const { punctuation } = useContext(GameContext)
    const [lifeLost, setLifeLost] = useState(false)
    const [color, setColor] = useState({})

    useEffect(() => {
        if (punctuation % 50 === 0 && punctuation !== 0 && punctuation < 2000) {
            setLifeLost(true)
            setTimeout(() => {
                setLifeLost(false)
            }, 800);
        }
    }, [punctuation])

    useEffect(() => {

        switch (playerColor) {
            case "Vermelho":
                setColor({ background: "#F20F38" })
                break
            case "Azul":
                setColor({ background: "#2975DB" })
                break
            case "Amarelo":
                setColor({ background: "#dcbd22" })
                break
            case "Verde":
                setColor({ background: "#5DBE49" })
                break
        }

    }, [playerColor])

    return (
        <div className="container__principal__navbar">
            <div className="container__timer">
                <p>{timer}</p>
                <img src={timerImg} />
            </div>
            <div className="container__group" style={color}>
                <p>{group}</p>
            </div>
            <div className="container__points">
                <p className="informations__navbar">{points}</p>
                <img src={lifeImg} />
                {
                    lifeLost &&
                    <img src={lifeLostImg} className="lifeLost__navbar" />
                }
            </div>
        </div>
    )
}

export default Navbar; 