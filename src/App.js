import './App.css';
import { memo } from 'react';

const App = memo(() => {


  return (
    <div className="App">
      <a-scene cursor="rayOrigin: mouse">
        <a-entity gltf-model="url(./closet-mod.glb)" rotation="0 180 0" position="0.3 0 -0.35">
          <a-entity sound="src: url(./voiceover.mp3); autoplay: false;"></a-entity>
            <a-entity id="lights">
            <a-entity position="0.22 2.35 0.68">
              <a-entity light="type: spot; penumbra: 0.1; intensity: 0.2;" rotation="-90 0 0"></a-entity>
              <a-sphere radius="0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
            </a-entity>
            <a-entity position="0.22 2.35 -0.21">
              <a-entity light="type: spot; penumbra: 0.1; intensity: 0.2;" rotation="-90 0 0"></a-entity>
              <a-sphere radius="0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-box start-button width="0.3" height="0.3" depth="0.3" position="0 1.6 -1" color="yellow"></a-box>
        <a-box width="0.1" height="0.1" depth="0.1" color="red" position="0 0 0"></a-box>
        <a-entity id="environment" visible="false" environment="preset: egypt"></a-entity>
        <a-cylinder id="floor" radius="1.5" height="0.1" color="#6b512c" position="0 0 -0.5"></a-cylinder>
        <a-cylinder id="ceiling" radius="1.5" height="0.1" color="white" position="0 2.85 -0.5"></a-cylinder>
        <a-light id="ambientLight" type="ambient" intensity="0.6"></a-light>
        <a-entity id="doors" animation__selldoors="property: visible; from: true; to: false; autoplay: false; startEvents: selldoors">
          <a-box id="backdoor" width="1" height="2.6" depth="0.05" position="-0.1 1 0.63"></a-box>
          <a-box id="sidedoor" width="1" height="2.6" depth="0.05" position="-0.72 1 -0.6" rotation="0 90 0"></a-box>
        </a-entity>
        <a-camera position="0 1.6 0">
        </a-camera>
        <a-entity 
          id="friends"
          visible="false"
          animation__showfriends="property: visible; from: false; to: true; autoplay: false; startEvents: showfriends"
          animation__hidefriends="property: visible; from: true; to: false; autoplay: false; startEvents: hidefriends">
          <a-cone color="red" height="0.6" radius-bottom="0.2" position="0.4 1.6 -0.7" rotation="-11 22 -22"></a-cone>
          <a-sphere color="blue" radius="0.3" position="0 1.6 -1.2"></a-sphere>
          <a-box start-button width="0.3" height="0.3" depth="0.3" position="-0.4 1.6 -0.7" color="yellow" rotation="33 0 12"></a-box>
        </a-entity>
        <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
        <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
      </a-scene>
    </div>
  );
})
export default App;
