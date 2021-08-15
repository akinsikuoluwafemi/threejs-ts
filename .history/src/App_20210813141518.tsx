import React, {useRef} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import {  Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';


const Box = () => {
  
  const mesh = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (!mesh.current) {
      return
    }
    mesh.current.rotation.x = mesh.current.rotation.y += 0.01
    
  });
  
  return (
        <mesh ref={mesh}>
              <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
              <meshStandardMaterial attach="material" color="pink"/>
        </mesh>
  )
}


function App() {
  
  
  
  return (
    <>
      <Canvas >
        <ambientLight intensity={1} />
       

        <Box/>

        
        {/* <OrbitControls /> */}

       



      </Canvas>
    </>
  );
}

export default App;
