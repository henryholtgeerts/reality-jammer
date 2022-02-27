import './App.css';
import { memo } from 'react';

const App = memo(() => {


  return (
    <div className="App">
      <a-scene cursor="rayOrigin: mouse;" raycaster="objects: [data-raycastable]" fog="type: exponential; color: #294778">
        <a-entity gltf-model="url(./closet-mod.glb)" rotation="0 180 0" position="0.3 0 -0.35">
          <a-entity sound="src: url(./metaverse_vo.mp3); autoplay: false;"></a-entity>
            <a-entity id="lights">
            <a-entity position="0.22 2.35 0.68">
              <a-entity light="type: spot; penumbra: 0.1; intensity: 0.1;" rotation="-90 0 0"></a-entity>
              <a-sphere radius="0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
            </a-entity>
            <a-entity position="0.22 2.35 -0.21">
              <a-entity light="type: spot; penumbra: 0.1; intensity: 0.1;" rotation="-90 0 0"></a-entity>
              <a-sphere radius="0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
            </a-entity>
          </a-entity>
        </a-entity>
        <a-entity id="calculator" visible="false" gltf-model="url(./calculator.glb)" rotation="0 180 0" position="0.1 1.4 -1" rotation="10 -75 30" scale="0.1 0.1 0.1"></a-entity>
        <a-entity id="watch" visible="false" gltf-model="url(./watch.glb)" position="0.2 1.2 -1" rotation="10 -10 30" scale="0.1 0.1 0.1"></a-entity>
        <a-entity id="internet" visible="false" text="value: www;" scale="4 4 4" position="1.8 1.6 -1"></a-entity>
        <a-entity rotation="-15 0 0" id="browser" visible="false">
          <a-plane width="1" height="0.7" color="white" position="0 1.6 -0.6" rotation="0 0 0"></a-plane>
          <a-entity id="wikipedia" visible="true" text="value: Wikipedia.org; color: blue;" scale="2 2 2" position="0.7 1.6 -0.6"></a-entity>
        </a-entity>
        <a-entity id="jamming" visible="false" text="value: From Wikipedia.org - Radio Jamming; side: double;" scale="1 1 1" position="0 1.6 -1" rotation="0 0 5" animation="dur: 4000; loop: true; property: rotation; from: 0 0 15; to: 0 360 15;"></a-entity>
        <a-cylinder id="coins" visible="false" radius="0.2" height="0.02" color="yellow" position="0 1.6 -1" rotation="80 30 0" animation="loop: true; property: rotation; from: 80 30 0; to: 80 190 0;"></a-cylinder>
        <a-entity id="question" visible="true">
          <a-entity text="value: What was the fifth largest data breach in human history?;" scale="1 1 1" position="0 1.5 -1" rotation="0 0 5"></a-entity>
          <a-entity text="value: What was the fifth largest data breach in human history?;" scale="1 1 1" position="0 1.2 -0.3" rotation="0 20 -15"></a-entity>
          <a-entity text="value: What was the fifth largest data breach in human history?;" scale="1 1 1" position="0 1.9 -0.3" rotation="0 -40 -15"></a-entity>
          <a-entity text="value: What was the fifth largest data breach in human history?;" scale="1 1 1" position="0.6 1.5 -1" rotation="0 0 80"></a-entity>
        </a-entity>
        <a-entity id="facebook" visible="false" text="value: Facebook.com;" scale="3 3 3" position="1.1 1.5 -1" rotation="0 0 0"></a-entity>
        <a-entity id="millions" visible="false" text="value: 533 Million Affected;" scale="3 3 3" position="0.9 1.5 -1" rotation="0 0 0"></a-entity>

        <a-box id="box1" visible="false" width="0.5" height="0.5" depth="0.5" position="0 1.6 -1" color="red"></a-box>
        <a-entity id="content" visible="false" text="value: A piece of content!;" scale="2 2 2" position="0.6 1.6 -1" rotation="0 0 0"></a-entity>

        <a-box id="box2" visible="false" width="0.6" height="0.6" depth="0.6" position="0 1.6 -1" color="blue"></a-box>
        <a-entity id="geolocation" visible="false" text="value: Your geolocation records!!;" scale="2 2 2" position="0.6 1.6 -0.8" rotation="0 0 0"></a-entity>

        <a-box id="box3" visible="false" width="0.8" height="0.8" depth="0.8" position="0 1.6 -1" color="green"></a-box>
        <a-entity id="profile" visible="false" text="value: An algorithmic profile of your interests and insecurities!!;" scale="1 1 1" position="0.1 1.6 -0.7" rotation="0 0 0"></a-entity>
        <a-entity id="lookup" visible="false" text="value: Made ya look!!;" scale="2 2 2" position="0.8 2.4 -0.5" rotation="90 0 0"></a-entity>
        <a-sky id="defaultSky" visible="false" src="url(./sky.jpeg)" radius="200"></a-sky>
        <a-box start-button data-raycastable width="0.3" height="0.3" depth="0.3" position="0 1.6 -1" color="yellow"></a-box>
        <a-box width="0.1" height="0.1" depth="0.1" color="red" position="0 0 0"></a-box>
        <a-entity id="environment" visible="false" environment="preset: egypt"></a-entity>
        <a-cylinder id="floor" radius="1.5" height="0.1" color="#6b512c" position="0 0 -0.5"></a-cylinder>
        <a-cylinder id="ceiling" radius="1.5" height="0.1" color="white" position="0 2.85 -0.5"></a-cylinder>
        <a-light id="ambientLight" type="ambient" intensity="0.1"></a-light>
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
          <a-box width="0.3" height="0.3" depth="0.3" position="-0.4 1.6 -0.7" color="yellow" rotation="33 0 12"></a-box>
        </a-entity>
        <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
        <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
      </a-scene>
    </div>
  );
})
export default App;
