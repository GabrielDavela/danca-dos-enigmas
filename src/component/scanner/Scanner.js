import React, { useContext, useEffect, useState } from 'react'
import "./Scanner.css"

import target from '../../assets/first-cards/first-cards.mind'
import carta_grupo01 from '../../assets/first-cards/documents/targets-gp-01.mind'
import carta_grupo02 from '../../assets/first-cards/documents/carta-grupo-02.png'
import carta_grupo03 from '../../assets/first-cards/documents/carta-grupo-03.png'
import carta_grupo04 from '../../assets/first-cards/documents/carta-grupo-04.png'
import { GameContext, readyPlayer } from '../../context/GameContext'


const Scanner = ({ player }) => {

    const [showButton, setShowButton] = useState(false)
    const [disabled, setDisabled] = useState(false)
    const { readyplayers } = useContext(GameContext)

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

    const funcao = () => {
        return readyplayers
    }

    useEffect(() => {
        funcao()
    }, [])

    return (
        <div className='container__scanner'>
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
        </div>
    )
}

export default Scanner
