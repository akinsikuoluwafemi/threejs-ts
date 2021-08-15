import React from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere, RoundedBox } from '@react-three/drei';




function App() {
  return (
    <>
      <Canvas >
        {/* <mesh>
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material"/>
        </mesh> */}
        {/* <Box>
          <meshStandardMaterial attach="material"/>

        </Box> */}

        {/* <Plane args={[5, 5]} />
        <Sphere>
          <meshBasicMaterial attach="material" color="hotpink" />
        </Sphere> */}

        <RoundedBox args={[3, 2, 3]} radius={0.05} smoothness={4}
          // {...meshProps}
        >
          <meshPhongMaterial attach="material" color="#f3f3f3" wireframe />
        </RoundedBox>



      </Canvas>
    </>
  );
}

export default App;
