import React from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { B} from '@react-three/drei';




function App() {
  return (
    <>
      <Canvas >
        <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material"/>
        </mesh>

      </Canvas>
    </>
  );
}

export default App;
