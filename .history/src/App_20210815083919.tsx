import React, {useRef, useState} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import * as three from 'three';

import {  Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';

interface BoxProps {
  position: any
}

const Box = (props: BoxProps) => {
  const mesh = useRef<three.Mesh>(null);
  const [hovered, setHover] = useState<boolean>(false)

  useFrame(() => {

   return mesh.current!.rotation.x = mesh.current!.rotation.y += 0.01
  
  })

  return (
    <mesh
    
      
      ref={mesh}
    
    
    >
      Box
    </mesh>
  )
}



function App() {
  
  
  
  return (
    <>
      <Canvas
        
      >
        
        
        <Box position={[-1.2, 0, 0]} />

       



      </Canvas>
    </>
  );
}

export default App;
