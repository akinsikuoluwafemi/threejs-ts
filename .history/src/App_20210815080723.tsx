import React, {useRef, useState} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import {  Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';


const Box = (props: JSX.IntrinsicElements.mesh) => {
  const mesh = useRef<THREE.Mesh>(null);
  const [hovered, setHover] = useState(false)

  useFrame(() => {

   return mesh.current!.rotation.x = mesh.current!.rotation.y += 0.01
  
  })

  return (
    <mesh

      {...props}
      
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
        
        
        <Box/>

       



      </Canvas>
    </>
  );
}

export default App;
