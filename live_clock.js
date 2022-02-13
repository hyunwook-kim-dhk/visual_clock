function decimalToTwoDigitedStr(decimal) {
    if (decimal >= 10)
        return decimal.toString();
    return "0" + decimal.toString();
}

function getCurrentTimeStr() {
    now = new Date();

    timeStr = decimalToTwoDigitedStr(now.getHours()) + ":" +
                decimalToTwoDigitedStr(now.getMinutes()) + ":" +
                decimalToTwoDigitedStr(now.getSeconds());
    return timeStr;
}

function setCurrentTime() {
    document.getElementById("clock_txt").innerHTML = getCurrentTimeStr();
    let t = setTimeout(function(){ setCurrentTime() }, 1000);
}
setCurrentTime();
