import React, { useState } from "react";

const LPS = () => {
  const [playerChoice, setPlayerChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState(null);

  const choices = ["Lapis", "Papyrus", "Scalpellus"];

  const computerChooses = () => {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  };

  const handleChoice = (choice) => {
    setPlayerChoice(choice);
    const compChoice = computerChooses();
    setComputerChoice(compChoice);
    compareChoices(choice, compChoice);
  };

  const compareChoices = (player, computer) => {
    let roundResult;
    if (player === computer) {
      roundResult = "It's a draw!";
    } else if (
      (player === choices[0] && computer === choices[2]) ||
      (player === choices[1] && computer === choices[0]) ||
      (player === choices[2] && computer === choices[1])
    ) {
      roundResult = "The player wins!";
    } else {
      roundResult = "The computer wins!";
    }
    setResult(`Player chose ${player}, Computer chose ${computer}. ${roundResult}`);
  };

  return (
    <div>
      <h1 id="welcome">Lapis, Papyrus, Scalpellus!</h1>
      <button onClick={() => handleChoice("Lapis")}>Click Here to select Lapis</button>
      <button onClick={() => handleChoice("Papyrus")}>Click Here to select Papyrus</button>
      <button onClick={() => handleChoice("Scalpellus")}>Click Here to select Scalpellus</button>

      <h3>Here are the results...</h3>
      {result && <p>{result}</p>}
    </div>
  );
};

export default LPS;
