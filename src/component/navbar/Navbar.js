import React from "react";
import "./Navbar.css";
import lifeImg from "../../assets/screens/life.png";
import lifeLostImg from "../../assets/screens/life_lost.png";
import timerImg from "../../assets/screens/timer.png";

const Navbar = ({ timer, points, group }) => {
    return (
        <div className="container__principal__navbar">
            <div className="container__timer">
                <p>{timer}</p>
                <img src={timerImg} />
            </div>
            <div className="container__group">
                <p>{group}</p>
            </div>
            <div className="container__points">
                <p className="informations__navbar">{points}</p>
                <img src={lifeImg} />
                {/* {
                    lifeLostImg &&
                    <img src={lifeLostImg} />
                } */}
            </div>
        </div>
    )
}

export default Navbar; 