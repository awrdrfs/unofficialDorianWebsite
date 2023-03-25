/* Create a string variable with the text to be displayed, and initialize a count and timer variable */
let text = "大家安安！\n我是來自次元虛無深海的水母精魄：朵璃安 Dorian\n花朵的「朵」\n琉璃的「璃」\n安心的「安」\n可以叫我小朵或璃安就好\n(觸手比愛心";
let count = 0;
let timer;

/* Set an interval function to add each character of the text to the HTML element with the "text" class */
setInterval(function() {
    let textContent = text.charAt(count);
    if (textContent === '\n') {
        textContent = '<br>';
    }
    document.querySelector(".text").innerHTML += textContent;
    count++;
    if (count === text.length) {
        clearInterval(timer);
    }
}, 100);
