$(".btn").on("click", function() {
  $("img").fadeOut(100).fadeIn(100);
  play();
});

function play() {
  var randomNumber1 = numberGenerator();
  var randomNumber2 = numberGenerator();
  $(".img1").attr("src", "images/left" + randomNumber1 + ".png");
  $(".img2").attr("src", "images/right" + randomNumber2 + ".png");
  checkResult(randomNumber1, randomNumber2);
}

function numberGenerator() {
  var randomNumber = Math.random();
  randomNumber = randomNumber * 3;
  randomNumber = Math.floor(randomNumber) + 1;
  return randomNumber;
}

function checkResult(randomNumber1, randomNumber2) {

  if (randomNumber1 === 1 && randomNumber2 === 1) {
    $("h1").text("🏳️ DRAW 🏳️ ");
    playSound("wrong");
  } else if (randomNumber1 === 1 && randomNumber2 === 2) {
    $("h1").text("✂️Player 2 WINS!");
    playSound("player2");
  } else if (randomNumber1 === 1 && randomNumber2 === 3) {
    $("h1").text("🧻Player 1 WINS!");
    playSound("player1");
  } else if (randomNumber1 === 2 && randomNumber2 === 1) {
    $("h1").text("✂️󠁮󠁢󠁿Player 1 WINS!");
    playSound("player1");
  } else if (randomNumber1 === 2 && randomNumber2 === 2) {
    $("h1").text("🏳️ DRAW 🏳️ ");
    playSound("wrong");
  } else if (randomNumber1 === 2 && randomNumber2 === 3) {
    $("h1").text("🪨Player 2 WINS!");
    playSound("player2");
  } else if (randomNumber1 === 3 && randomNumber2 === 1) {
    $("h1").text("🧻Player 2 WINS!");
    playSound("player2");
  } else if (randomNumber1 === 3 && randomNumber2 === 2) {
    $("h1").text("🪨Player 1 WINS!");
    playSound("player1");
  } else {
    $("h1").text("🏳️ DRAW 🏳️ ");
    playSound("wrong");
  }
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 200);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".wav");
  audio.play();
}
