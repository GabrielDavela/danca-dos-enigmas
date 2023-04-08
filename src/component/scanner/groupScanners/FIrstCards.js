
import { useEffect, useContext, useState } from "react";
import { firstcards } from "../../../assets/first-cards/firstCards";
import { GameContext, readyPlayer } from "../../../context/GameContext";

const FirstCards = ({ target, player }) => {
    const { readyplayers } = useContext(GameContext);

    const [disabled, setDisabled] = useState(false);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const targetFoundHandler = () => setShowButton(true);
        const targetLostHandler = () => setShowButton(false);

        document.addEventListener("targetFound", targetFoundHandler);
        document.addEventListener("targetLost", targetLostHandler);

        return () => {
            document.removeEventListener("targetFound", targetFoundHandler);
            document.removeEventListener("targetLost", targetLostHandler);
        };
    }, []);

    const onReady = () => {
        setDisabled(true);
        readyPlayer();
    };

    return (
        <>
            <a-scene
                mindar-image={`imageTargetSrc: ${target};`}
                color-space="sRGB"
                renderer="colorManagement: true, physicallyCorrectLights"
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

                <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

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
                )}
                <button className='button__scanner'
                    onClick={onReady} disabled={disabled}>
                    Pronto<span>{readyplayers}/4</span>
                </button>
            </a-scene>


        </>
    )
}

export default FirstCards;