import React from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';




function App() {
  return (
    <>
      <Canvas>

        <mesh>
          <circleBufferGeometry attach="geometry" args={[2, 50]} />
          <meshStandardMaterial attach="material"/>
        </mesh>

        

        
        <OrbitControls />

       



      </Canvas>
    </>
  );
}

export default App;
