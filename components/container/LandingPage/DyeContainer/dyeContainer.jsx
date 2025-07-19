"use client"

import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"

useGLTF.preload("/Soda-can.gltf")

// const flavorTextures = {
//   lemonLime: "/labels/lemon-lime.png",
//   grape: "/labels/grape.png",
//   blackCherry: "/labels/cherry.png",
//   strawberryLemonade: "/labels/strawberry.png",
//   watermelon: "/labels/watermelon.png",
// };

export function SodaCan({
  flavor = "blackCherry",
  scale = 18,
  materialProps,
  ...props
}) {
  const { nodes } = useGLTF("/Soda-can.gltf")

  // Jar-like proportions: shorter and wider
  const canScale = [ 1.2, 0.55, 1.2 ]
  const canPosition = [ 0, 0, 2 ]

  // White plastic for jar body
  const jarMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 2.15,
    metalness: 0,
  })


  return (
    <group {...props} dispose={null} scale={scale} rotation={[ 0, -Math.PI, 0 ]} position={canPosition}>
      {/* Clean, soft lighting */}
      <ambientLight intensity={1} />
      <directionalLight position={[ 0, 10, 10 ]} intensity={5.5} castShadow shadow-mapSize-width={2048} shadow-mapSize-height={2048} />
      <spotLight position={[ 0, 15, 10 ]} angle={0.3} penumbra={0.5} intensity={5.2} castShadow />
      {/* Main jar body, shortened and wider, white plastic */}
      {nodes.can &&
        <primitive object={nodes.can} scale={canScale} material={jarMaterial} />
      }
      {/* Lid (tab) removed as requested */}
    </group>
  )
}
