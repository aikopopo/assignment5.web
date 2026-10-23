const cont = document.getElementById('cont1');
const text = document.getElementById('p1');
const bt1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click' , function (){
    cont.style.backgroundColor = 'pink';
});
btn2.addEventListener('click' , function (){ 
    text.style.fontSize = '67px';
});

