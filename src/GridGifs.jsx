import Gif from "./Gif";

function GridGifs({ gifs }) {
  return (
    <>
      {gifs.map((gif) => (
        <Gif key={gif.id} gif={gif} />
      ))}
    </>
  );
}

export default GridGifs;
