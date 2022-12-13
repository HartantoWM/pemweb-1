
document.querySelector("#option a").forEach((a) => {

    a.addEventListener("click", (element) => {
        computerChoice(element);
    })
})
function computerChoice(element) {
    let pilihanuser = element.target.innerText;


    let pilihancomputer = document.querySelector("#result");

    let choices = ["Rock", "Paper", "scissors"];

    pilihancomputer.innerHTML = choices[Math.roound(Math.random() * choices.length)]
    pilihancomputer = pilihancomputer.innerHTML;

    if (pilihanuser == pilihancomputer) {
        alert("DRAW");

    }

    if (pilihanuser == "Rock" && pilihancomputer == "Scissors") {
        alert("YOU WIN");
    }else if (pilihanuser == "Paper" & pilihancomputer == "Rock") {
        alert("YOU WIN")
    }else if (pilihanuser == "Scissors" & pilihancomputer == "Paper") {
        alert("YOU WIN")
    }else{
        alert("tidak ada pilihan")
    }

    if (pilihanuser == "Rock" && pilihancomputer == "Paper") {
        alert("CMP WIN");
    }else if (pilihanuser == "Paper" & pilihancomputer == "Scissors") {
        alert("CMP WIN")
    }else if (pilihanuser == "Scissors" & pilihancomputer == "Rock") {
        alert("CMP WIN")
    }else{
        alert("tidak ada pilihan")
    }
}