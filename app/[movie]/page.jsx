export default async function MovieDetail({ params }) {
  const { movie } = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}&language=en-US&page=1}`
  );
  const res = await data.json();

  return (
    <main>
      <h1 className="text-3xl">Movie details</h1>
      <h2 className="text-2xl">{res.title}</h2>
      <h3 className="text-xs">{res.release_date}</h3>
      <div className="flex my-5 text-justify">
        {" "}
        <h3>{res.overview}</h3>
        <img className="mx-4" src={`https://image.tmdb.org/t/p/w300${res.poster_path}`} alt="" />
      </div>
    </main>
  );
}
