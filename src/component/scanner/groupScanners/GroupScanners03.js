import { useState } from 'react'
import { group03 } from '../../../assets/group-03/group03'

const GroupScanners03 = ({ target }) => {
  const [selectedAudioIndex, setSelectedAudioIndex] = useState(-1)

  const audios = [
    {
      id: 'audio-1',
      src: group03.group_03_document_1,
      targetIndex: 0
    },
    {
      id: 'audio-2',
      src: group03.group_03_document_2,
      targetIndex: 1
    },
    {
      id: 'audio-3',
      src: group03.group_03_document_3,
      targetIndex: 2
    },
    {
      id: 'audio-4',
      src: group03.group_03_document_4,
      targetIndex: 3
    },
    {
      id: 'audio-5',
      src: group03.group_03_document_5,
      targetIndex: 4
    },
    {
      id: 'audio-6',
      src: group03.group_03_document_6,
      targetIndex: 5
    },
    {
      id: 'audio-7',
      src: group03.group_03_document_7,
      targetIndex: 6
    },
  ]

  const playAudio = (index) => {
    alert()
    console.log("Entrei no play audio ", index)
    setSelectedAudioIndex(index)
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
          <audio key={index} id={audio.id} src={audio.src} />
        ))}
      </a-assets>

      <a-camera position="0 0 0" look-controls="enabled: false">
        <a-cursor></a-cursor>
      </a-camera>

      {audios.map((audio, index) => (
        <a-entity
          key={index}
          mindar-image-target={`targetIndex: ${audio.targetIndex}`}
          geometry="primitive: box; height: 1; width: 1; depth: 1"
          material="color: blue"
          event-set__touchstart="_event: touchstart; _target: #audio-player; _setAttribute: visible true"
        >
          {selectedAudioIndex === index && (
            <a-sound
              src={`#${audio.id}`}
              autoplay="true"
              position="0 0 0"
              id="audio-player"
              visible="false"
            />
          )}
        </a-entity>
      ))}

      {selectedAudioIndex >= 0 && (
        <div style={{ position: 'fixed', bottom: 0, zIndex: 1900 }}>
          Tocando áudio {selectedAudioIndex + 1}
        </div>
      )}
    </a-scene>
  )
}

export default GroupScanners03
