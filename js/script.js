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
    clearInterval(progressInterval);
    delete progressInterval;
    if (rate > 75) {
        progressActive = false;
        progressBarDivEle.classList.add("spin");
        progressBarWrapperEle.classList.add("turn-black");
    } else {
        progressInterval = setInterval(progressIncrement, ((1000 / rate) / progressRate));
    }
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
    changeNumberSize();
    changeProgressBarColor();
}

function changeNumberSize() {
    if (amount % 1 === 0) {
        numberEle.style.fontSize = `${INITIAL_TEXT_SIZE + amount}px`;
    }
    if (amount % 2 == 0) {
        numberEle.style.marginTop = `-${amount / 2}px`;
    }
}

function changeProgressBarColor() {
    let changeRate = rate * 10;
    if (changeRate < 255) {
        let newRed = changeRate;
        let newBlue = (blueVal - (2 * changeRate));
        let newGreen = (greenVal - changeRate)
        if (newRed > 255) {
            newRed = 255;
        }
        if (newGreen < 0) {
            newGreen == 0;
        }
        if (newBlue < 0) {
            newBlue == 0;
        }
        progressBarEle.style.backgroundColor = 'rgb(' + newRed + ', ' + newGreen + ',' + newBlue + ')';
    }
}

function loop() {
    if (rate !== 0) {
        number += amount;
        update();
        if (progressActive) {
            updateProgress()
        }
        if (((amount > 150 && rate > 75) || number > 5000000) && !titleFade) {
            titleFade = true;
            titleEle.classList.add("fade-out-0")
            progressBarSectionEle.classList.add("fade-out-1")
            controlsEle.classList.add("fade-out-2");
            body.classList.add("turn-red");
            setTimeout(function() {
                rateBtn.disabled = true;
                amountBtn.disabled = true;
            }, 25000)
        } else {
            changeNumberSize();
        }
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