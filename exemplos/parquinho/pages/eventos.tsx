function AlertButton({ onClose, children }) {
  return (
    <div>
      {children}
      <button onClick={() => onClose(children)}>fechar</button>
    </div>
  );
}

export default function Eventos() {
  const handleClose = (children) => {
    alert(`${children} closed`);
  }

  return (
    <div>
      <AlertButton onClose={handleClose}>
        Play Movie
      </AlertButton>
      <AlertButton onClose={handleClose}>
        Upload Image
      </AlertButton>
    </div>
  );
}
