import { Counter } from "./Bases/Counter"
import { CounterBy } from "./Bases/CounterBy"


function App() {
  return (
    <>
      <Counter initialValue={10}/>
      <CounterBy/>
    </>
  )
}

export default App
