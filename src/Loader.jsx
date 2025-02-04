import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="canvas-loader"></span>
      <p className="text-sm font-[800] mt-10">
        {progress.toFixed(2)}%
      </p>
    </Html>
  )
}

export default Loader;