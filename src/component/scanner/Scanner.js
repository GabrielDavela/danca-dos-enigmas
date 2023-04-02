import React from 'react'
import { Helmet } from "react-helmet";

const Scanner = () => {
    return (
        <div>
            <Helmet>
                <script type='text/javascript' src='https://raw.githack.com/AR-js-org/AR.js/master/aframe/build/aframe-ar.js'></script>
                <script src="https://aframe.io/releases/1.0.4/aframe.min.js"></script>
            </Helmet>
            
            <a-scene class="scene" embedded vr-mode-ui="enabled: false" arjs=" sourceType: webcam; debugUIEnabled: false;">
                <a-assets>
                    <img id="cat" src="./download.jfif" />
                </a-assets>

                <a-image src="./download.jfif" class="clickable" id="catId" position="-4 4 -20" scale="3 3 3"></a-image>
                <a-entity id="rig" cursor>
                    <a-cursor id="cursor" position="0 0 -1" raycaster="objects: .clickable" color="purple" fuse="true" fuse-timeout="99999999999"></a-cursor>
                </a-entity>
            </a-scene>
        </div>
    )
}

export default Scanner