// constants
const STATUS = {
    'STOP': 0,
    'RUN': 1
}

// initialize variables
var current_status = STATUS.STOP

var time_left = 0;
var timer = null;

var input_form = document.getElementById('input_form');
var text_input = document.getElementById('time_input');
var clock_txt = document.getElementById('clock_txt');
var btn_dict = {
    'start': document.getElementById('btn_start'),
    'stop': document.getElementById('btn_stop'),
};

input_form.addEventListener('submit', (e) => { e.preventDefault(); });
input_form.addEventListener('submit', () => { setStatusRun(); });
text_input.addEventListener('keyup', (e) => { if (e.keycode == 13) setStatusRun(); });
btn_dict['start'].addEventListener('click', setStatusRun);
btn_dict['stop'].addEventListener('click', setStatusStop);

// functions
function decimalToTwoDigitedStr(decimal) {
    if (decimal >= 10)
        return decimal.toString();
    return '0' + decimal.toString();
}

function setStatusStop() {
    if (current_status == STATUS.STOP)
        return null;

    current_status = STATUS.STOP;
    clearInterval(timer);
    time_left = 0;
    clock_txt.innerHTML = '00:00';
    text_input.disabled = false;
    btn_dict['start'].disabled = false;
    btn_dict['stop'].disabled = true;
}

function setStatusRun() {
    if (current_status == STATUS.RUN)
        return null;

    var input_number = Number(text_input.value);
    if (input_number == NaN || input_number <= 0) {
        alert('Time have to be positive integer');
        return null;
    }

    current_status = STATUS.RUN;
    time_left = input_number;
    text_input.disabled = true;
    btn_dict['start'].disabled = true;
    btn_dict['stop'].disabled = false;
    startTimer();
    timer = setInterval(startTimer, 1000);
}

function getCurrentTimeStr() {
    return (decimalToTwoDigitedStr(parseInt(time_left / 60)) + ':' +
            decimalToTwoDigitedStr(time_left % 60));
}

function startTimer() {
    clock_txt.innerHTML = getCurrentTimeStr();
    if (time_left <= 0)
        setStatusStop();
    time_left--;
}
