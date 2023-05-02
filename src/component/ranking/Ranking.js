import React, { useContext, useEffect, useState } from "react";
import "./Ranking.css";
import ContainerRanking from "./containerRanking/ContainerRanking";
import Feedback from "../feedback/Feedback";
import { getUser, sendResultRanking, waitingPlayer } from "../../context/GameContext";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const Ranking = () => {

    const nav = useNavigate()

    const { ranking } = useContext(GameContext)
    const [playerData, setPlayerData] = useState(null);

    useEffect(() => {
        const player = getUser();
        const storedPlayerData = JSON.parse(localStorage.getItem(`${player.color}`));
        if (storedPlayerData) {
            const updatedPlayerToRanking = storedPlayerData;
            sendResultRanking(updatedPlayerToRanking);
            setPlayerData(updatedPlayerToRanking);
        }
        // if (!showRanking) {
        //     waitingPlayer();
        // }
    }, []);

    useEffect(() => {
        if (playerData) {
            localStorage.setItem(`${playerData.color}`, JSON.stringify(playerData));
        }
    }, [playerData]);


    return (
        <>
            {/* {!showRanking && playerData !== null &&
                <Feedback playerData={playerData} />
            } */}

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
                <button className="button__ranking" onClick={() => nav("/")}>Tela principal</button>
            </div>

        </>
    )
}

export default Ranking;
