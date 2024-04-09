import { useRef, useEffect } from 'react'

import planeScene from '../assets/3d/low_poly_plane_with_animation.glb'
import { useGLTF, useAnimations } from '@react-three/drei';

const Plane = ( {isRotating, ...props} ) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    console.log({isRotating});
      if(isRotating) {
        actions['Animation'].play();
      } else {
        actions['Animation'].stop();
      }
  }, [actions, isRotating])
  return (
    <mesh {...props} ref={ref} position={[-0.5, -3.3, -1.5]} scale={[0.45, 0.45, 0.45]} rotation={[0, 1.45, -0.1]}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Plane
