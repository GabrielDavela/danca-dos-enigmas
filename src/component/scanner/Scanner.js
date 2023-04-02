import React from 'react'
import { Helmet } from "react-helmet";

const Scanner = () => {
    return (
        <div>
            <Helmet>
                <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/dist/mindar-image.prod.js"></script>
                <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>
                <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/dist/mindar-image-aframe.prod.js"></script>

            </Helmet>

            <a-scene mindar-image="imageTargetSrc: https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.2.1/examples/image-tracking/assets/card-example/card.mind; autoStart: false;" embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights" vr-mode-ui="enabled: false" device-orientation-permission-ui="enabled: false">
                <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 1.2.1; objects: .clickable"></a-camera>

                <a-entity id="example-target" mindar-image-target="targetIndex: 0">
                    <a-plane id="example-plane" class="clickable" color="blue" opaciy="0.5" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
                </a-entity>
            </a-scene>
        </div>
    )
}

export default Scanner