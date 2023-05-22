import { Counter } from "./Bases/Counter"
import { CounterBy } from "./Bases/CounterBy"
import { CouterEffect } from "./Bases/CounterEffect"


function App() {
  return (
    <>
      <Counter initialValue={10}/>
      <CounterBy/>
      <CouterEffect />
    </>
  )
}

export default App
