import React, {useRef} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import {  Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';


const Box = () => {
  
  const mesh = useRef<THREE.Mesh>>(null)

  useFrame(() => {
    if (mesh.current !== null) {
      return mesh.current.rotation.x = mesh.current.rotation.y += 0.01

    } 
  });

  
  return (
        <mesh ref={mesh}>
              <boxBufferGeometry attach="geometry" args={[1, 1]} />
              <meshStandardMaterial attach="material"/>
        </mesh>
  )
}


function App() {
  
  
  
  return (
    <>
      <Canvas>

       

        <Box/>

        
        {/* <OrbitControls /> */}

       



      </Canvas>
    </>
  );
}

export default App;
