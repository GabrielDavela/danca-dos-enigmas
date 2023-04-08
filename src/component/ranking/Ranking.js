import React from "react";
import "./Ranking.css";
import ContainerRanking from "./containerRanking/ContainerRanking";

const Ranking = () => {

    return(
        <div className="container__principal__ranking">
            <h1 className="title__ranking">RANKING</h1>
            <div className="container__results__ranking">
                <ContainerRanking
                placing={1}
                name={"nome"}
                points={50}
                time={"12:00"}/>
            </div>
            <div className="container__results__ranking">
                <ContainerRanking
                placing={2}
                name={"nome"}
                points={40}
                time={"13:00"}/>
            </div>
            <div className="container__results__ranking">
                <ContainerRanking
                placing={3}
                name={"nome"}
                points={30}
                time={"14:00"}/>
            </div>
            <div className="container__results__ranking">
                <ContainerRanking
                placing={4}
                name={"nome"}
                points={20}
                time={"15:00"}/>
            </div>
        </div>
    )
}

export default Ranking; 