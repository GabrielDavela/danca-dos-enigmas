import React from 'react'
import target from '../../assets/targets.mind'
import carta_grupo1 from '../../assets/carta01.png'

const Scanner = () => {
    return (
        <div style={{height: '100vh'}}>
            <a-scene crossorigin="anonymous" mindar-image={`imageTargetSrc: ${target};`} color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
                <a-assets>
                    <img id="card" crossorigin="anonymous" src={carta_grupo1} />
                </a-assets>

                <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>
                <a-entity mindar-image-target="targetIndex: 0">
                    <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
                </a-entity>
            </a-scene>
        </div>
    )
}

export default Scanner
