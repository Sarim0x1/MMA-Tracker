const button = document.getElementById("exploreBtn");

button.addEventListener("click", function () {

    document.querySelector(".fights").scrollIntoView({
        behavior: "smooth"
    });
});

const predictionButtons = document.querySelectorAll(".prediction-card button");

predictionButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const fighterName = button.innerText;

        const card = button.parentElement;

        const result = card.querySelector(".result");

        const votes = card.querySelector(".votes");

        result.innerText = "Your Prediction " + fighterName + "!";

        let voteCount = parseInt(votes.innerText.replace("Votes: ", ""));

        voteCount++;

        votes.innerText = "Votes: " + voteCount;

    });
});

const quizCards = document.querySelectorAll(".quiz-card");

let currentQuestion = 0;

let score = 0;

quizCards.forEach(function (card, index) {
    if (index !== 0) {
        card.display = "none";
    }
})

quizCards.forEach(function (card) {
    const options = card.querySelectorAll("button");

    options.forEach(function (option) {

        option.addEventListener("click", function () {

            if (currentQuestion === 0) {
                if (option.innerText === "Islam Makhachev") {
                    alert("Correct! ");
                    score++;
                } else {
                    alert("Wrong! ");
                }
            }

            if (currentQuestion === 1) {
                if (option.innerText === "Justin Gaethje") {
                    alert("Correct! ");
                    score++;
                } else {
                    alert("Wrong! ");
                }
            }

            if (currentQuestion === 2) {
                if (option.innerText === "Jon Jones") {
                    alert("Correct! ");
                    score++;
                } else {
                    alert("Wrong! ");
                }
            }

            if (currentQuestion === 3) {
                if (option.innerText === "Conner Mcgregor") {
                    alert("Correct! ");
                    score++;
                } else {
                    alert("Wrong! ");
                }
            }

            if (currentQuestion === 4) {
                if (option.innerText === "Dustin Poirier") {
                    alert("Correct! ");
                    score++;
                } else {
                    alert("Wrong! ");
                }
            }
        });
    });
});

const nextButton = document.querySelector(".next-btn");

nextButton.addEventListener("click", function () {

    quizCards[currentQuestion].style.display = "none";

    currentQuestion++;

    if (currentQuestion < quizCards.length) {
        quizCards[currentQuestion].style.display = "block";
    }
    else {
        document.querySelector(".quiz-result").style.display = "block";
        document.getElementById("finalScore").innerText = score;
    }

});

const restartButton = document.getElementById("restartQuiz");

restartButton.addEventListener("click", function () {

    currentQuestion = 0;
    score = 0;

    document.getElementById("finalScore").textContent = score;

    document.getElementById("quizResult").style.display = "none";

    quizCards.forEach(function (card) {
        card.style.display = "none";
    });

    quizCards[0].style.display = "block";
});

const recordButtons = document.querySelectorAll(".view-records");

recordButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.parentElement;

        const fighterName = card.querySelector("h3").innerText;

        alert(
            "Fighter Records\n\n" + 
            "Name: " + fighterName + "\n\n"
            +
            "wins by KO/TKO: 10\n" +
            "wins by Submission: 5\n" +
            "wins by Decision: 4\n" +
            "Fighting Style: Striker\n" +
            "Reach: 75 inches\n" +
            "Height: 6'0\"\n" +
            "Weight Class: Lightweight\n"
        );

    });

});