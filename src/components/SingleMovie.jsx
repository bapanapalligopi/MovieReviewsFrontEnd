import React, { useState } from "react";
import styles from "./singlemovie.module.css";
import PropTypes from "prop-types"; // Import PropTypes

export default function SingleMovie({ movie }) {
  const [showReview, setShowReview] = useState(false);

  const toggleReview = () => {
    setShowReview(!showReview); // Toggle the value of showReview
  };

  return (
    <div className={styles.singlemovie}>
      <div className="card">
        <div className={`card-header ${styles.cardheader}`}>
          <div>
            Movie Name: <span> {movie.title}</span>
          </div>
          <div className={styles.gr}>
            <div>
              Genre: <span>{movie.genre}</span>
            </div>

            <div>
              Rating: <span>{movie.rating}/5</span>
            </div>
          </div>
        </div>
        <div className={`card-body ${styles.cardbody}`}>
          <div className={styles.moviedetails}>
            <div>
              <img
                src={movie.imageUrl}
                alt="movie image"
                className={styles.image}
              />
            </div>
            <div className={styles.title}>
              <p>{movie.title}</p>
            </div>
            <div className={styles.duration}>
              Duration: <span>{movie.duration} min</span>
            </div>
            <div className={styles.date}>
              <p>
                Release Date: <span>{movie.releaseDate}</span>
              </p>
            </div>
            <div className={styles.buttons}>
              <div>
                <button
                  className={`btn btn-success ${styles.reviewbut}`}
                  onClick={toggleReview}
                >
                  {showReview ? "Hide Review" : "View Review"}
                </button>
              </div>
              <div className={styles.trailer}>
                <a
                  href={movie.trailerUrl}
                  className={`btn btn-success ${styles.trailerbut}`}
                >
                  Watch Trailer
                </a>
              </div>
            </div>
          </div>
        </div>
        {showReview && (
          <div className={`card-footer ${styles.cardfooter}`}>
            <marquee behavior="scroll" direction="left">
              <p>
                Provided by 17Reviews.Provided by 17Reviews. Provided by
                17Reviews. Provided by 17Reviews. Provided by 17Reviews.
                Provided by 17Reviews.
              </p>
            </marquee>
            <div className={styles.photo}>
              <img
                src={movie.imageUrl}
                alt="review image"
                className={styles.reviewimage}
              />
            </div>

            <div className={styles.movieinfo}>
              <ul>
                <li>
                  Director:
                  <span className={styles.span2}> {movie.director}</span>
                </li>
                <li>
                  Cinematographer:
                  <span className={styles.span2}> {movie.cinematographer}</span>
                </li>
                <li>
                  Editor: <span className={styles.span2}> {movie.editor}</span>
                </li>
                <li>
                  Music Director:
                  <span className={styles.span2}> {movie.musicDirector}</span>
                </li>
                <li>
                  Producers:
                  <span className={styles.span2}> {movie.musicDirector}</span>
                </li>
                <li>
                  Cast,Top actors:
                  <span className={styles.span2}> {movie.cast}</span>
                </li>
              </ul>
            </div>

            <div className={styles.reviewinfo}>
              <h4>17Reviews Review</h4>
              <p> {movie.reviewDescription}</p>
              <h4>One Word Revew</h4>
              <p>{movie.oneWord}</p>
              <h4>Story</h4>
              <p>{movie.story}</p>
              <h4>Plus points</h4>
              <p>{movie.plusPoints}</p>
              <h4>Minus Points</h4>
              <p>{movie.minusPoints}</p>
              <h4>Technical Aspects</h4>
              <p>{movie.technicalAssets}</p>
              <h4>Verdict</h4>
              <p>{movie.verdict}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

SingleMovie.propTypes = {
  movie: PropTypes.object.isRequired, // PropTypes validation for 'movie' prop
};
