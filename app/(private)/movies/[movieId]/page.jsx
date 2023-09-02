import React from "react";
import { getMovieDetails, getMovies, getVideoKey } from "../../TMD";
import VideoSection from "@/components/VideoSection";
import Link from "next/link";

export async function generateMetadata({ params: { movieId } }) {
  let movieDetails = await getMovieDetails(movieId);
  return {
    title: movieDetails.title,
    description: movieDetails.overview,
  };
}

export async function generateStaticParams() {
  const [movies1, movies2, movies3, movies4] = await Promise.all([
    getMovies("now_playing"),
    getMovies("popular"),
    getMovies("top_rated"),
    getMovies("upcoming"),
  ]);

  const movies = [...movies1, ...movies2, ...movies3, ...movies4]
  return movies.map(movie=>({
    movieId: movie.id.toString()
  }))
}

const MovieDetail = async ({ params: { movieId } }) => {
  const movieDetils = await getMovieDetails(movieId);
  const videKey = await getVideoKey(movieId);
  const { title, overview, genres, release_date } = movieDetils;
  return (
    <div className="h-[55vh] relative md:container mx-auto text-white">
      <div className="flex-col">
        <h1 className="text-center text-white text-4xl pt-20 pb-4"> {title}</h1>
        <div className="flex gap-3 justify-center items-center mb-5">
          {genres.map((item) => (
            <div key={item.id} className="py-2 px-3 bg-slate-600 rounded-md">
              {item.name}
            </div>
          ))}
        </div>
      </div>

      {videKey && <VideoSection videoKey={videKey} />}

      <div className="flex flex-col items-center mt-3 md:mt-4 gap-3 p-3">
        <div className="p-10 bg-slate-800 mt-5 text-md text-white rounded-md flex flex-col gap-4 w-full">
          <h1 className="text-center text-2xl font-bold">Overview</h1>
          <h2 className="text-center font-semibold italic text-lg text-red-main">
            Release Date: {release_date}
          </h2>
          <p>{overview}</p>
        </div>
        <Link href="/movies" className="btn-light text-black">
          Back
        </Link>
      </div>
    </div>
  );
};

export default MovieDetail;
