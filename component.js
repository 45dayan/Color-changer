let box1 = document.querySelector('#box');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let body = document.querySelectorAll('body');
box1.onclick = () =>{
 console.log('button1 clicked'); 
 document.body.style.backgroundColor = 'red';
 document.body.innerText = 'RED'
};

box2.onclick = () => {
    console.log('button2 clicked');
    document.body.style.backgroundColor = 'green'
    document.body.innerText = 'Green'
 };

 box3.ondblclick = () => {
    console.log('button3 clicked');
    document.body.style.backgroundColor = 'blue';
    document.body.innerText = 'BLUE';
 };
