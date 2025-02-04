/* eslint-disable react/no-unknown-property */
import { OrbitControls, useGLTF } from "@react-three/drei"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import CanvasLoader from "./Loader";

const Car = () => {
  const car = useGLTF('./car/scene.gltf');


  return (
    <mesh>
      {/* <hemisphereLight intensity={10} groundColor="black" /> */}
      <pointLight intensity={10} position={[ 2, -0.25, 0 ]} />
      <spotLight 
        position={[ -20, 50, 10 ]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        object={car.scene}
      />
    </mesh>
  )
};

const CarCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{
        position: [20, 3, 5],
        fov: 25, // field of view
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
        />
        <Car />
      </Suspense>
    </Canvas>
  )
}

export default CarCanvas;