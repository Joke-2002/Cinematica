// import React, {useState} from 'react'

// export default function App(props) {
  // alert(props.name)
//   const [name, setName] = useState('Joomart')
//   return (
//     <>
//      <div>{name}</div>
//      <button onClick={()=>setName('Assa')}>Assa</button> 
//      <button onClick={()=>setName('item')}>item</button>
//      <button onClick={()=>setName('walt')}>walt</button>
//     </>
//   )
// }

// -------------------------------------------------------------------------------->

// import React, {useEffect, useState} from 'react'

// export default function App() {
//   const [name, setName] = useState(0)
//   const [count, setCount] = useState(0)

//   useEffect(() => {
//     alert(name)
//   }, [name])
//   return (
//     <>
//       <div style={{color: name < 0 ? 'red' : 'black'}}>{name}</div>
//       <div style={{color: count < 0 ? 'red' : 'black'}}>{count}</div>
//       <button onClick={()=>setName(name + 1)}>+</button>
//       <button onClick={()=>setName(name - 1)}>-</button>
//       <button onClick={()=>setCount(count + 1)}>+</button>
//       <button onClick={()=>setCount(count - 1)}>-</button>
//     </>
//   )
// }
