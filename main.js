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

document.getElementById("clock_txt").innerHTML = getCurrentTimeStr();
