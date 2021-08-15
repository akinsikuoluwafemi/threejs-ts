import React, {useRef} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';




function App() {
  
  const mesh = useRef<null>(null)

  useFrame(() => {
    if(mesh.current === null)
  });
  
  return (
    <>
      <Canvas>

        <mesh ref={mesh}>
          <boxBufferGeometry attach="geometry" args={[1, 1]} />
          <meshStandardMaterial attach="material"/>
        </mesh>

        

        
        {/* <OrbitControls /> */}

       



      </Canvas>
    </>
  );
}

export default App;
