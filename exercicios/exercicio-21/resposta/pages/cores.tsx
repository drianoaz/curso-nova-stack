import { useState } from "react";

export default function Cores() {
  const [color, setColor] = useState("#000");

  const handleClickRed = () => {
    setColor('#f00');
  };

  const handleClickGreen = () => {
    setColor('#0f0');
  };

  const handleClickBlue = () => {
    setColor('#00f');
  };

  return (
    <>
      <h1
        style={{
          color,
        }}
      >
        Clique nos botões para alterar a cor
      </h1>
      <button onClick={handleClickRed}>Vermelho</button>
      <button onClick={handleClickGreen}>Verde</button>
      <button onClick={handleClickBlue}>Azul</button>
    </>
  );
}
