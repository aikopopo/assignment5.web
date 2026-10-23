const cont = document.getElementById('cont2');
const text = document.getElementById('p1');

cont.addEventListener('mouseover' , function () {
    cont.style.backgroundColor = 'pink';
    text.textContent = 'Mouse over me';
});

cont.addEventListener('mouseout' , function () {
    cont.style.backgroundColor = 'lightblue';
    text.textContent = 'Mouse is out';
});





