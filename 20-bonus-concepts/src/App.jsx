import { useState } from 'react'
import Theme from './components/Theme'

function App() {
  const [theme, setTheme] = useState('light')
  const [background, setBackground] = useState('#fff')
  const [color, setColor] = useState('#111')

  return (
    <div>
      <h1 style={{backgroundColor: background, color: color}}>This theme is {theme}</h1>
      <Theme theme={theme} setTheme={setTheme} background={background} setBackground={setBackground} color={color} setColor={setColor} />
    </div>
  )
}

export default App
