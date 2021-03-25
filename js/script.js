(function() {
    rateBtn.addEventListener("click", function() {
        rate += INCREMENT;
        number -= rateCost;
        update();
    });

    amountBtn.addEventListener("click", function() {
        amount += INCREMENT;
        number -= amountCost;
        update();
    });

    numberEle.innerText = number;
    rateEle.innerText = rate;
    amountEle.innerText = amount;
    rateCostEle.innerText = rateCost;
    amountCostEle.innerText = amountCost;

    loop();
})();

function update() {
    number = round(number);
    numberEle.innerText = number;
    rate = round(rate);
    amount = round(amount);
    rateCost = round(rate * 2);
    amountCost = round(amount * 2);
    rateEle.innerText = rate;
    amountEle.innerText = amount;
    rateCostEle.innerText = rateCost;
    amountCostEle.innerText = amountCost;
    checkBtns();
}

function updateProgress() {
    progressRateUpdate()
    changeUI();
    progress = 0;
    progressBarEle.style.width = "0%";
    clearTimeout(progressInterval);
    delete progressInterval;
    progressInterval = setInterval(progressIncrement, ((1000 / rate) / progressRate));
}

function progressRateUpdate() {
    if (rate >= 2.5) {
        progressRate = 10;
        progressInc = 10;
    } else if (rate > 0.2) {
        progressRate = 100;
        progressInc = 1;
    }
}

function changeUI() {
    let changeAmt = ((amount - 0.1) * 10);
    let changeRate = rate * 10;
    numberEle.style.fontSize = `${INITIAL_TEXT_SIZE + changeAmt}px`
    numberEle.style.marginTop = `-${changeAmt}px`
    let newRed = (redVal + changeRate);
    let newBlue = (blueVal - changeRate);
    if (newRed > 255) {
        newRed = 255;
    }
    if (newBlue < 0) {
        newBlue == 0;
    }
    progressBarEle.style.backgroundColor = 'rgb(' + newRed + ', 0,' + newBlue + ')';
}

function loop() {
    if (rate !== 0) {
        number += amount;
        update();
        updateProgress()
        window.setTimeout(loop, (1000 / rate));
    } else {
        window.setTimeout(loop, (100));
    }
}

function progressIncrement() {
    progress += progressInc;
    progressBarEle.style.width = `${progress}%`;
}

function checkBtns() {
    rateCost > number ? rateBtn.disabled = true : rateBtn.disabled = false;
    amountCost > number ? amountBtn.disabled = true : amountBtn.disabled = false;
}

function round(value) {
    return Math.round(value * 10) / 10;
}