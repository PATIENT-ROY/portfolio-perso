import { useEffect, useMemo, useRef, useState } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js"
import * as THREE from "three"

const YAW = 0.32
const PITCH = 0.16

function makeScreenTexture() {
  const canvas = document.createElement("canvas")
  canvas.width = 1280
  canvas.height = 800
  const ctx = canvas.getContext("2d")
  if (!ctx) return new THREE.CanvasTexture(canvas)

  ctx.fillStyle = "#121820"
  ctx.fillRect(0, 0, 1280, 800)
  ctx.fillStyle = "#1b2531"
  ctx.fillRect(0, 0, 1280, 72)

  const dots: Array<[number, string]> = [
    [36, "#ff5f57"],
    [68, "#febc2e"],
    [100, "#28c840"],
  ]
  for (const [x, color] of dots) {
    ctx.fillStyle = color
    ctx.beginPath()
    ctx.arc(x, 36, 9, 0, Math.PI * 2)
    ctx.fill()
  }

  ctx.font = "32px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  ctx.fillStyle = "#8ea0b5"
  ctx.fillText("Hero.tsx", 132, 48)

  ctx.font = "58px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
  const lines: Array<Array<[string, string]>> = [
    [
      ["export ", "#c792ea"],
      ["function ", "#82aaff"],
      ["Hero", "#ffcb6b"],
      ["() {", "#d7e0ea"],
    ],
    [
      ["  return ", "#c792ea"],
      ["(", "#d7e0ea"],
    ],
    [
      ["    <", "#89ddff"],
      ["h1", "#f07178"],
      [">Roy</", "#d7e0ea"],
      ["h1", "#f07178"],
      [">", "#89ddff"],
    ],
    [["  )", "#d7e0ea"]],
    [["}", "#d7e0ea"]],
  ]

  lines.forEach((parts, index) => {
    const y = 190 + index * 108
    ctx.font = "32px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    ctx.fillStyle = "#3d4d60"
    ctx.fillText(String(index + 1), 36, y)
    ctx.font = "58px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    let x = 110
    for (const [text, color] of parts) {
      if (!text) continue
      ctx.fillStyle = color ?? "#d7e0ea"
      ctx.fillText(text, x, y)
      x += ctx.measureText(text).width
    }
  })

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.anisotropy = 8
  texture.needsUpdate = true
  return texture
}

function makeKeysTexture() {
  const canvas = document.createElement("canvas")
  canvas.width = 640
  canvas.height = 400
  const ctx = canvas.getContext("2d")
  if (!ctx) return new THREE.CanvasTexture(canvas)
  ctx.fillStyle = "#1a222c"
  ctx.fillRect(0, 0, 640, 400)
  ctx.fillStyle = "#2a3544"
  const gap = 8
  const keyW = 52
  const keyH = 36
  for (let row = 0; row < 5; row++) {
    const cols = row === 4 ? 8 : 10
    const offset = ((10 - cols) * (keyW + gap)) / 2 + 18
    for (let col = 0; col < cols; col++) {
      const x = offset + col * (keyW + gap)
      const y = 24 + row * (keyH + gap)
      ctx.beginPath()
      ctx.roundRect(x, y, keyW, keyH, 6)
      ctx.fill()
    }
  }
  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.needsUpdate = true
  return texture
}

function makeShadowTexture() {
  const canvas = document.createElement("canvas")
  canvas.width = 256
  canvas.height = 256
  const ctx = canvas.getContext("2d")
  if (!ctx) return new THREE.CanvasTexture(canvas)
  const gradient = ctx.createRadialGradient(128, 128, 20, 128, 128, 120)
  gradient.addColorStop(0, "rgba(12, 18, 24, 0.38)")
  gradient.addColorStop(1, "rgba(12, 18, 24, 0)")
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 256, 256)
  const texture = new THREE.CanvasTexture(canvas)
  texture.needsUpdate = true
  return texture
}

function Laptop({
  reduced,
  coarse,
}: {
  reduced: boolean
  coarse: boolean
}) {
  const group = useRef<THREE.Group>(null)
  const yaw = useRef(0.06)
  const pitch = useRef(0)
  const screen = useMemo(() => makeScreenTexture(), [])
  const keys = useMemo(() => makeKeysTexture(), [])
  const shadow = useMemo(() => makeShadowTexture(), [])
  const baseGeo = useMemo(
    () => new RoundedBoxGeometry(2.4, 0.09, 1.62, 4, 0.045),
    []
  )
  const lidGeo = useMemo(
    () => new RoundedBoxGeometry(2.4, 1.56, 0.055, 4, 0.03),
    []
  )

  useEffect(() => {
    return () => {
      screen.dispose()
      keys.dispose()
      shadow.dispose()
      baseGeo.dispose()
      lidGeo.dispose()
    }
  }, [screen, keys, shadow, baseGeo, lidGeo])

  useEffect(() => {
    if (reduced || coarse) return
    const onMove = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = (event.clientY / window.innerHeight) * 2 - 1
      yaw.current = x * YAW
      pitch.current = -y * PITCH
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [reduced, coarse])

  useFrame(({ clock }, delta) => {
    const node = group.current
    if (!node || reduced) return
    const t = clock.elapsedTime
    const nextYaw = coarse ? Math.sin(t * 0.65) * 0.22 : yaw.current
    const nextPitch = coarse ? Math.sin(t * 0.45) * 0.08 : pitch.current
    node.rotation.y = THREE.MathUtils.damp(node.rotation.y, nextYaw, 4.5, delta)
    node.rotation.x = THREE.MathUtils.damp(node.rotation.x, nextPitch, 4.5, delta)
  })

  const aluminum = "#c5ced6"
  const edge = "#8d99a6"

  return (
    <group ref={group} rotation={[0, 0.06, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, 0.05]}>
        <planeGeometry args={[3.4, 2.2]} />
        <meshBasicMaterial map={shadow} transparent depthWrite={false} />
      </mesh>

      <mesh geometry={baseGeo} position={[0, 0.045, 0]} castShadow>
        <meshStandardMaterial
          color={aluminum}
          metalness={0.55}
          roughness={0.38}
        />
      </mesh>
      <mesh position={[0, 0.096, 0.02]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[2.05, 0.92]} />
        <meshBasicMaterial map={keys} />
      </mesh>
      <mesh position={[0, 0.098, 0.55]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.7, 0.4]} />
        <meshStandardMaterial color="#aeb8c2" roughness={0.45} metalness={0.2} />
      </mesh>

      <group position={[0, 0.09, -0.78]} rotation={[-0.48, 0, 0]}>
        <mesh geometry={lidGeo} position={[0, 0.78, 0]}>
          <meshStandardMaterial
            color={aluminum}
            metalness={0.6}
            roughness={0.32}
          />
        </mesh>
        <mesh position={[0, 0.8, 0.03]}>
          <planeGeometry args={[2.28, 1.44]} />
          <meshBasicMaterial color="#0c1218" />
        </mesh>
        <mesh position={[0, 0.8, 0.034]}>
          <planeGeometry args={[2.16, 1.32]} />
          <meshBasicMaterial map={screen} toneMapped={false} />
        </mesh>
        <mesh position={[0, 1.5, 0.036]}>
          <circleGeometry args={[0.018, 16]} />
          <meshBasicMaterial color={edge} />
        </mesh>
      </group>
    </group>
  )
}

type HeroLaptopProps = {
  reduced: boolean
  coarse: boolean
  active: boolean
}

function Aim() {
  const { camera } = useThree()
  useFrame(() => {
    camera.lookAt(0, 0.28, 0)
  })
  return null
}

function Scene({ reduced, coarse }: HeroLaptopProps) {
  return (
    <>
      <Aim />
      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 5, 4]} intensity={1.6} />
      <directionalLight position={[-3, 2, 2]} intensity={0.45} />
      <Laptop reduced={reduced} coarse={coarse} />
    </>
  )
}

const HeroLaptop = () => {
  const wrap = useRef<HTMLDivElement>(null)
  const [reduced, setReduced] = useState(false)
  const [coarse, setCoarse] = useState(false)
  const [active, setActive] = useState(true)

  useEffect(() => {
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    const coarseQuery = window.matchMedia("(pointer: coarse)")
    const sync = () => {
      setReduced(reduceQuery.matches)
      setCoarse(coarseQuery.matches)
    }
    sync()
    reduceQuery.addEventListener("change", sync)
    coarseQuery.addEventListener("change", sync)

    const node = wrap.current
    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.08 }
    )
    if (node) observer.observe(node)

    return () => {
      reduceQuery.removeEventListener("change", sync)
      coarseQuery.removeEventListener("change", sync)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={wrap}
      role="img"
      aria-label="Ноутбук с кодом на экране"
      className="aspect-[5/4] w-full justify-self-center"
    >
      <Canvas
        className="h-full w-full"
        dpr={[1, 1.75]}
        frameloop={!active || reduced ? "demand" : "always"}
        gl={{ alpha: true, antialias: true }}
        camera={{ position: [0, 0.95, 3.9], fov: 34 }}
        onCreated={({ gl, camera }) => {
          gl.setClearColor(0x000000, 0)
          camera.lookAt(0, 0.28, 0)
        }}
      >
        <Scene reduced={reduced} coarse={coarse} active={active} />
      </Canvas>
    </div>
  )
}

export default HeroLaptop
