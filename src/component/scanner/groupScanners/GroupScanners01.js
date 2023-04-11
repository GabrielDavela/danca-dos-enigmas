
import { group01 } from '../../../assets/group-01/group01'

const GroupScanners01 = ({ target }) => {

    // document.addEventListener("targetFound", () => alert("Encontrei algo do vermelho"));

    return (
        <a-scene
            mindar-image={`imageTargetSrc: ${target};`}
            color-space="sRGB"
            renderer="colorManagement: true, physicallyCorrectLights"
            vr-mode-ui="enabled: false"
            device-orientation-permission-ui="enabled: false"
            id="target-cards-gp01"
        >
            <a-assets>
                <img id='group_01_document_1' src={group01.group_01_document_1} />
                <img id='group_01_document_2' src={group01.group_01_document_2} />
                <img id='group_01_document_3' src={group01.group_01_document_3} />
                <img id='group_01_document_4' src={group01.group_01_document_4} />
                <img id='group_01_document_5' src={group01.group_01_document_5} />
                <img id='alfabeto' src={group01.alfabeto} />
            </a-assets>

            <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

            <a-entity mindar-image-target="targetIndex: 0">
                <a-plane src="#group_01_document_1" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 1">
                <a-plane src="#group_01_document_2" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 2">
                <a-plane src="#group_01_document_3" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 3">
                <a-plane src="#group_01_document_4" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 4">
                <a-plane src="#group_01_document_5" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
            <a-entity mindar-image-target="targetIndex: 5">
                <a-plane src="#alfabeto" position="0 0 0" height="2.3" width="1.6" rotation="0 0 0"></a-plane>
            </a-entity>
        </a-scene>
    )
}

export default GroupScanners01