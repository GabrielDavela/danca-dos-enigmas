
import { useState } from 'react';
import { group03 } from '../../../assets/group-03/group03'
import { useEffect } from 'react';

const GroupScanners03 = ({ target }) => {

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

    return (
        <a-scene
            mindar-image={`imageTargetSrc: ${target};`}
            color-space="sRGB"
            renderer="colorManagement: true, physicallyCorrectLights"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false"
            id="target-cards-gp03"
        >
            <a-assets>
                {/* <button id='group_03_document_1' onClick={() => console.log("Eu entrei no áudio 1")}>Audio 1</button> */}
                {/* <audio id="group_03_document_1" autoPlay="false" src={group03.group_03_document_1}></audio> */}
            </a-assets>


            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity mindar-image-target="targetIndex: 0">
                {showButton &&
                    <button id='group_03_document_1' style={{ zIndex: 1800, cursor: "pointer", position: "absolute" }}
                        onClick={() => console.log("Eu entrei no áudio 1")}>Audio 1</button>
                }
                {/* <a-plane src="#group_03_document_1" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0" ></a-plane> */}
            </a-entity>

            <a-entity mindar-image-target="targetIndex: 1">
                {showButton &&
                    <button id='group_03_document_2' style={{ zIndex: 1700, cursor: "pointer", position: "absolute" }}
                        onClick={() => console.log("Eu entrei no áudio 2")}>Audio 2</button>
                }
                {/* <a-plane src="#group_03_document_2" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane> */}
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 2">
                <a-plane src="#group_03_document_3" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 3">
                <a-plane src="#group_03_document_4" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 4">
                <a-plane src="#group_03_document_5" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 5">
                <a-plane src="#group_03_document_6" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 6">
                <a-plane src="#group_03_document_7" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
        </a-scene>
    )
}

export default GroupScanners03