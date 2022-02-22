import './App.css';
import { memo } from 'react';

const App = memo(() => {
  return (
    <div className="App">
      <a-scene vr-mode-ui="enabled: true;">
        <a-entity gltf-model="url(./room2.glb)" rotation="0 180 0" position="0.3 0 -1"></a-entity>
        <a-entity light="type: spot; penumbra: 0.1; intensity: 0.2;" position="0.08 2.2 -0.05" rotation="-90 0 0"></a-entity>
        <a-entity light="type: spot; penumbra: 0.1; intensity: 0.2;" position="0.08 2.35 -1.68" rotation="-90 0 0"></a-entity>
        <a-sphere radius="0.05" position="0.08 2.35 -1.68" color="white" material="color: #fff; shader: flat;"></a-sphere>
        <a-sphere radius="0.05" position="0.08 2.2 -0.05" color="white" material="color: #fff; shader: flat;"></a-sphere>
        <a-entity environment="preset: egypt"></a-entity>
      </a-scene>
    </div>
  );
})

export default App;
