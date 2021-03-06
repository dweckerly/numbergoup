var number = 0,
    rate = 0,
    amount = 0,
    rateCost = 0,
    amountCost = 0,
    progress = 0;

var progressInterval;
var progressInc = 0.1;
var progressRate = 1000;

var redVal = 0;
var greenVal = 255;
var blueVal = 255;

// UI/animation flags
var progressActive = true,
    titleFade = false,
    controlsEnabled = true,
    gameLoop = true;

// ending flags
var bigNumber = false,
    tooFast = false;

const body = document.getElementsByTagName("BODY")[0],
    numberEle = document.getElementById("number"),
    rateEle = document.getElementById("rate"),
    amountEle = document.getElementById("amount"),
    rateCostEle = document.getElementById("rate-cost"),
    amountCostEle = document.getElementById("amount-cost"),
    rateBtn = document.getElementById("rate-btn"),
    amountBtn = document.getElementById("amount-btn"),
    progressBarEle = document.getElementById("progress-bar"),
    progressBarWrapperEle = document.getElementById("progress-bar-wrapper"),
    progressBarDivEle = document.getElementById("progress-bar-div"),
    progressBarSectionEle = document.getElementById("progress-bar-section"),
    notificationEle = document.getElementById("notification"),
    controlsEle = document.getElementById("controls"),
    titleEle = document.getElementById("title"),
    fortuneDiv = document.getElementById("fortune"),
    fortuneText = document.getElementById("fortune-text");

const INCREMENT = 0.1;

const INITIAL_TEXT_SIZE = 48;

const messages = [
    "Click the buttons to get started! " + String.fromCodePoint(0x1F354)
]

const fortunes = [
    "Your current troubles will fade when you pass through the yellow glass.",
    "When three wings cross your hidden desire will be fufilled.",
    "The key to your future potential lies in the mouth of a serpent.",
    "You will have good fortune when the clouds swell at dusk.",
    "Be wary of a falling knife at a coming negotiation.",
    "Crisis may be brought upon you by an unplanned celebration.",
    "A meager gift will soon come from your secret enemy.",
    "A fruitful opportunity is waiting for you where the rocks bend and the water is still."
]