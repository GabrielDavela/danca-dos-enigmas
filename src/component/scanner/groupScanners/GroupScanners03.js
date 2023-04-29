import { useState } from 'react'
import { group03 } from '../../../assets/group-03/group03'

const GroupScanners03 = ({ target }) => {
  const [selectedAudioIndex, setSelectedAudioIndex] = useState(-1) // -1 = nenhum áudio selecionado

  const audios = [
    new Audio(group03.group_03_document_1),
    new Audio(group03.group_03_document_2),
    new Audio(group03.group_03_document_3),
    new Audio(group03.group_03_document_4),
    new Audio(group03.group_03_document_5),
    new Audio(group03.group_03_document_6),
    new Audio(group03.group_03_document_7),
  ]

  const playAudio = (index) => {
    alert("Entrei aqui")
    setSelectedAudioIndex(index)
    audios[index].play()
  }

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
        {audios.map((audio, index) => (
          <audio key={index} id={`audio-${index}`} src={audio.src} />
        ))}
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity
        mindar-image-target="targetIndex: 0"
        onClick={() => playAudio(0)}
        geometry="primitive: box; height: 1; width: 1; depth: 1"
        material="color: blue"
      ></a-entity>

      <a-entity
        mindar-image-target="targetIndex: 1"
        onClick={() => playAudio(1)}
        geometry="primitive: box; height: 1; width: 1; depth: 1"
        material="color: blue"
      ></a-entity>

      {/* ... e assim por diante para cada alvo de imagem */}

      {selectedAudioIndex >= 0 && (
        <div style={{ position: 'fixed', bottom: 0 }}>
          Tocando áudio {selectedAudioIndex + 1}
        </div>
      )}
    </a-scene>
  )
}

export default GroupScanners03
