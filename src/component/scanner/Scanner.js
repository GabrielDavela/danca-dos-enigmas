import React, { useContext, useEffect, useState } from 'react'
import { GameContext, readyPlayer } from '../../context/GameContext'
import "./Scanner.css"


import { targets } from '../../assets/target'
import { firstcards } from "../../assets/first-cards/firstCards"


import GroupScanners01 from './groupScanners/GroupScanners01'
import GroupScanners02 from './groupScanners/GroupScanners02'
import GroupScanners03 from './groupScanners/GroupScanners03'
import GroupScanners04 from './groupScanners/GroupScanners04'


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

    const readyPlayers = () => {
        return readyplayers
    }

    useEffect(() => {
        readyPlayers()
    }, [])

    return (
        <div className='container__scanner'>

            <GroupScanners01 target={targets.target_group01} />
            <GroupScanners02 target={targets.target_group02} />
            <GroupScanners03 target={targets.target_group03} />

            {false &&
                <a-scene
                    mindar-image={`imageTargetSrc: ${targets.first_cards};`}
                    color-space="sRGB"
                    renderer="colorManagement: true, physicallyCorrectLights"
                    vr-mode-ui="enabled: false"
                    device-orientation-permission-ui="enabled: false"
                    id="target-cards"
                >
                    <a-assets>
                        <img id='groupCard01' src={firstcards.carta_grupo01} />
                        <img id='groupCard02' src={firstcards.carta_grupo02} />
                        <img id='groupCard03' src={firstcards.carta_grupo03} />
                        <img id='groupCard04' src={firstcards.carta_grupo04} />


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
