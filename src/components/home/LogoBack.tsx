"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { gsap } from "gsap";

function ShiningCurve() {
  const lineRef = useRef<THREE.Line>(null);
  const glowRef = useRef<THREE.Points>(null);

  useEffect(() => {
    const line = lineRef.current;
    if (line) {
      gsap.to(line.rotation, {
        y: Math.PI * 2,
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }
  }, []);

  const curve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(-3, 1, 0),
    new THREE.Vector3(-1, 1.5, 1),
    new THREE.Vector3(0, 0.5, -1),
    new THREE.Vector3(2, 1, 1),
    new THREE.Vector3(3, 0, 0),
  ]);

  const points = curve.getPoints(100);
  const geometry = new THREE.BufferGeometry().setFromPoints(points);

  // Create material outside JSX
  const material = new THREE.LineBasicMaterial({
    color: "#4f46e5",
    linewidth: 2,
    transparent: true,
    opacity: 0.8,
  });

  return (
    <group>
      <primitive object={new THREE.Line(geometry, material)} ref={lineRef} />

      <points ref={glowRef} geometry={geometry}>
        <pointsMaterial color="#93c5fd" size={0.05} transparent opacity={0.9} />
      </points>
    </group>
  );
}

// 💫 Floating spheres
function FloatingSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const t = clock.getElapsedTime();
      groupRef.current.children.forEach((child, i) => {
        child.position.y = Math.sin(t + i) * 0.3;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {[...Array(5)].map((_, i) => (
        <mesh key={i} position={[Math.random() * 5 - 2.5, Math.random() * 2 - 1, Math.random() * 2 - 1]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial
            emissive="#6366f1"
            emissiveIntensity={0.9}
            color="#818cf8"
            metalness={0.6}
            roughness={0.3}
          />
        </mesh>
      ))}
    </group>
  );
}

// 🧊 Cube
function Cube({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial
        color="#6366f1"
        metalness={0.8}
        roughness={0.2}
        emissive="#818cf8"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

// 🔷 Square Plane
function Square({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <planeGeometry args={[1, 1]} />
      <meshStandardMaterial
        color="#4f46e5"
        metalness={0.6}
        roughness={0.3}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

// 🌍 World Sphere
function World({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.7, 32, 32]} />
      <meshStandardMaterial
        color="#60a5fa"
        metalness={0.7}
        roughness={0.2}
        emissive="#3b82f6"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

// 🛡️ Shield Shape
function Shield({ position }: { position: [number, number, number] }) {
  const shape = new THREE.Shape();
  shape.moveTo(0, 1);
  shape.bezierCurveTo(0.6, 0.5, 0.6, -0.3, 0, -1);
  shape.bezierCurveTo(-0.6, -0.3, -0.6, 0.5, 0, 1);
  const geometry = new THREE.ShapeGeometry(shape);

  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      <primitive object={geometry} />
      <meshStandardMaterial
        color="#0ea5e9"
        emissive="#38bdf8"
        emissiveIntensity={0.7}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// ☁️ Smoke/Fog layer
function Smoke() {
  return (
    <>
      <fog attach="fog" args={["#0f172a", 4, 15]} />
      <mesh position={[0, 0, -5]}>
        <planeGeometry args={[50, 50]} />
        <meshBasicMaterial color="#0f172a" transparent opacity={0.4} />
      </mesh>
    </>
  );
}

// 🎥 Camera Motion
function CameraMotion() {
  const { camera } = useThree();

  useEffect(() => {
    gsap.to(camera.position, {
      x: 2,
      y: 1,
      z: 5,
      duration: 10,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, [camera]);

  return null;
}

// 🌌 Scene
function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[3, 3, 3]} intensity={1.5} color="#a5b4fc" />
      <pointLight position={[-3, -3, -3]} intensity={1.2} color="#6366f1" />


      <ShiningCurve />
      <FloatingSpheres />

      {/* Added 3D elements */}
      <Cube position={[-2, 1, -1]} />
      <Square position={[2, -1, -2]} />
      <World position={[1.5, 1.5, -1]} />
      <Shield position={[0, 0, 0]} />

      <CameraMotion />
    </>
  );
}

// 🚀 Hero Design Component
export default function LogoBack() {
  return (
    <div className="w-full h-full opacity-70 flex justify-center items-center absolute top-0 left-0  overflow-hidden">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }}>
         <Scene />   
      </Canvas>

    </div>
  );
}