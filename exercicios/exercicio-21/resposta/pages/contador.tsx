import { useState } from "react";

export default function Contador() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <p>O botão foi clicado {clicks} vezes</p>
      <button onClick={handleClick}>Clique aqui</button>
    </>
  );
}
