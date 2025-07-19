"use client"

import { useGLTF, useTexture } from "@react-three/drei"
import * as THREE from "three"

useGLTF.preload("/scene.gltf")


export function SodaCan({
  scale = 18,
  materialProps,
  ...props
}) {
  const { nodes } = useGLTF("/Soda-can.gltf")
  // Debug: log available node keys
  console.log('GLTF nodes:', Object.keys(nodes))

  // Jar-like proportions: shorter and wider
  const canScale = [ 1.2, 0.55, 1.2 ]
  const canPosition = [ 0, 0, 2 ]

  // White plastic for jar body (base)
  const label = useTexture("/images/about.jpg")
  const jarMaterial = new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 2.15,
    metalness: 0,
    map: label,
  })

  // If nodes.can is a mesh, apply material directly
  // If it's a group, find the mesh child and apply material
  let canMesh = nodes.can
  if (canMesh && canMesh.isGroup && canMesh.children.length > 0) {
    canMesh = canMesh.children.find(child => child.isMesh) || canMesh.children[0]
  }

  // Clone the mesh to avoid mutating the original scene graph
  let canMeshClone = null
  if (canMesh && canMesh.isMesh) {
    canMeshClone = canMesh.clone()
    canMeshClone.material = jarMaterial
  }

  // Render the can and tab meshes from Soda-can.gltf
  return (
    <group {...props} dispose={null} scale={scale} rotation={[ 0, -Math.PI, 0 ]}>
      {nodes.cylinder && (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cylinder.geometry}
          material={jarMaterial}
        />
      )}
      {nodes.cylinder_1 && (
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.cylinder_1.geometry}
          material={jarMaterial}
        />
      )}

    </group>
  )
}
