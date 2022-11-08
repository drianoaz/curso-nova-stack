import { useState } from "react";

export default function Contador() {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = formData.get("name") as string;

    if (data) {
      setName(data);
    }
  };

  const handleClear = () => {
    setName('')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" />
        <button>enviar</button>
      </form>
      {name && (
        <>
          <p>Olá, {name}</p>
          <button onClick={handleClear}>Limpar</button>
        </>
      )}
    </>
  );
}
