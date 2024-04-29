import { useEffect, useState } from "react";
import "./index.css";

function TicTacToe() {

   const [newValue, setNewValue] = useState(Array(9).fill(""));
   const [isXturn, setIsXTurn] = useState(true);
   const [winner, setWinner] = useState("");
   const [message, setMessage] = useState("");

//    0 1 2
//    3 4 5
//    6 7 8

function getWinner(value){
  const winnerPaterns = [
      [0,1,2],    
      [3,4,5],    
      [6,7,8],    
      [0,4,8],
      [6,4,2],
      [0,3,6],
      [1,4,7],
      [2,5,8]
     ];

  for(let i=0; i<winnerPaterns.length; i++){
      const [x,y,z] = winnerPaterns[i];

      if(value[x] && value[x] == value[y] && value[x] == value[z]){
          return setWinner(value[x]);
      }
  }


 }

 useEffect(()=>{
  
      getWinner(newValue);
      
      if(winner){
          setMessage(`The Winner is ${winner}`)
      }else if(!winner && newValue[0] != "" && newValue[1] != "" && newValue[2] != "" && newValue[3] != "" && newValue[4] != "" && newValue[5] != "" && newValue[6] != "" && newValue[7] != "" && newValue[8] != ""){
        setMessage(`It's is a Draw please Reset Game`)
      }else{
        setMessage(`Next player is ${isXturn? "X" : "O"}`)
      }

 }, [newValue, winner])

   

    function handleClick(index){

        const copyValue = [...newValue];

        if(winner || copyValue[index]) return;

        if(isXturn){

            copyValue[index] = "X";
            setNewValue(()=> copyValue);
            setIsXTurn(!isXturn);
        }else{
            copyValue[index] = "O"
            setNewValue(()=> copyValue);
            setIsXTurn(!isXturn);
        }

    }

    const handleReset = () =>{
      setNewValue(Array(9).fill(""));
      setIsXTurn(true);
      setWinner("");
      setMessage("")
    }


  function Square({value, onClick}) {
    console.log(value)
    return <span className="btn" onClick={onClick}>{value}</span>;
  }

  return (
    <div className="TicTacToe">
      <h1>Tic Tac Toe Game</h1>
      <div className="row">
        <Square onClick = {()=> handleClick(0)} value = {newValue[0]} />
        <Square onClick = {()=> handleClick(1)} value = {newValue[1]} />
        <Square onClick = {()=> handleClick(2)} value = {newValue[2]} />
      </div>

      <div className="row">
        <Square onClick = {()=> handleClick(3)} value = {newValue[3]} />
        <Square onClick = {()=> handleClick(4)} value = {newValue[4]} />
        <Square onClick = {()=> handleClick(5)} value = {newValue[5]} />
      </div>
      <div className="row">
        <Square onClick = {()=> handleClick(6)} value = {newValue[6]} />
        <Square onClick = {()=> handleClick(7)} value = {newValue[7]} />
        <Square onClick = {()=> handleClick(8)} value = {newValue[8]} />
      </div>
      <h2>{message}</h2>
      <button onClick={handleReset}>Reset Game</button>
    </div>
  );
}

export default TicTacToe;
