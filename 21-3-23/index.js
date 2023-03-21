const elementOne = document.getElementById('my')
elementOne.addEventListener('mouseenter', () =>{
    elementOne.style.backgroundColor = 'grey';
    //window.location='https://www.google.com';
    window.location.reload();
});
elementOne.addEventListener('mouseleave', ()=> {
    elementOne.style.backgroundColor= ''
});
const btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    elementOne.innerText= 'bye';
});