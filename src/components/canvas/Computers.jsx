import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF("/desktop_pc/scene.gltf");

  useEffect(() => {
    if (!scene) {
      console.error("GLTF Model failed to load or is undefined.");
      return;
    }

    console.log("Loaded model:", scene);

    // Traverse the scene to check for invalid geometry
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log("Checking mesh:", child.name);

        // Validate geometry and position attributes
        if (!child.geometry || !child.geometry.attributes.position) {
          console.error(`Mesh ${child.name} has invalid geometry!`);
          return;
        }

        const pos = child.geometry.attributes.position.array;
        for (let i = 0; i < pos.length; i++) {
          if (isNaN(pos[i])) {
            console.error(`NaN found in ${child.name} geometry at index ${i}`);
          }
        }
      }
    });
  }, [scene]);

  if (!scene) {
    return null; // Return early if the scene is not loaded
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -3, -2.5] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow
        receiveShadow
        frustumCulled
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1.2] : [1, 2]}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;