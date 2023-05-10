export default App;

import { useState, useEffect } from "react";

// #7.2 Coin Tracker
function App() {
    const [loading, setLoading] = useState(true);

    // 비어있는 array로 두어서 undefined 되지 않도록 하기
    const [coins, setCoins] = useState([]);

    const [asset, setAsset] = useState(0);
    const [price, setPrice] = useState(0);
    const [name, setName] = useState("---");

    const onChange = (event) => {
        setName(event.target.selectedOptions[0].text.split(":")[0]);
        // parseFloat: 문자열을 실수로 바꿈
        // parseInt: 문자열을 정수로 바꿈
        setPrice(parseFloat(event.target.value));
        console.log(event.target.selectedOptions[0].text);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (asset === 0) {
            return;
        }
        setAsset(0);
        console.log("your asset has been reset!");
    };

    /**
     * 1. api 가져오기
     * 2. json으로 응답 받기
     * 3. 콘솔에 json 찍어보기
     * 4. json(coin)값을 setCoins 해주기
     * 5. coins를 얻었다면, loading을 false로 바꾸기
     */
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((json) => {
                setCoins(json);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>
                {" "}
                Coins Listed: {loading
                    ? ""
                    : coins.length + " Coins Found!"}{" "}
            </h1>

            <p>
                database:{" "}
                <a href="https://api.coinpaprika.com/v1/tickers">
                    Coin Paprika
                </a>
            </p>

            <hr />

            <h3>
                {loading ? (
                    "Loading..."
                ) : (
                    <select onChange={onChange}>
                        <option value={0.0}> --- Select Coin --- </option>
                        {coins.map((coin) => {
                            return (
                                <option
                                    key={coin.id}
                                    value={coin.quotes.USD.price}
                                >
                                    {coin.name} ({coin.symbol}): $
                                    {/* toFixed: 소수 부분 자릿수를 전달 받고, 그 값을 문자열로 반환 */}
                                    {coin.quotes.USD.price.toFixed(5)}
                                </option>
                            );
                        })}
                    </select>
                )}
            </h3>

            <h2>
                {" "}
                Chosen Coin: "{name}": ${price.toFixed(5)}{" "}
            </h2>

            <div>
                <form onSubmit={onSubmit}>
                    ${" "}
                    <input
                        onChange={(event) => setAsset(event.target.value)}
                        value={asset}
                        type="number"
                        placeholder="USD"
                    />
                    <button> Reset </button>
                </form>
            </div>

            <h2>
                {" "}
                With ${asset}, you can purchase: {name} === "
                {asset > 0 && price !== 0 ? (asset / price).toFixed(5) : 0}"{" "}
            </h2>
        </div>
    );
}

export default App;
