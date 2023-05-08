
import { useEffect, useContext, useState, useRef } from "react";
import { firstcards } from "../../../assets/first-cards/firstCards";
import { GameContext, readyPlayer } from "../../../context/GameContext";

const FirstCard = ({ target, player }) => {
    const { readyplayers } = useContext(GameContext);

    const [disabled, setDisabled] = useState(false);
    const [showButton, setShowButton] = useState(false);

    // useEffect(() => {
    //     const targetFoundHandler = () => setShowButton(true);
    //     const targetLostHandler = () => setShowButton(false);

    //     document.addEventListener("targetFound", targetFoundHandler);
    //     document.addEventListener("targetLost", targetLostHandler);

    //     return () => {
    //         document.removeEventListener("targetFound", targetFoundHandler);
    //         document.removeEventListener("targetLost", targetLostHandler);
    //     };
    // }, []);

    const onReady = () => {
        setDisabled(true);
        readyPlayer(true);
    };

    return (
        <div className="container__image__firstCards">
            {/* <a-scene
                mindar-image={`imageTargetSrc: ${target};`}
                color-space="sRGB"
                renderer="colorManagement: false, physicallyCorrectLights"
                vr-mode-ui="enabled: false"
                device-orientation-permission-ui="enabled: false"
                id="target-first-cards"
            >
                <a-assets>
                    <img id="first-cards-group_01" src={firstcards.carta_grupo01} />
                    <img id="first-cards-group_02" src={firstcards.carta_grupo02} />
                    <img id="first-cards-group_03" src={firstcards.carta_grupo03} />
                    <img id="first-cards-group_04" src={firstcards.carta_grupo04} />
                </a-assets>

                <a-camera position="0 0 0" look-controls="enabled: false" fov="80"></a-camera>

                {player.color.toLowerCase() === "vermelho" && (
                    <a-entity mindar-image-target="targetIndex: 0">
                        <a-plane
                            src="#first-cards-group_01"
                            position="0 0 0"
                            height="2.3"
                            width="1.6"
                            rotation="0 0 0"
                        ></a-plane>
                    </a-entity>
                )}

                {player.color.toLowerCase() === "azul" && (
                    <a-entity mindar-image-target="targetIndex: 1">
                        <a-plane
                            src="#first-cards-group_02"
                            position="0 0 0"
                            height="2.3"
                            width="1.6"
                            rotation="0 0 0"
                        ></a-plane>
                    </a-entity>
                )}

                {player.color.toLowerCase() === "amarelo" && (
                    <a-entity mindar-image-target="targetIndex: 2">
                        <a-plane
                            src="#first-cards-group_03"
                            position="0 0 0"
                            height="2.3"
                            width="1.6"
                            rotation="0 0 0"
                        ></a-plane>
                    </a-entity>
                )}

                {player.color.toLowerCase() === "verde" && (
                    <a-entity mindar-image-target="targetIndex:3">
                        <a-plane
                            src="#first-cards-group_04"
                            position="0 0 0"
                            height="2.3"
                            width="1.6"
                            rotation="0 0 0"
                        ></a-plane>
                    </a-entity>
                )} */}

            {player.color === "Vermelho" &&
                <img src={firstcards.carta_grupo01} style={{ height: "80vh", width: "30%", marginBottom: "3.5rem" }} />
            }
            {player.color === "Azul" &&
                <img src={firstcards.carta_grupo02} style={{ height: "80vh", width: "30%", marginBottom: "3.5rem" }} />
            }
            {player.color === "Amarelo" &&
                <img src={firstcards.carta_grupo03} style={{ height: "80vh", width: "30%", marginBottom: "3.5rem" }} />
            }
            {player.color === "Verde" &&
                <img src={firstcards.carta_grupo04} style={{ height: "80vh", width: "30%", marginBottom: "3.5rem" }} />
            }


            <button className='button__scanner'
                onClick={onReady}
                disabled={disabled}
            >Pronto<span>{readyplayers}/4</span>
            </button>

            {/* </a-scene> */}
        </div>
    )
}

export default FirstCard;