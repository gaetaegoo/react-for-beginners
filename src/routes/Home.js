import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);

    // ver 1: 구닥다리 then
    // useEffect(() => {
    //     fetch(
    //         "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    //     ).then((response) =>
    //         response.json().then((json) => {
    //             // fetch한 api로 영화 정보 뽑아서 setMovies에 설정
    //             setMovies(json.data.movies);
    //             // 로딩 끝났으면 false로 "loading" 문구 가리기
    //             setLoading(false);
    //         })
    //     );
    // }, []);

    // ver 2: async & await
    // const getMovies = async () => {
    //     const response = await fetch(
    //         "https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year"
    //     );
    //     const json = await response.json();
    //     setMovies(json.data.movies);
    //     setLoading(false);
    // };

    // ver 3: async & await(double)
    const getMovies = async () => {
        const json = await (
            await fetch(
                "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year"
            )
        ).json();
        // console.log(json);
        setMovies(json.data.movies);
        setLoading(false);
    };

    // useEffect로 딱 한 번만 로딩(렌더링)
    useEffect(() => {
        getMovies();
    }, []);

    // map으로 array속 각각의 내용마다 뽑아오기(화면에 뿌리기)
    return (
        <div>
            {loading ? (
                <h1>loading..</h1>
            ) : (
                <div>
                    {/* map을 쓰려면 key가 계속 필요 */}
                    {movies.map((movie) => (
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            coverImg={movie.medium_cover_image}
                            title={movie.title}
                            summary={movie.summary}
                            genres={movie.genres}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
