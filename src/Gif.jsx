function Gif({ gif }) {
  return (
    <>
      <img src={gif.images.original.url} alt={gif.title} />
    </>
  );
}

export default Gif;
