import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

function HeroMesh() {
    return (
        <mesh>
            <Sphere args={[1, 100, 200]} scale={2.5}>
                <MeshDistortMaterial
                    color="#bd00ff"
                    attach="material"
                    distort={0.5}
                    speed={2}
                    roughness={0}
                />
            </Sphere>
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
        </mesh>
    );
}

export default function Hero3D() {
    return (
        <div className="w-full h-[500px] lg:h-full cursor-grab active:cursor-grabbing">
            <Canvas>
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} autoRotate />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[2, 3, 4]} />
                    <HeroMesh />
                </Suspense>
            </Canvas>
        </div>
    );
}
