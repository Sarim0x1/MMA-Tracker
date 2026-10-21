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

const recordFighters = document.querySelectorAll(".record-fighter");

recordButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        document.getElementById("recordPanel").style.display = "block";

        recordFighters.forEach(function (fighter) {
            fighter.style.display = "none";
        });

        if (index === 0) {
            recordFighters[0].style.display = "block";

            recordFighters[1].style.display = "block";
        }

        if (index === 1) {
            recordFighters[2].style.display = "block";

            recordFighters[3].style.display = "block";
        }

        if (index === 2) {
            recordFighters[4].style.display = "block";

            recordFighters[5].style.display = "block";
        }

        if (index === 3) {
            recordFighters[6].style.display = "block";

            recordFighters[7].style.display = "block";
        }

    });

});