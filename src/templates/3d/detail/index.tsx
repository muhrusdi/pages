import React, { Suspense } from "react"
import { Canvas, useLoader } from "react-three-fiber"
// import * as THREE from "three"
import { OrbitControls, Stage, Environment, useGLTF } from "@react-three/drei"

const Model = ({ url }) => {
  const {nodes, materials} = useGLTF(url)
  return (
    <group position={[0, -3, 0]} scale={[4, 4, 4]}>
      <group rotation={[Math.PI / 10.5, -Math.PI / 3.8, Math.PI / 7.6]}>
        {/* <mesh castShadow receiveShadow geometry={nodes.planet001.geometry} material={materials.scene} />
        <mesh castShadow receiveShadow geometry={nodes.planet002.geometry} material={materials.scene} /> */}
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Base} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Rubber} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials.Rubber} />
      </group>
      <group position={[3, 0.4, 2]} rotation={[Math.PI / 10.5, -Math.PI / 3.8, Math.PI / 7.6]}>
        {/* <mesh castShadow receiveShadow geometry={nodes.planet001.geometry} material={materials.scene} />
        <mesh castShadow receiveShadow geometry={nodes.planet002.geometry} material={materials.scene} /> */}
        <mesh castShadow receiveShadow geometry={nodes.Cube_1.geometry} material={materials.Base} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_2.geometry} material={materials.Rubber} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_3.geometry} material={materials.Material} />
        <mesh castShadow receiveShadow geometry={nodes.Cube_4.geometry} material={materials.Rubber} />
      </group>
    </group>
  )
}


const DetailThreeD: React.FC = () => {
  return (
    <div>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2">
        <div>
          <div className="bg-blueGray-900 rounded-md" style={{height: 400}}>
            <Canvas shadowMap camera={{ position: [0, 0, 15] }} className="rounded-md">
              <Suspense fallback={null}>
                <Environment path="/cube" />
                {/* <Stage environment={null} intensity={0.3} contactShadowOpacity={0.3} shadowBias={-0.0015}> */}
                  <Model url="/shoes.gltf" />
                {/* </Stage> */}
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
          <div className="h-full flex flex-col">
            <div style={{flexBasis: "100%"}}>
              <h2 className="text-4xl font-bold">Shoes</h2>
              <p className="text-gray-300 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, dignissimos!</p>
            </div>
            <div>
              <button className="w-full bg-indigo-600 font-semibold text-white p-3 rounded-md">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailThreeD