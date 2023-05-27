import { Counter } from "./Bases/Counter"
import { CounterBy } from "./Bases/CounterBy"
import { CouterEffect } from "./Bases/CounterEffect"
import { CounterHook } from "./Bases/CounterHook"
import { CounterReducerComponent } from "./Bases/CounterReducerComponent"


function App() {
  return (
    <>
      <Counter initialValue={10}/>
      <CounterBy/>
      <CouterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  )
}

export default App
