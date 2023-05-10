import Link from "next/link"
import Image from "next/image"

export default function Movie({title, id, poster, releaseDate}) {
  const imagePath = `https://image.tmdb.org/t/p/w500${poster}`
  return (
    <main>
      <h1>{title}</h1>
      <h2>{releaseDate}</h2>
      <Link href={`/asd`}>
        <img src={imagePath} alt="" />
      </Link>
    </main>
  )
}