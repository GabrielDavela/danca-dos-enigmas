import { useState } from 'react'
import { group03 } from '../../../assets/group-03/group03'

const GroupScanners03 = ({ target }) => {

  const audios = [
    new Audio(group03.group_03_document_1),
    new Audio(group03.group_03_document_2),
    new Audio(group03.group_03_document_3),
    new Audio(group03.group_03_document_4),
    new Audio(group03.group_03_document_5),
    new Audio(group03.group_03_document_6),
    new Audio(group03.group_03_document_7),
  ]

  const [audioIndex, setAudioIndex] = useState(null)

  const handleClick = (index) => {
    // Pausa a reprodução do áudio atual, se houver
    if (audioIndex !== null) {
      audios[audioIndex].pause()
    }

    // Reproduz o áudio correspondente
    audios[index].play()

    // Atualiza o estado para armazenar o índice do áudio que está sendo reproduzido
    setAudioIndex(index)
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

      <a-entity mindar-image-target="targetIndex: 0"></a-entity>

      {[2, 3, 4, 5, 6, 7].map((index) => (
        <div key={index}>
          <a-plane
            src={`#group_03_document_${index}`}
            position="0 0 0"
            height="2.3"
            width="1.6"
            rotation="0 0 0"
          ></a-plane>

          {/* Renderiza um botão para cada card que, ao ser clicado, reproduz o áudio correspondente */}
          <button onClick={() => handleClick(index - 2)} style={{position: "absolute", zIndex: 1800}}>Reproduzir áudio</button>
        </div>
      ))}
    </a-scene>
  )
}

export default GroupScanners03
