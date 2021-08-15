import React from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere, RoundedBox, Or } from '@react-three/drei';




function App() {
  return (
    <>
      <Canvas >
        {/* <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material"/>
        </mesh> */}
        <Box>
          <meshStandardMaterial attach="material"/>

        </Box>

        
        <OrbitControls />

       



      </Canvas>
    </>
  );
}

export default App;
