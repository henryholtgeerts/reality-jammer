import logo from './logo.svg';
import './App.css';
import { memo } from 'react';

function App() {
  return (
    <div className="App">
      <a-scene>
        <a-entity gltf-model="url(./room2.glb)" rotation="0 180 0" position="0.3 0 -1"></a-entity>
        <a-entity environment="preset: default"></a-entity>
      </a-scene>
    </div>
  );
}

export default App;
