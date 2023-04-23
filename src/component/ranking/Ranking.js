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
        console.log(ranking);
        const playerData = JSON.parse(localStorage.getItem(`${player.color}`));
        setPlayerToRanking(playerData);
    }, []);

    useEffect(() => {
        sendResultRanking(playerToRanking);
    }, [playerToRanking]);

    return (
        <div className="container__principal__ranking">
            <h1 className="title__ranking">RANKING</h1>
            {
                ranking.map((player, index) => {
                    { console.log(playerToRanking) }
                    if (player === playerToRanking) {
                        return <div className="container__results__ranking" key={index}>
                            <ContainerRanking
                                placing={1}
                                name={playerToRanking[index].name}
                                points={playerToRanking[index].punctuation}
                                time={playerToRanking[index].time} />
                        </div>
                    }
                })
            }

        </div>
    )
}

export default Ranking;
