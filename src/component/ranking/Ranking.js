import React, { useContext, useEffect, useState } from "react";
import "./Ranking.css";
import ContainerRanking from "./containerRanking/ContainerRanking";
import { getUser, sendResultRanking } from "../../context/GameContext";
import { GameContext } from "../../context/GameContext";

const Ranking = () => {

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
    }, []);

    useEffect(() => {
        if (playerData) {
            localStorage.setItem(`${playerData.color}`, JSON.stringify(playerData));
        }
    }, [playerData]);


    return (
        <>
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
                {/* <button className="button__ranking" onClick={() => nav("/")}>Tela principal</button> */}
            </div>

        </>
    )
}

export default Ranking;
