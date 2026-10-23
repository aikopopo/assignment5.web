const list = document.getElementById('list');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.addEventListener('click' , function (){
    const li = document.createElement('li');
    li.textContent = 'Item';
    list.appendChild(li);
});

btn2.addEventListener('click' , function () {
    const last = list.lastElementChild;
    last.remove();
});