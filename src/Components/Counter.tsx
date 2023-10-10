import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, addByAmount, resetAll } from "../features/counter/counterSlice"
import { getCounterValue } from "../features/counter/counterSlice"
const Counter = () => {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch()
  const addValue = Number(amount) || 0
  // const count = useSelector((state: any) => state.counter.count)
  const count = useSelector(getCounterValue)
  return (
    <div>
      Value:{count}
      <div>
        <button type="submit" onClick={() => dispatch(increment())}>+</button>
        <button type="submit" onClick={() => dispatch(decrement())}>_</button>
        <input type="number" onChange={(e) => setAmount(parseInt(e.target.value))} />
        <button type="submit" onClick={() => dispatch(addByAmount(addValue))}>Add the Amount</button>
        <button type="submit" onClick={() => dispatch(resetAll())}>RESET</button>
      </div>
    </div>
  )
}

export default Counter
