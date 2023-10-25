import { useState } from "react";

function useSearchGifs() {
  const [valorInput, setValorInput] = useState("");
  const [gifs, setGifs] = useState([]);
  const [estaCargando, setEstaCargando] = useState(false);

  const onChange = (evento) => {
    const valor = evento.target.value;
    setValorInput(valor);
  };

  const getGifs = async (query) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=wyI9pq95jLjyZ2y6a3RToecTAkmYCK8n&q=${query}`;
    setEstaCargando(true);
    const response = await fetch(url);
    const data = await response.json();
    setEstaCargando(false);
    console.log(data);
    return data.data;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const gifs = await getGifs(valorInput);
    setGifs(gifs);
  };

  return {
    onSubmit,
    onChange,
    valorInput,
    gifs,
    estaCargando
  };
}

export default useSearchGifs;
