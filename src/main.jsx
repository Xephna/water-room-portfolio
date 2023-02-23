import { Canvas } from '@react-three/fiber'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Experience from './Experience'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Canvas
    // camera={ {
		// 	fov: 45,
		// 	near: 0.1,
		// 	far: 200,
		// 	position: [ 2.5, 4, 6 ]
		// } }
  >
    <Experience />
  </Canvas>
  // </React.StrictMode>,
)
