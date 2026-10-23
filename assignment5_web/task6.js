const text = document.getElementById('text');
const p1 = document.getElementById('p1');

text.addEventListener('keyup' , function () {
    p1.textContent = "You typed:" + text.value;
});