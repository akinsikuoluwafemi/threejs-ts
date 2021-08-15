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
  const [active, setActive] = useState<boolean>(false);



  useFrame(() => {

   return mesh.current!.rotation.x = mesh.current!.rotation.y += 0.01
  
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(e) => setActive(!active)}
      onPointerOver={(e) => setHover(true)}
      onPointerOut={(e) => setHover(false)}

    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'pink' : 'orange' }/>
    
    </mesh>
  )
}



function App() {
  
  
  
  return (
    <>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={ }/>
        
        
        <Box position={[-1.2, 0, 0]} />

       



      </Canvas>
    </>
  );
}

export default App;
