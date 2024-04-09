/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Author: Touati_Fellouh (https://sketchfab.com/Touati_Fellouh)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/stereo-microscope-9d9b102e11334a42bbe8e7901285e111
Title: Stereo Microscope
*/

import React, { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber'
import { a } from '@react-spring/three'

import islandScene from '../assets/3d/stereo_microscope.glb';

const Island = ({ isRotating, setIsRotating, setCurrentStage, ...props}) => {
  const islandRef = useRef();

  const {gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene);

  const lastX = useRef(0);
  const rotationSpeed = useRef(0);
  const dampingFactor = 0.85;

  const handlePointerDown = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);

    const clientX = e.touches
     ? e.touches[0].clientX
     : e.clientX;

    lastX.current = clientX; 
  }
  const handlePointerUp = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);
  }
  const handlePointerMove = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if(isRotating) {
      const clientX = e.touches
      ? e.touches[0].clientX
      : e.clientX;
  
      const delta = (clientX - lastX.current) / viewport.width; 
  
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
      lastX.current = clientX;
      rotationSpeed.current = delta * 0.01 * Math.PI;
    }
  }

  const handleKeyDown = (e) => {
    if(e.key === 'ArrowLeft') {
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y += 0.01 * Math.PI;
    } else if(e.key === 'ArrowRight') {
      if(!isRotating) setIsRotating(true);
      islandRef.current.rotation.y -= 0.01 * Math.PI;
    }
  }

  const handleKeyUp = (e) => {
    if(e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  }

  useFrame(() => {
    if(!isRotating) {
      rotationSpeed.current *= dampingFactor;

      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }

      islandRef.current.rotation.y += rotationSpeed.current;

    } else {
      const rotation = islandRef.current.rotation.y;

      const normalizedRotation =
      ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

    // Set the current stage based on the island's orientation
    switch (true) {
      case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
        setCurrentStage(4);
        break;
      case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
        setCurrentStage(1);
        break;
      case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
        setCurrentStage(2);
        break;
      case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
        setCurrentStage(3);
        break;
      default:
        setCurrentStage(null);
    }
    } 
  })

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);


    return () => {
    canvas.removeEventListener('pointerdown', handlePointerDown);
    canvas.removeEventListener('pointerup', handlePointerUp);
    canvas.removeEventListener('pointermove', handlePointerMove);
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('keyup', handleKeyUp);
    }
  }, [gl, handlePointerDown, handlePointerUp, handlePointerMove])

  return (
    <a.group ref={islandRef} {...props}>
          <group position={[0, 0.959, -0.902]} scale={0.137}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials['2-METAL1']}
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials['3-METAL2']}
            />
          </group>
          <group
          
            position={[-0.263, 1.695, -0.441]}
            rotation={[0.954, 0, -Math.PI / 2]}
            scale={0.071}>
            <mesh
              geometry={nodes.Object_9.geometry}
              material={materials['4-BLACK_PARTS']}
            />
            <mesh
              geometry={nodes.Object_10.geometry}
              material={materials['4-BLACK_PARTS']}
            />
            <mesh
              geometry={nodes.Object_11.geometry}
              material={materials['4-BLACK_PARTS']}
            />
            <mesh
              geometry={nodes.Object_12.geometry}
              material={materials['Material.015']}
            />
            <mesh
              geometry={nodes.Object_13.geometry}
              material={materials['5-BLACK_PARTS2']}
            />
          </group>
          <mesh
            geometry={nodes.Object_7.geometry}
            material={materials['8-LAMP']}
            position={[0, 1.315, -0.159]}
            scale={[0.137, 0.102, 0.137]}
          />
          <mesh
            geometry={nodes.Object_15.geometry}
            material={materials['1-BASE']}
            position={[-0.288, 2.978, 0.958]}
            rotation={[0.99, 0, 0]}
            scale={0.159}
          />
          <mesh
            geometry={nodes.Object_17.geometry}
            material={materials['1-BASE']}
            position={[0, 1.585, -1.027]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={0.04}
          />
          <mesh
            geometry={nodes.Object_19.geometry}
            material={materials['6-LENS_1']}
            position={[-0.28, 3.275, 1.41]}
            scale={0.167}
          />
          <mesh
            geometry={nodes.Object_21.geometry}
            material={materials['7-LENS_2']}
            position={[-0.28, 3.275, 1.41]}
            scale={0.167}
          />
        </a.group>
  );
}

export default Island;
