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
  
  
  
  return (
    <>
      <Canvas>

       

        

        
        {/* <OrbitControls /> */}

       



      </Canvas>
    </>
  );
}

export default App;
