import { useState } from "react";
import './style.css'

// eslint-disable-next-line react/prop-types
const SortedList =({names, sortFunc})=>{
    const sortedNames = sortFunc(names)
    return (
      <>
      {sortedNames.map(name=><div key={name}>{name}</div>)}
      </>
    )
  }

const CounterWithSortList = () => {
  const [count, setCount] = useState(0);
  const [names] = useState(["John", "Bob", "Alice", "Charlie"])

  const sortNames = (names)=>{
      return names.sort()
  }

  return (
    <div className="counter-container">
      <div className="counter">
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <h3>List of Names</h3>
        <SortedList names={names} sortFunc={sortNames} />

      </div>
    </div>
  );
}

export default CounterWithSortList;