const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelector('.header .nav-bar .nav-list ul li a')
const header = document.querySelector('.header.container');


hamburger.addEventListener('click', () => {
     hamburger.classList.toggle('active');
     mobile_menu.classList.toggle('active');
});

const demo=document.getElementById('demo');
const but=document.querySelector('.btn1');
const img1=document.querySelector('.t2');

but.addEventListener('click',show);
img1.addEventListener('click',close);

function show(){
     demo.style.display='block';
}
 
function close(){
     demo.style.display='none';
 }

const call=document.getElementById('Call');
const but1=document.querySelector('.btn2');
const img2=document.querySelector('.t6');

but1.addEventListener('click',showr);
img2.addEventListener('click',closer);

function showr(){
     call.style.display='block';
}
 
function closer(){
     call.style.display='none';
 }

 const reach=document.getElementById('Reach');
const but2=document.querySelector('.btn3');
const img3=document.querySelector('.t7');

but2.addEventListener('click',showa);
img3.addEventListener('click',closea);

function showa(){
     reach.style.display='block';
}
 
function closea(){
     reach.style.display='none';
 }