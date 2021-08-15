import React, {useRef} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';




function App() {
  
  const mesh = useRef<JSX.IntrinsicElements.mesh |>(null)

  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  
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
