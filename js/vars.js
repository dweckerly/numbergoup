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

var progressActive = true,
    titleFade = false;

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
    titleEle = document.getElementById("title");

const INCREMENT = 0.1;

const INITIAL_TEXT_SIZE = 48;

const messages = [
    "Click the buttons to get started! " + String.fromCodePoint(0x1F354)
]