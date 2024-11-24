import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../../services/api";
import s from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null); //опис фільму

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieReviews(movieId);
      setReviews(data);
    };
    getData();
  }, [movieId]);

  //якщо movie = null
  if (!reviews) {
    return <h2>Loading reviews...</h2>;
  }
  return (
    <div>
      {reviews.length === 0 && (
        <h2>We don't have any reviews for this movie.</h2>
      )}

      <ul className={s.reviewList}>
        {reviews.map((review) => (
          <li key={review.id}>
            <div className={s.wrapper}>
              <p className={s.author}>
                Author: <span className={s.authorName}>{review.author}</span>
              </p>
              <p className={s.text}>{review.content}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieReviews;
