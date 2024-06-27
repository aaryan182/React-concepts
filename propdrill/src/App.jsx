import React, { useContext, useState } from 'react'
import { CountContext } from './context'

export const App = () => {
  const [count, setcount] = useState(0)

  // wrap anyone that want to use the teleported value inside a provider 
  return (
    <div>
      <CountContext.Provider value={count}>
      <Count setcount= {setcount}  />
      </CountContext.Provider>
    </div>
  )
}


function Count({count}) {
  return <div>
    <CountRender count= {count} />
    <Buttons count= {count} setcount= {setcount}/>
  </div>
}

function CountRender({count}) {
  const count = useContext(CountContext)
  return <div>
    <h1>{count}</h1>
  </div>
}

function Buttons({ setcount}) {
  const count = useContext(CountContext)
  return <div>
    <button onClick={() => setcount(count + 1)}>Increment</button>
    <button onClick={() => setcount(count - 1)}>Decrement</button>
  </div>
}