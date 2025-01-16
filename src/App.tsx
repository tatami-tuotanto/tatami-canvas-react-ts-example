import './App.css'
import { useEffect } from 'react'
import BrushSize from './components/BrushSize'
import BrushColor from './components/BrushColor'
function App() {

  useEffect(() => {
    window.tatami.api.initCommands()
  }, []);

  return (
    <>
      <tatami-canvas
        paper-width="1024"
        paper-height="1024"
        paper-color="#ffffff"
      ></tatami-canvas>

      
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 p-2 bg-white rounded-lg shadow-lg">
        {/* Brush size slider demonstrating the Tatami Attribute usage for updating brush size */}
        <label>Brush Size</label>
        <BrushSize />
        <div className="mt-4"></div>
        {/* Brush color picker demonstrating the Tatami API usage for updating brush color */}
        <label>Brush Color</label>
        <BrushColor />
      </div>
    </>
  )
}

export default App
