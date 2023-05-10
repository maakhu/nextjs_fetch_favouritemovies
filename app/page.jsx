import Movie from "./movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/list/8252655?api_key=${process.env.API_KEY}&language=en-US&page=1}`
  );
  const res = await data.json();
  console.log(res);
  return (
    <main>
      <h1 className="md:text-5xl text-center m-10 sm:text-3xl">
        My Favourite Movies of All Time
      </h1>
      <div className="grid gap-16 grid-cols-fluid">
        {res.items.map((movie) => (
          <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            poster={movie.poster_path}
            releaseDate={movie.release_date}
          />
        ))}
      </div>
    </main>
  );
}
