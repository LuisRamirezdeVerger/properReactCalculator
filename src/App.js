import { useState } from "react"
import { evaluate } from "mathjs"

const App = () => {
  const buttons = ["7", "8", "9", "c", "4", "5", "6", "*", "1", "2", "3", "/", "+", "0", "-", "="]
  const [display, setDisplay] = useState ("")


  const handler = (value) => {
    if(value === '=') {
      setDisplay(evaluate(display))
    } else if (value === 'c' ) {
      setDisplay("")
    } else {
      setDisplay (display + value)
    }
  }
  return (
    <div>
      <h1>React Calculator</h1>
      <div>
        <h2>{display}</h2>
        {buttons.map((button, index) => {
          return <Button button={button} handler={handler} />
        })}
      </div>
    </div>
  )
}

const Button = ({button, handler}) => {
  return (
    <div>
      <button onClick={() => handler(button)}>{button}</button>
    </div>
  )
}
export default App