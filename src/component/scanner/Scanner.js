import React, { useContext, useEffect, useState } from 'react'
import { GameContext, readyPlayer } from '../../context/GameContext'
import "./Scanner.css"

<<<<<<< Updated upstream
// target principal
import target from '../../assets/first-cards/first-cards.mind'

// cartas de introdução 
import carta_grupo01 from '../../assets/first-cards/documents/carta-grupo-01.png'
import carta_grupo02 from '../../assets/first-cards/documents/carta-grupo-02.png'
import carta_grupo03 from '../../assets/first-cards/documents/carta-grupo-03.png'
import carta_grupo04 from '../../assets/first-cards/documents/carta-grupo-04.png'

// targets das pistas de cada grupo
import targetGp01 from "../../assets/group-01/target/targets-gp-01.mind"

// imagens das pistas do grupo 01
import pista01Gp01 from "../../assets/group-01/pistas/pista-01-criptografiaP.png"

import { GameContext, readyPlayer } from '../../context/GameContext'
=======
import { targets } from '../../assets/target'
import { firstcards } from "../../assets/first-cards/firstCards"
import { group01 } from '../../assets/group-01/group01'
import { group02 } from '../../assets/group-02/group02'
import { group03 } from '../../assets/group-03/group03'
import { group04 } from "../../assets/group-04/group04"
>>>>>>> Stashed changes


const Scanner = ({ player }) => {

    const [showButton, setShowButton] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { readyplayers } = useContext(GameContext)

    const test = true;

    document.addEventListener("targetFound", () => {
        setShowButton(true)
    })

    document.addEventListener("targetLost", () => {
        setShowButton(false)
    })

    const ready = () => {
        setDisabled(true)
        readyPlayer()
    }

    const readyPlayers = () => {
        return readyplayers
    }

    useEffect(() => {
        console.log(group01.group_01_document_1)
        console.log(group02.group_02_document_1)
        console.log(group03.group_03_document_1)
        console.log(group04.group_04_document_1)
        readyPlayers()
    }, [])

    return (
        <div className='container__scanner'>
            <a-scene
<<<<<<< Updated upstream
                mindar-image={`imageTargetSrc: ${targetGp01};`}
=======
                mindar-image={`imageTargetSrc: ${targets.first_cards};`}
>>>>>>> Stashed changes
                color-space="sRGB"
                renderer="colorManagement: true, physicallyCorrectLights"
                vr-mode-ui="enabled: false"
                device-orientation-permission-ui="enabled: false"
                id="target-cards-gp01"
            >
                <a-assets>
<<<<<<< Updated upstream
                    <img id='pista01Gp01' src={pista01Gp01} />
=======
                    <img id='groupCard01' src={firstcards.carta_grupo01} />
                    <img id='groupCard02' src={firstcards.carta_grupo02} />
                    <img id='groupCard03' src={firstcards.carta_grupo03} />
                    <img id='groupCard04' src={firstcards.carta_grupo04} />


>>>>>>> Stashed changes
                </a-assets>

                <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

                <a-entity mindar-image-target="targetIndex: 0">
                    <a-plane src="#pista01Gp01" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
                </a-entity>

            </a-scene>

            {false &&
                <a-scene
                    mindar-image={`imageTargetSrc: ${target};`}
                    color-space="sRGB"
                    renderer="colorManagement: true, physicallyCorrectLights"
                    vr-mode-ui="enabled: false"
                    device-orientation-permission-ui="enabled: false"
                    id="target-cards"
                >
                    <a-assets>
                        <img id='groupCard01' src={carta_grupo01} />
                        <img id='groupCard02' src={carta_grupo02} />
                        <img id='groupCard03' src={carta_grupo03} />
                        <img id='groupCard04' src={carta_grupo04} />


                    </a-assets>

                    <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
                    {player.color.toLowerCase() === "vermelho" &&
                        <a-entity mindar-image-target="targetIndex: 0">
                            <a-plane src="#groupCard01" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
                        </a-entity>
                    }

                    {player.color.toLowerCase() === "azul" &&
                        <a-entity mindar-image-target="targetIndex: 1">
                            <a-plane src="#groupCard02" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
                        </a-entity>
                    }

                    {player.color.toLowerCase() === "amarelo" &&
                        <a-entity mindar-image-target="targetIndex: 2">
                            <a-plane src="#groupCard03" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
                        </a-entity>
                    }

                    {player.color.toLowerCase() === "verde" &&
                        <a-entity mindar-image-target="targetIndex: 3">
                            <a-plane src="#groupCard04" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
                        </a-entity>
                    }

                    {!showButton &&
                        <button className='button__scanner'
                            onClick={ready} disabled={disabled}>Pronto<span>{readyplayers}/4</span></button>
                    }
                </a-scene>
            }

        </div>
    )
}

export default Scanner
