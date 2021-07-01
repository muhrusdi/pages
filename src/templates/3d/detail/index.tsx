import React, { Suspense } from "react"
import { Canvas, useLoader } from "react-three-fiber"
// import * as THREE from "three"
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { OrbitControls, Stage, Environment } from "@react-three/drei"

const Model = ({ url }) => {
  const { nodes, materials } = useLoader(GLTFLoader, url)
  console.log(nodes, materials)
  return (
    <group rotation={[Math.PI / 1, 2, 3]} position={[20, 20, 20]} scale={[2, 2, 2]}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5, Math.PI / 5]}>
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Base} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Rubber} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials.Inner} />
      </group>
    </group>
  )
}


const DetailThreeD: React.FC = () => {
  return (
    <div>
      <div className="grid gap-8 grid-cols-2">
        <div>
          <div className="bg-blueGray-900 rounded-md">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7.5] }} style={{height: 400}}>
            <pointLight color="indianred" />
    <pointLight position={[10, 10, -10]} color="orange" />
    <pointLight position={[-10, -10, 10]} color="lightblue" />
              <Suspense fallback={null}>
              <Environment path="/cube" />
                <Stage environment={null} intensity={0.3} contactShadowOpacity={0.3} shadowBias={-0.0015}>
                  <Model url="/shoes.gltf" />
                </Stage>
              </Suspense>
              <OrbitControls
                autoRotate
                enablePan={false}
                enableZoom={false}
                enableDamping
                dampingFactor={0.5}
                rotateSpeed={1}
                maxPolarAngle={Math.PI / 2}
                minPolarAngle={Math.PI / 2}
              />
            </Canvas>
          </div>
        </div>
        <div>
          right
        </div>
      </div>
    </div>
  )
}

export default DetailThreeD