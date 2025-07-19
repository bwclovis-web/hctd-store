import { Canvas } from '@react-three/fiber'
import { SodaCan } from 'components/container/LandingPage/DyeContainer/dyeContainer'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'

function FloatingCan() {
  const group = useRef()

  useEffect(() => {
    if (!group.current) { return }
    // Start above, slide down, bounce, then float
    group.current.position.y = 4.5
    const tl = gsap.timeline()
    tl.to(group.current.position, {
      y: 0,
      duration: 2.2,
      ease: 'bounce.out',
      onComplete: () => {
        gsap.to(group.current.position, {
          y: '+=0.18',
          duration: 5.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
  }, [])

  return (
    <group ref={group} position={[ 0, 0, 0 ]}>
      <SodaCan scale={4.5} />
    </group>
  )
}

export default function Can3D() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 30, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '620px', height: '620px' }}>
        <Canvas camera={{ position: [ 0, 0, 6 ], fov: 50 }}>
          <ambientLight intensity={4.7} />
          <directionalLight position={[ 5, 5, 8 ]} intensity={7.7} />
          <FloatingCan />
        </Canvas>
      </div>
    </div>
  )
}
