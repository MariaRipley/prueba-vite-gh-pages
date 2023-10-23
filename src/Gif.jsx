function Gif({ gif }) {
  return (
    <>
      <img className="gif" src={gif.images.original.url} alt={gif.title} />
    </>
  );
}

export default Gif;
