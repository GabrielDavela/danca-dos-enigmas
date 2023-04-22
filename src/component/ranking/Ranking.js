import React, { useContext, useEffect } from "react";
import "./Ranking.css";
import ContainerRanking from "./containerRanking/ContainerRanking";
import { getUser, sendResultRanking } from "../../context/GameContext";
import { GameContext } from "../../context/GameContext";

const Ranking = () => {
    const { ranking } = useContext(GameContext)

    useEffect(() => {
        const player = getUser()
        console.log(ranking)
        const playerToRanking = JSON.parse(localStorage.getItem(`${player.color}`))

        sendResultRanking(playerToRanking)
    }, [])

    return (
        <div className="container__principal__ranking">
            <h1 className="title__ranking">RANKING</h1>
            {
                ranking.map((player, index) => {
                    return (
                        <div className="container__results__ranking" key={index}>
                            <ContainerRanking
                                placing={1}
                                name={player.name}
                                points={player.punctuation}
                                time={player.time} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Ranking;
