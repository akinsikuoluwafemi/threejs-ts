import React, {useRef, useState} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';
import * as three from 'three';

import {  Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';



const Box = (props: JSX.Element) => {
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

    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange' }/>
    
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
