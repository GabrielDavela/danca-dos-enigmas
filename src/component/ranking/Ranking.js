import React, { useContext, useEffect, useState } from "react";
import "./Ranking.css";
import ContainerRanking from "./containerRanking/ContainerRanking";
import { getUser, sendResultRanking } from "../../context/GameContext";
import { GameContext } from "../../context/GameContext";

const Ranking = () => {
    const { ranking } = useContext(GameContext)

    const [playerToRanking, setPlayerToRanking] = useState({})

    useEffect(() => {
        const player = getUser();
        const playerData = JSON.parse(localStorage.getItem(`${player.color}`));
        setPlayerToRanking(playerData);
        if (playerData) {
            const updatedPlayerToRanking = playerData;
            sendResultRanking(updatedPlayerToRanking);
        }
    }, []);
    

    return (
        <div className="container__principal__ranking">
            <h1 className="title__ranking">RANKING</h1>
            {ranking.map((player, index) => (
                <div className="container__results__ranking" key={index}>
                    <ContainerRanking
                        placing={index + 1}
                        name={player.name}
                        points={player.punctuation}
                        time={player.time}
                    />
                </div>
            ))}
        </div>
    )
}

export default Ranking;
