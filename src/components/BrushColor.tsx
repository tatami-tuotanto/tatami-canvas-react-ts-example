import { useState } from 'react'

export default function BrushColor() {
  const [color, setColor] = useState('#012270') // Tatami default color

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Update the color state
    setColor(e.target.value)
    // Update the brush color in the Tatami API
    window.tatami.api.setColor(e.target.value)
  }

  return <input type="color" value={color} onChange={handleChange} />
}
