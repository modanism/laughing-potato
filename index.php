<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="refresh" content="60">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Network Monitoring</title>
</head>
<body>
    <header>
        <h1>Network Monitoring</h1>
        <p>Lab Manajemen Energi ITB</p>
    </header>
    <div class="container">
        <div class="layer one">
            <div class="wrapper-1">
                <div class="firewall itb"></div>
                <div class="internet-gateway net-switch"></div>
            </div>
            <div class="cloud"></div>
        </div>
        <div class="layer two">
            <div class="net-switch top"></div>
            <div class="wrapper-2">
                <div class="firewall labME"></div>
                <div class="lab-gateway net-switch"></div>
            </div>
            <div class="wifi remote"></div>
            <div class="server warehouse">
                <p style="font-size:14px;position:relative;bottom:35%">[Status]</p>
            </div>
        </div>
        <div class="layer three">
            <div class="wrapper-3">
                <div class="server one"><p style="font-size:14px;position:relative;bottom:35%">[Status]</p></div>
                <div class="server two"><p style="font-size:14px;position:relative;bottom:35%">[Status]</p></div>
                <div class="wifi ap"><p style="font-size:14px;position:relative;bottom:35%">[Status]</p></div>
            </div>
            <div class="pc admin"></div>
            <div class="pc party"></div>
        </div>
        <div class="layer four">
            <div class="small-box left"><p style="font-size:14px;position:relative;bottom:35%">[Status]</p></div>
            <div class="small-box right"><p style="font-size:14px;position:relative;bottom:35%">[Status]</p></div>
        </div>
        <div class="layer five">
            <div class="wrapper-left">
                <div class="medium-box one"></div>
                <div class="medium-box two"></div>
            </div>
            <div class="wrapper-right">
                <div class="medium-box three"><p style="font-size:14px;position:relative;bottom:35%">[Status]</p></div>
                <div class="medium-box four"></div>
            </div>
            <div class="wrapper-info">
                <p class="time">Last update :</p>
            </div>
        </div>
        <div class="layer six">
            <div class="switch one"></div>
            <div class="triangle prio"></div>
        </div>
        <div class="layer seven">
            <div class="battery"></div>
            <div class="lv one"></div>
            <div class="lv two"></div>
            <div class="inverter one"></div>
            <div class="inverter two"></div>
            <div class="solar-panel"></div>
            <div class="lv three"></div>
            <div class="switch two"></div>
            <div class="triangle non-prio"></div>
        </div>
        <div class="layer eight">
            <div class="ground"></div>
        </div>
    </div>
<script src="library/leader-line.min.js"></script>
<script src="script.js"></script>

</body>
</html>