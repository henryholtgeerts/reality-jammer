import './App.css';
import { memo } from 'react';

const App = memo(() => {
  return (
    <div className="App">
      <a-scene>
        <a-entity gltf-model="url(./closet.glb)" rotation="0 180 0" position="0.95 0 -0.95"></a-entity>
        <a-entity position="0.73 2.35 -0.74">
          <a-entity light="type: spot; penumbra: 0.1; intensity: 0.2;" rotation="-90 0 0"></a-entity>
          <a-sphere radius="0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
        </a-entity>
        <a-entity position="0.73 2.35 -1.63">
          <a-entity light="type: spot; penumbra: 0.1; intensity: 0.2;" rotation="-90 0 0"></a-entity>
          <a-sphere radius="0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
        </a-entity>
        <a-entity environment="preset: egypt"></a-entity>
        <a-camera position="0 1.6 0"></a-camera>
        <a-entity id="leftHand" hand-controls="hand: left; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
        <a-entity id="rightHand" hand-controls="hand: right; handModelStyle: lowPoly; color: #ffcccc"></a-entity>
      </a-scene>
    </div>
  );
})

export default App;
