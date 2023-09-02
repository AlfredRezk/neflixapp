import Image from "next/image";
import Link from "next/link";
import React from "react";

const IMG_API = "https://image.tmdb.org/t/p/w1280";
const defaultImage =
  "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80";

const MovieCard = ({ poster_path, id, title, vote_average }) => {
  return (
    <Link
      href={`/movies/${id}`}
      className="w-40 h-[240px] relative cursor-pointer"
    >
      <Image
        src={poster_path ? IMG_API + poster_path : defaultImage}
        width={160}
        height={240}
        alt="movie-card"
        className="brightness-[80%] hover:brightness-100 transition border-2 border-transparent hover:border-white"
        title={title}
      />
      <span className="absolute top-1 right-1 text-white font-semibold z-10 drop-shadow-md">

        {vote_average}
      </span>
    </Link>
  );
};

export default MovieCard;
