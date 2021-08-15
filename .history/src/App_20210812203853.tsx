import React from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';




function App() {
  return (
    <>
      <Canvas >
        <mesh>
          <boxBufferGeometry attach="geometry" args={ }/>
        </mesh>

      </Canvas>
    </>
  );
}

export default App;
