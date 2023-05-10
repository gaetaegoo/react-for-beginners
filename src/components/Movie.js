import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

// Home.js에서 props(objects) 받아오기
const Movie = ({ id, coverImg, title, year, summary, genres }) => {
    return (
        <div className={styles.movie}>
            {/* 모든 이미지 속성은 alt 옵션을 가짐*/}
            <img src={coverImg} alt={title} className={styles.movie__img} />
            <div>
                <h2 className={styles.movie__title}>
                    {/* 페이지를 전체 새로고침 하면서 보여줌 -> 
                필요한 부분으로만 이동시키는 link 필요 */}
                    {/* <a href="/movie">{title}</a> */}
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <h3 className={styles.movie__year}>{year}</h3>
                <p>
                    {/* 250까지의 글자만 잘라서 보여주기 */}
                    {/* {summary.length > 250 ? `${summary.slice(0, 250)}...` : summary} */}
                    {summary}
                </p>
                <ul className={styles.movie__genres}>
                    {/* map을 쓰려면 key가 계속 필요 */}
                    {genres.map((genre) => (
                        <li key={genre}>{genre}</li>
                    ))}
                </ul>
                <hr></hr>
            </div>
        </div>
    );
};

// propTypes 설정
Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
