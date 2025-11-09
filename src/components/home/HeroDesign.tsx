"use client";

import React, { useMemo, useRef, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";

/* ---------- Helper: Deform geometry ---------- */
function deformToHead(geometry: THREE.IcosahedronGeometry) {
  const pos = geometry.attributes.position;
  const v = new THREE.Vector3();
  for (let i = 0; i < pos.count; i++) {
    v.fromBufferAttribute(pos, i);
    v.y *= 1.22;
    v.x *= 0.9;
    v.z += Math.max(0, v.y * 0.085 - 0.02) * (1.0 - Math.abs(v.x) * 0.45);
    pos.setXYZ(i, v.x, v.y, v.z);
  }
  pos.needsUpdate = true;
  geometry.computeVertexNormals();
  return geometry;
}

function useBaseHeadGeometry(detail = 8) {
  return useMemo(() => {
    const g = new THREE.IcosahedronGeometry(2, detail);
    deformToHead(g);
    return g;
  }, [detail]);
}

/* ---------- Base Mesh ---------- */
function BaseHead({ geometry }: { geometry: THREE.IcosahedronGeometry }) {
  return (
    <mesh geometry={geometry} position={[2.6, -0.3, 0]}>
      <meshStandardMaterial
        color="#00172a"
        emissive="#002f4a"
        emissiveIntensity={0.12}
        metalness={0.05}
        roughness={0.6}
      />
    </mesh>
  );
}

/* ---------- Wireframe Overlay ---------- */
function WireframeOverlay({ geometry }: { geometry: THREE.IcosahedronGeometry }) {
  const wireGeom = useMemo(() => new THREE.WireframeGeometry(geometry), [geometry]);
  return (
    <lineSegments geometry={wireGeom} position={[2.6, -0.3, 0]}>
      <lineBasicMaterial color="#dd32ff91" transparent opacity={0.75} toneMapped={false} />
    </lineSegments>
  );
}

/* ---------- Points ---------- */
function HeadPoints({ geometry }: { geometry: THREE.IcosahedronGeometry }) {
  const pointsGeom = useMemo(() => {
    const src = geometry.attributes.position.array;
    const positions = new Float32Array(src.length);
    for (let i = 0; i < src.length; i++) positions[i] = src[i];
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return g;
  }, [geometry]);

  return (
    <points geometry={pointsGeom} position={[2.6, -0.3, 0]}>
      <pointsMaterial
        size={0.012}
        sizeAttenuation
        color="#8effff"
        transparent
        opacity={0.95}
        depthWrite={false}
      />
    </points>
  );
}

/* ---------- Head Bands ---------- */
function HeadBands({ count = 8 }: { count?: number }) {
  const rings = useMemo(() => {
    const meshes = [];
    for (let i = 0; i < count; i++) {
      const radius = 1.1 + (i / count) * 1.2;
      const tube = 0.003 + (i % 3 === 0 ? 0.002 : 0.0015);
      const radialSegments = 120;
      const tubularSegments = 4;
      const geo = new THREE.TorusGeometry(radius, tube, tubularSegments, radialSegments);
      meshes.push({
        geometry: new THREE.EdgesGeometry(geo),
        rotation: [Math.PI / 2 + (i - count / 2) * 0.08, (i / count) * 0.7, 0],
        scale: [1.0 + 0.18 * Math.sin(i), 0.92 + 0.18 * Math.cos(i), 0.9 + i * 0.02],
      });
    }
    return meshes;
  }, [count]);

  return (
    <group position={[2.6, -0.3, 0]}>
      {rings.map((r, idx) => (
        <lineSegments
          key={idx}
          geometry={r.geometry}
          rotation={r.rotation as [number, number, number]}
          scale={r.scale as [number, number, number]}
        >
          <lineBasicMaterial color="#2fe8ff" transparent opacity={0.35} toneMapped={false} />
        </lineSegments>
      ))}
    </group>
  );
}

/* ---------- Particles ---------- */
function BackgroundParticles({ count = 9000 }: { count?: number }) {
  const geom = useMemo(() => {
    const p = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const colorPalette = ["#ff3283", "#00ffff", "#b000ff"];
    const color = new THREE.Color();
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const r = 6 + Math.random() * 60;
      const z = (Math.random() - 0.5) * 20;
      p[i * 3] = Math.cos(theta) * r;
      p[i * 3 + 1] = -1.5 + (Math.random() - 0.5) * 8;
      p[i * 3 + 2] = z;
      color.set(colorPalette[Math.floor(Math.random() * colorPalette.length)]);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(p, 3));
    g.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    return g;
  }, [count]);

  return (
    <points geometry={geom}>
      <pointsMaterial size={0.05} sizeAttenuation vertexColors transparent opacity={0.15} />
    </points>
  );
}

/* ---------- Scroll Animation Hook (Fixed Type) ---------- */
function ScrollAnimation({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    const scrollFactor = scrollY * 0.0015;
    groupRef.current.rotation.y = scrollFactor * 2;
    groupRef.current.rotation.x = scrollFactor * 0.5;
    groupRef.current.position.y = Math.sin(scrollFactor) * 0.5;
    camera.position.z = 10 - Math.min(scrollY / 600, 3);
  });

  return null;
}

/* ---------- Main Scene ---------- */
export default function HeroDesign() {
  const baseGeometry = useBaseHeadGeometry(8);
  const groupRef = useRef<THREE.Group>(null); // Initially null, will be set by <group>

  return (
    <div className="w-full h-full absolute top-0 left-0 overflow-hidden opacity-70">
      <Canvas
        dpr={[1, 2]}
        camera={{ position: [0, 0.6, 10], fov: 34 }}
        className="w-full h-full"
        onCreated={({ gl, scene }) => {
          gl.toneMappingExposure = 1;
          scene.fog = new THREE.FogExp2("#001524", 0.03);
        }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[6, 10, 6]} intensity={0.6} />
        <pointLight position={[2.6, 2.6, 2]} color="#66f0ff" intensity={1.0} />

        <group ref={groupRef}>
          <BackgroundParticles count={9000} />
          <BaseHead geometry={baseGeometry} />
          <WireframeOverlay geometry={baseGeometry} />
          <HeadPoints geometry={baseGeometry} />
          <HeadBands count={10} />
        </group>

        {/* Now type-safe! */}
        <ScrollAnimation groupRef={groupRef} />

        <EffectComposer>
          <Bloom
            luminanceThreshold={0.1}
            luminanceSmoothing={0.9}
            intensity={1.6}
            kernelSize={5}
          />
        </EffectComposer>
      </Canvas>
    </div>
  );
}