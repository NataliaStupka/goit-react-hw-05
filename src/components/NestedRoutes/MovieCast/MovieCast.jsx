import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCredits } from "../../../services/api";
import s from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]); //casts

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieCredits(movieId);
      setCast(data);
    };
    getData();
  }, [movieId]);

  //console.log("Casts:", cast);

  return (
    <div>
      <ul className={s.castList}>
        {cast.map((actor) => (
          <li key={actor.id} className={s.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.name}
            />
            <p>{actor.name}</p>
            <p>{actor.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;

// adult: false;
// cast_id: 252;
// character: "Wade Wilson / Deadpool / Nicepool";
// credit_id: "66a0eeb7fadd7c4c9c38207f";
// gender: 2;
// id: 10859;
// known_for_department: "Acting";
// name: "Ryan Reynolds";
// order: 0;
// original_name: "Ryan Reynolds";
// popularity: 57.755;
// profile_path: "/6m3hkkHmKkD4MUJhng7ojE7MLKC.jpg";
