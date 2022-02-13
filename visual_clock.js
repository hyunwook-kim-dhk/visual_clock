function printInputValue(e) {
    console.log(this.value)
}

document.getElementById("btn_start").addEventListener('click', printInputValue);
