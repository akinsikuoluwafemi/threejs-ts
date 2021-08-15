import React, {useRef} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import { Box, Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';


const Box = () => {
  return (
        <mesh ref={mesh}>
              <boxBufferGeometry attach="geometry" args={[1, 1]} />
              <meshStandardMaterial attach="material"/>
            </mesh>
  )
}


function App() {
  
  const mesh = useRef<null>(null)

  useFrame(() => {
    if (mesh.current) {
      return mesh.current.rotation.x = mesh.current.rotation.y += 0.01

    } 
  });
  
  return (
    <>
      <Canvas>

       

        

        
        {/* <OrbitControls /> */}

       



      </Canvas>
    </>
  );
}

export default App;
