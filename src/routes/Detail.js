// useParams: url에 있는 변수값 찾아 오기
import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";

const Detail = () => {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();

    // const getMovie = useCallback(async () => {
    //     const json = await (
    //         await fetch(
    //             `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    //         )
    //     ).json();
    //     // console.log(json);
    //     setMovie(json.data.movie);
    //     setLoading(false);
    //     console.log("test");
    // }, [id]);

    const getMovie = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        // console.log(json);
        setMovie(json.data.movie);
        setLoading(false);
    };

    // useEffect(() => {
    //     getMovie();
    //     console.log("test2");
    // }, [getMovie]);

    useEffect(() => {
        getMovie();
    }, []);

    return (
        <div>
            {loading ? (
                <h1>loading..</h1>
            ) : (
                <div>
                    <Movie
                        key={movie.id}
                        id={movie.id}
                        coverImg={movie.medium_cover_image}
                        title={movie.title}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                </div>
            )}
        </div>
    );
};

export default Detail;
