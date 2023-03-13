import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  return (
      <Html>
        <span className="canvas-loader"></span>
        <p style={{
          fontSize: 14,
          color: '#f1f1f1',
          fontWeight: 800,
          marginTop: 40,
        }}>Loading...
        </p>
      </Html>
  )
}

export default Loader