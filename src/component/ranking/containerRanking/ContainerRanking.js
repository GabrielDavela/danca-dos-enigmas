import React from "react";
import "./ContainerRanking.css"
const ContainerRanking = ({placing, name, points, time}) => {

    return(
        <>
            <div className="container__ranking">
                <p>{placing}º - {name}</p>
                <p>{points} pontos - {time}</p>
            </div>
        </>
    )
}

export default ContainerRanking;