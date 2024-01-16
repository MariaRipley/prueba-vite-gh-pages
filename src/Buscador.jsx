function Buscador({ onSubmit, valorInput, onChange }) {
  const handleReset = () => {
    window.location.reload();
  };

  return (
    <>
      <form className="formSearch" onSubmit={onSubmit}>
        <label htmlFor="gifSearch" className="formSearch-label">
          Escribe tu GIF:{" "}
        </label>
        <input
          className="formSearch-input"
          value={valorInput}
          onChange={onChange}
        />
        <button type="submit" className="formSearch-btn">
          Buscar
        </button>
      </form>
      <button
        type="button"
        className="formSearch-btn reset-btn"
        onClick={handleReset}
      >
        Reset
      </button>
    </>
  );
}

export default Buscador;
