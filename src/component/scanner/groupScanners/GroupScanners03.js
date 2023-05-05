import { useRef, useState } from 'react'
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
    }
  ]

  const [audioPlaying, setAudioPlaying] = useState(null);

  const handleAudioButtonClick = (targetIndex) => {
    const audio = document.getElementById(audios.find((item) => item.targetIndex === targetIndex).id);
    if (audioPlaying) {
      audio.pause();
    }
    audio.play();
    setAudioPlaying(audio);
  };

  const sceneRef = useRef(null);

  useEffect(() => {
    const sceneEl = sceneRef.current;
    return () => {
      sceneEl.innerHTML = '';
    };
  }, []);

  return (
    <>
      <a-scene
        ref={sceneRef}
        mindar-image={`imageTargetSrc: ${target};`}
        color-space="sRGB"
        renderer="colorManagement: true, physicallyCorrectLights"
        vr-mode-ui="enabled: false"
        interaction="enabled"
        device-orientation-permission-ui="enabled: false"
        id="target-cards-gp03"
      >
        <a-assets>
          {audios.map((audio, index) => (
            <audio key={index} id={audio.id} src={audio.src} autoPlay={false} />
          ))}
        </a-assets>

        <a-camera cursor raycaster="far: 100cm; objects: .clickable" id="camera" look-controls>
          <a-cursor id="cursor" color="black" fuse="true" fuse-timeout="500"></a-cursor>
        </a-camera>

        {audios.map((audio, index) => (
          <a-entity
            click-listener
            className="clickable"
            raycaster="objects: .clickable"
            onClick={() => handleAudioButtonClick(audio.targetIndex)}
            onTouchStart={() => handleAudioButtonClick(audio.targetIndex)}
            key={index}
            mindar-image-target={`targetIndex: ${audio.targetIndex}`}
          >
            <a-plane
              position="0 0 0"
              height="0.4"
              width="0.8"
              rotation="0 0 0"
              material="color: yellow"
              text={`value: ${audio.id}; color: black; align: center`}
            >
            </a-plane>
          </a-entity>
        ))}
      </a-scene>
    </>
  );
}

export default GroupScanners03
