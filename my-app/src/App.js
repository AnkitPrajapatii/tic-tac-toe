
import { useEffect, useState } from 'react';
import './App.css';
import Container from './components/Container';
import Scoreboard from './components/Scoreboard';
import Resetbtn from './components/Resetbtn';

const getLocalScores = () => {
  const score = localStorage.getItem('scores');
  return score ? JSON.parse(score) : { oScore: 0, xScore: 0 };
}
function App() {



  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [items, setItems] = useState(Array(9).fill(null));
  const [xturn, setXTurn] = useState(true);
  const [scores, setScores] = useState(getLocalScores())
  const [gameover, setGameOver] = useState(false)

  const boxHandler = (boxIdx) => {
    const updatedItems = items.map((value, idx) => {
      if (idx === boxIdx) {
        return xturn === true ? "X" : "O"
      } else {
        return value;
      }
    })
    const winner = checkWinner(updatedItems)
    if (winner) {
      if (winner === "O") {
        let { oScores } = scores
        oScores += 1
        setScores({ ...scores, oScores })
      } else {
        let { xScores } = scores
        xScores += 1
        setScores({ ...scores, xScores })
      }
    }

    setItems(updatedItems)
    setXTurn(!xturn)
  };

  const checkWinner = (items) => {
    for (let i = 0; i < winPatterns.length; i++) {
      const [x, y, z] = winPatterns[i]

      if (items[x] && items[x] === items[y] && items[y] === items[z]) {
        setGameOver(true)
        return items[x]
      }


    }
  }

  const resetBtn = () => {
    setGameOver(false);
    setItems(Array(9).fill(null))
  }

  useEffect(()=>{
    localStorage.setItem('scores',JSON.stringify(scores))
  },[scores])


  return (
    <div className="App">
      <Scoreboard scores={scores} xturn={xturn} />
      <Container items={items} onClick={gameover ? resetBtn : boxHandler} />
      <Resetbtn resetBtn={resetBtn}/>
    </div>
  );
}

export default App;

