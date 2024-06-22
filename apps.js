const sign_in_btn = document.querySelector("#HOME");
const sign_up_btn = document.querySelector("#PLAY");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("RYOMGAMES-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("RYOMGAMES-mode");
});

//////
const computer = document.querySelector(".computer img");
const player = document.querySelector(".player img");
const computerPoints = document.querySelector(".computerPoints");
const playerPoints = document.querySelector(".playerPoints");
const options = document.querySelectorAll(".options button");
const resultMessage = document.querySelector(".resultMessage");

options.forEach((option) => {
    option.addEventListener("click", () => {
        computer.classList.add("shakeComputer");
        player.classList.add("shakePlayer");

        setTimeout(() => {
            computer.classList.remove("shakeComputer");
            player.classList.remove("shakePlayer");

            player.src = `./img/${option.innerHTML.toLowerCase()}Player.png`;

            const choice = ["STONE", "PAPER", "SCISSORS"];
            let arrayNo = Math.floor(Math.random() * 3);
            let computerChoice = choice[arrayNo];
            computer.src = `./img/${computerChoice.toLowerCase()}Computer.png`;

            let cPoints = parseInt(computerPoints.innerText);
            let pPoints = parseInt(playerPoints.innerText);
            let result = "";

            if (option.innerHTML === "STONE") {
                if (computerChoice === "PAPER") {
                    computerPoints.innerText = cPoints + 1;
                    result = "Computer wins!";
                } else if (computerChoice === "SCISSORS") {
                    playerPoints.innerText = pPoints + 1;
                    result = "Player wins!";
                } else {
                    result = "It's a draw!";
                }
            } else if (option.innerHTML === "PAPER") {
                if (computerChoice === "SCISSORS") {
                    computerPoints.innerText = cPoints + 1;
                    result = "Computer wins!";
                } else if (computerChoice === "STONE") {
                    playerPoints.innerText = pPoints + 1;
                    result = "Player wins!";
                } else {
                    result = "It's a draw!";
                }
            } else if (option.innerHTML === "SCISSORS") {
                if (computerChoice === "STONE") {
                    computerPoints.innerText = cPoints + 1;
                    result = "Computer wins!";
                } else if (computerChoice === "PAPER") {
                    playerPoints.innerText = pPoints + 1;
                    result = "Player wins!";
                } else {
                    result = "It's a draw!";
                }
            }

            resultMessage.innerText = result;
        }, 900);
    });
});
