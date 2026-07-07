import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Float, Sparkles, OrbitControls } from '@react-three/drei'
import { motion } from 'framer-motion'

function DataCore() {
  const meshRef = useRef()

  return (
    <Float speed={1.1} rotationIntensity={0.5} floatIntensity={0.7}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshStandardMaterial
          color="#c9a76a"
          wireframe
          transparent
          opacity={0.55}
          emissive="#c9a76a"
          emissiveIntensity={0.15}
        />
      </mesh>
      <mesh scale={0.62}>
        <icosahedronGeometry args={[1.6, 0]} />
        <meshStandardMaterial color="#eef1f7" transparent opacity={0.08} />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[4, 4, 4]} intensity={40} color="#c9a76a" />
      <pointLight position={[-4, -3, -2]} intensity={18} color="#5b6b8f" />
      <DataCore />
      <Sparkles count={70} scale={7} size={1.4} speed={0.25} opacity={0.35} color="#c9a76a" />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.6}
        maxPolarAngle={Math.PI / 1.7}
        minPolarAngle={Math.PI / 2.6}
      />
    </>
  )
}

export default function Hero3D() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 1.5]}>
          <Scene />
        </Canvas>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-ink/10 via-ink/40 to-ink pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-24 text-center md:text-left">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="section-eyebrow mb-5"
        >
          Data Engineer &middot; Analyst
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl leading-[1.05] text-paper"
        >
          Harsha
          <br />
          <span className="text-gradient-champagne">Manjunatha</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-xl text-mist text-lg mx-auto md:mx-0"
        >
          Building resilient data pipelines and cloud-native platforms, one
          well-modeled dataset at a time.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-9 flex items-center justify-center md:justify-start gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-champagne px-6 py-3 text-sm font-medium text-ink transition hover:bg-champagne-soft"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-paper transition hover:border-champagne hover:text-champagne"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
