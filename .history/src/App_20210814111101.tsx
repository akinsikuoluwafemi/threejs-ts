import React, {useRef} from 'react';
import './App.scss';
import { Canvas, useFrame } from '@react-three/fiber';

import {  Plane, Sphere, RoundedBox, ScreenQuad,OrbitControls } from '@react-three/drei';





function App() {
  
  
  
  return (
    <>
      <Canvas
        
      >
        
        <ambientLight intensity={1} />
       

        <Box/>

        
        {/* <OrbitControls /> */}

       



      </Canvas>
    </>
  );
}

export default App;
