import React, { useContext, useEffect, useState } from "react";
import "./Ranking.css";
import ContainerRanking from "./containerRanking/ContainerRanking";
import Feedback from "../feedback/Feedback";
import { getUser, sendResultRanking, waitingPlayer } from "../../context/GameContext";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const Ranking = () => {

    const nav = useNavigate()

    const { ranking, showRanking } = useContext(GameContext)
    const [playerData, setPlayerData] = useState({})

    useEffect(() => {
        const player = getUser();
        setPlayerData(JSON.parse(localStorage.getItem(`${player.color}`)));
        if (playerData) {
            const updatedPlayerToRanking = playerData;
            sendResultRanking(updatedPlayerToRanking);
        }
        waitingPlayer()
    }, []);

    return (
        <>
            {!showRanking &&
                <Feedback playerData={playerData} />
            }
            {showRanking &&
                <div className="container__principal__ranking">
                    <h1 className="title__ranking">RANKING</h1>
                    {ranking.map((player, index) => (
                        <>
                            {player.name !== "" &&
                                <div className="container__results__ranking" key={index}>
                                    <ContainerRanking
                                        placing={index + 1}
                                        name={player.name}
                                        points={player.punctuation}
                                        time={player.time}
                                    />
                                </div>
                            }
                        </>
                    ))}
                    <button className="button__ranking" onClick={() => nav("/rooms")}>Tela principal</button>
                </div>
            }
        </>
    )
}

export default Ranking;
