import { useState } from "react";
import Buscador from "./Buscador";
import GridGifs from "./GridGifs";

function App() {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wyI9pq95jLjyZ2y6a3RToecTAkmYCK8n&q=${query}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.data;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };

  //JSX
  return (
    <div className="App">
      <Buscador
        valorInput={valorInput}
        onChange={onChange}
        onSubmit={onSubmit}
      />

      <GridGifs gifs={gifs} />
    </div>
  );
}

export default App;
