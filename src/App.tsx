import React, { useEffect, useState } from 'react';
import "./App.css";
import CellComponent from './components/CellComponent';
import BoardComponent from './components/BoardComponent';
import { Board } from './components/models/Board';
import { Player } from './components/models/Player';
import { Colors } from './components/models/Colors';
import { spawn } from 'child_process';
import Lostfigures from './components/Lostfigures';
import Timer from './components/models/Timer';

const App = () => {
  const [board, setBoard] = useState(new Board())
  const [whilePLayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPLayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)


  useEffect (() => {
    restart()
    setCurrentPlayer(whilePLayer)
  }, [])

  function restart() {
    const newBoard = new Board();
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer(){
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPLayer : whilePLayer)
  }

  return (
    <div className='app'>
      <Timer
        restart={restart}
        currentPlayer={currentPlayer}
      />
      <BoardComponent  
        board={board}
        setBoard={setBoard}
        currentPlayer={currentPlayer}
        swapPlayer = {swapPlayer}
      />
      <div>
      <Lostfigures
        title='Черные фигуры'
        figures={board.lostBlackFigures}
        />
        <Lostfigures
        title='Белые фигуры'
        figures={board.lostWhiteFigures}
        />
      </div>
    </div>
   
  );
};

export default App;
