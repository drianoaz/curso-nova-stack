import { useState } from 'react'

function MyComponent() {
  const [name, setName] = useState('Kimi');
  const [showName, setShowName] = useState(true);

  const onChange = (event) => {
    setName(event.target.value);
  }

  const onClick = () => {
    setShowName(!showName)
  }

  return (
    <div>
      <input onChange={onChange} />
      {showName && <h1>{name}</h1>}
      <button onClick={onClick}>{showName ? 'Hide' : 'Show'} Name</button>
    </div>
  );
}

export default function ExampleState() {
  return (
    <>
      <MyComponent />
      <hr />
      <MyComponent />
    </>
  )
}