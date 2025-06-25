import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef } from "react";

function Model() {
  const { scene } = useGLTF("/models/girl.glb");
  const modelRef = useRef();

  // Rotate the model continuously
  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.0005; // Adjust speed if needed
    }
  });

  return (
    <group ref={modelRef} position={[0, -7.5, 0]} scale={8.8}>
      <primitive object={scene} />
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas style={{ height: "100vh" }} camera={{ position: [4, 2, 5], fov: 50 }}>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 5, 2]} intensity={1.2} />
      <pointLight position={[-2, 3, 2]} intensity={0.8} />

      {/* Model with rotation */}
      <Model />

      {/* Controls: Only allow X-axis rotation */}
      <OrbitControls
        enableZoom={false}
        enableRotate={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  );
}
