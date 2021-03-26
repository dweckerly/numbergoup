<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>NUMBER GO UP</title>
    <meta name="description" content="NUMBER GO UP">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Arvo&family=Train+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/main.css?no-cache=<?php echo time();?>">
    <link rel="stylesheet" href="css/animations.css?no-cache=<?php echo time();?>">
    <link rel="stylesheet" href="css/notification.css?no-cache=<?php echo time();?>">
</head>

<body>
    <section>
        <div id="title">
            <h1>NUMBER GO UP</h1>
        </div>
    </section>
    <section>
        <div id="number-wrapper">
            <h1 id="number"></h1>
        </div>
    </section>
    <section id="progress-bar-section">
        <div id="progress-bar-div">
            <div id="progress-bar-wrapper">
                <div id="progress-bar"></div>
            </div>
        </div>
    </section>
    <section id="controls">
        <div>
            <p>NUMBER GO UP SPEED:</p>
            <p id="rate"></p>
            <button id="rate-btn">FASTER</button>
            <p>(Costs <span id="rate-cost"></span> number)</p>
        </div>
        <div>
            <p>NUMBER GO UP AMOUNT:</p>
            <p id="amount"></p>
            <button id="amount-btn">MORE</button>
            <p>(Costs <span id="amount-cost"></span> number)</p>
        </div>
    </section>
    <div id="notification"></div>
</body>
<script type="text/javascript" src="js/vars.js?no-cache=<?php echo time();?>"></script>
<script type="text/javascript" src="js/script.js?no-cache=<?php echo time();?>"></script>

</html>