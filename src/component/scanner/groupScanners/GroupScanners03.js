import { useState } from 'react'
import { group03 } from '../../../assets/group-03/group03'

const GroupScanners03 = ({ target }) => {

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

  // Adicionando estado para controlar a reprodução de áudio
  const [audioPlaying, setAudioPlaying] = useState(null);

  const handleCubeClick = (audio) => {
    console.log("Entre no cube")
    if (audioPlaying) {
      audioPlaying.pause();
    }
    audio.play();
    setAudioPlaying(audio);
  };

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

      <a-camera position="0 0 0" look-controls="enabled: false"></a-camera>

      <a-entity
        mindar-image-target={`targetIndex: 0`}
        geometry="primitive: box; height: 1; width: 1; depth: 1"
        material="color: blue"
        onClick={() => handleCubeClick(document.getElementById(audios[0].id))}
      >
      </a-entity>
      <button onClick={() => handleCubeClick(document.getElementById(audios[0].id))}  style={{zIndex: 1800}}>Clica aqui bro</button>
    </a-scene>
  )
}

export default GroupScanners03
