import Card from "./components/Card.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Navbar from "./components/Navbar.jsx";

function App() {
    const [pokemon, setPokemon] = useState([]);
    const [check, setCheck] = useState({});
    const [score, setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() => {
        async function fetchAndStartGame() {
            try{
                const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
                const data = response.data.results;
                const map = {};

                setPokemon(data);

                data.forEach(p => {
                    map[p.name] = false;
                });
                setCheck(map);
                shuffle(data);
            } catch (e){
                console.log(e)
            }
        }
        fetchAndStartGame()

    }, []);

    function shuffle(originalArray) {
        const array = [...originalArray]; // make a shallow copy
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        setPokemon(array); // this now has a new reference
    }
    function handleGame(name) {
        if (check[name] === false){
            const newCheck = { ...check, [name]: true };
            setCheck(newCheck);

            const newScore = score + 1;

            setScore(newScore);
            handleBestScore(newScore);
        }else{
            setScore(0);
            resetGame()
        }
        shuffle(pokemon);
    }
    function handleBestScore(score) {
        if (score > bestScore){
            setBestScore(score);
        }
    }
    function resetGame() {
        const resetCheck = {};
        for (let key in check) {
            resetCheck[key] = false;
        }
        setCheck(resetCheck);
    }
    useEffect(() => {
        console.log("Score changed:", score);
    }, [score]);

  return (
      <div className={'w-screen h-screen flex flex-col justify-around items-center'}>
          <Navbar currentScore={score} bestScore={bestScore}/>
          <div className={'grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-10 justify-self-center'}>
            {pokemon.map((pk) => (
                <Card key={pk.name} url={pk.url} name={pk.name} onClick={() => handleGame(pk.name)}/>
            ))}
        </div>
      </div>
  )
}

export default App
