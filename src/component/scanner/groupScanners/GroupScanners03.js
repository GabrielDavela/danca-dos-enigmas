import { useState } from 'react'
import { group03 } from '../../../assets/group-03/group03'

const GroupScanners03 = ({ target }) => {
  const [selectedAudioIndex, setSelectedAudioIndex] = useState({
    index: -1, // -1 = nenhum áudio selecionado
    cardDetected: false // flag para indicar se um card foi detectado
  })

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
    alert(index)
    setSelectedAudioIndex({ index, cardDetected: true })
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
        style={{zIndex: 1800}}
        geometry="primitive: box; height: 1; width: 1; depth: 1"
        material="color: blue"
      >
      </a-entity>

      <a-entity
        mindar-image-target="targetIndex: 1"
        onClick={() => playAudio(1)}
        geometry="primitive: box; height: 1; width: 1; depth: 1"
        material="color: blue"
      ></a-entity>

      {/* Adicione um botão que só deve ser exibido quando um card for detectado */}
      <a-entity
        visible={selectedAudioIndex.cardDetected}
        onClick={() => audios[selectedAudioIndex.index].play()}
        style={{ position: 'fixed', bottom: 0, zIndex: 1900 }}
      >
        <button>Tocar áudio {selectedAudioIndex.index + 1}</button>
      </a-entity>
    </a-scene>
  )
}

export default GroupScanners03
