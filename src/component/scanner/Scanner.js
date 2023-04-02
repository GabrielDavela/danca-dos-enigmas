import React from 'react'
const Scanner = () => {
    return (
        <div style={{height: '100vh'}}>
            <a-scene mindar-image="imageTargetSrc: ../../targets.mind;" color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
                <a-assets>
                    <img id="card" crossorigin="anonymous" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/card-example/card.png" />
                    <a-asset-item id="avatarModel" src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/card-example/softmind/scene.gltf"></a-asset-item>
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
