import React from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere } from '@react-three/drei';




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

        <Plane args={[2, 2]} />
<Sphere>
  <meshBasicMaterial attach="material" color="hotpink" />
</Sphere>


      </Canvas>
    </>
  );
}

export default App;
